import React from "react";
import styled from "styled-components";
import { IProduct } from "@models/ImageView";
import { ImageBox } from "@components/atoms";
import { useProductState, useSetProduct } from "@contexts/ProductContext";
import useSlide from "./useSlide";

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
  const { handleMouseMove, handleMouseUp, handleMouseDown, translateX } = useSlide({ productList, selectedProduct });

  const toggleTooltip = (nextProduct: string) => {
    return () => {
      if (nextProduct === selectedProduct) {
        setProduct("");
      } else {
        setProduct(nextProduct);
      }
    };
  };

  return (
    <ImageSlideBlock>
      <SlideWrapper
        translateX={-translateX}
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
