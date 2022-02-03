import styled from "styled-components";
import { IProduct } from "@models/ImageView";
import { ImageBox } from "@components/atoms";
import { useProductState, useSetProduct } from "@contexts/ProductContext";
import React, { useEffect, useRef, useState } from "react";
import { SLIDE } from "../../../utils/constant";

const ImageSlideBlock = styled.div`
  display: flex;
  width: 800px;
  align-items: center;
  overflow-y: hidden;
  overflow-x: auto;
`;
const SlideWrapper = styled.ul<{ translateX: number }>`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  box-sizing: content-box;

  will-change: contents;
  transition: 0.45s;
  transform: translateX(${({ translateX }) => translateX}px);
`;

const SlideItem = styled.li`
  display: inline-flex;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  margin: 28px 6px;
`;

interface ImageSlideProps {
  productList: IProduct[];
}

const ImageSlide = ({ productList }: ImageSlideProps) => {
  const setProduct = useSetProduct();
  const selectedProduct = useProductState();
  const slideItemRef = useRef<{ [propsName: string]: HTMLDivElement }>({});
  const sliderRef = useRef<any>();
  const [translateX, setTranslateX] = useState(0);
  const toggleTooltip = (nextProduct: string) => {
    return () => {
      if (nextProduct === selectedProduct) {
        setProduct("");
      } else {
        setProduct(nextProduct);
      }
    };
  };
  const maxTransX = Math.floor(productList.length / SLIDE.SCROLL_COUNT) * SLIDE.ITEM_WIDTH + SLIDE.PAD;
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [coordinate, setCoordinate] = useState({
    startX: 0,
    distance: 0,
  });

  useEffect(() => {
    const imageElems = Array.from(document.querySelectorAll(".slide-item")) as HTMLDivElement[];

    slideItemRef.current = imageElems.reduce((map, $elem) => {
      map[$elem.dataset.name!] = $elem;
      return map;
    }, slideItemRef.current);
  }, []);

  useEffect(() => {
    if (!slideItemRef.current[selectedProduct]) {
      return;
    }
    const transX = slideItemRef.current[selectedProduct]?.offsetLeft;

    setTranslateX(transX);
  }, [selectedProduct]);

  const handleMouseDown = (e: React.MouseEvent<HTMLUListElement>) => {
    const { clientX } = e;
    setIsMouseDown(true);
    setCoordinate({ ...coordinate, startX: clientX });
  };
  const handleMouseUp = () => {
    setCoordinate({ distance: 0, startX: 0 });
    setIsMouseDown(false);
  };
  const handleMouseMove = (e: React.MouseEvent<HTMLUListElement>) => {
    if (!isMouseDown) {
      return;
    }
    setTranslateX(coordinate.startX - e.clientX < 0 ? 0 : coordinate.startX - e.clientX);
  };

  return (
    <ImageSlideBlock ref={sliderRef}>
      <SlideWrapper
        translateX={-(translateX > maxTransX ? maxTransX : translateX - SLIDE.PAD)}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        draggable={false}
      >
        {productList.map(({ productId, imageUrl, discountRate, productName }) => (
          <SlideItem key={productId} className={"slide-item"} data-name={productName} draggable={false}>
            <ImageBox
              imageUrl={imageUrl}
              selected={selectedProduct === productName}
              discount={discountRate}
              onClick={toggleTooltip(productName)}
            />
          </SlideItem>
        ))}
      </SlideWrapper>
    </ImageSlideBlock>
  );
};

export default ImageSlide;
