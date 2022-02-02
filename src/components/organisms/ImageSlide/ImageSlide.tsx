import styled from "styled-components";
import { IProduct } from "@models/ImageView";
import { ImageBox } from "@components/atoms";
import { useProductState, useSetProduct } from "@contexts/ProductContext";
import { useEffect, useRef } from "react";

const ImageSlideBlock = styled.div`
  display: flex;
  width: 800px;
  align-items: center;
  overflow-y: hidden;
  overflow-x: auto;
`;
const SlideWrapper = styled.ul`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  box-sizing: content-box;
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

  const toggleTooltip = (nextProduct: string) => {
    return () => {
      if (nextProduct === selectedProduct) {
        setProduct("");
      } else {
        setProduct(nextProduct);
      }
    };
  };

  useEffect(() => {
    const imageElems = [...document.querySelectorAll(".slide-item")] as HTMLDivElement[];

    slideItemRef.current = imageElems.reduce((map, $elem) => {
      map[$elem.dataset.name!] = $elem;
      return map;
    }, slideItemRef.current);
  }, []);

  useEffect(() => {
    const x = slideItemRef.current[selectedProduct]?.getBoundingClientRect().x;
    sliderRef.current.scrollTo(x, 0);
  }, [selectedProduct]);

  return (
    <ImageSlideBlock ref={sliderRef}>
      <SlideWrapper>
        {productList.map(({ productId, imageUrl, discountRate, productName }) => (
          <SlideItem key={productId} className={"slide-item"} data-name={productName}>
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
