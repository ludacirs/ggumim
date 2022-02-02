import React from "react";
import styled from "styled-components";
import { IImageView } from "@models/ImageView";
import { ToolTip } from "@components/molecules";
import { useSetProduct } from "@contexts/ProductContext";

const ImageContainerBlock = styled.div`
  position: relative;
  width: 800px;
  height: auto;
  img {
    width: inherit;
    height: inherit;
  }
`;
interface ImageContainerProps {
  imageViewData: IImageView;
}

const ImageContainer = ({ imageViewData }: ImageContainerProps) => {
  const { imageUrl, productList } = imageViewData;
  const setProduct = useSetProduct();

  const offToolTip = () => {
    setProduct("");
  };

  return (
    <ImageContainerBlock onClick={offToolTip}>
      <img src={imageUrl} alt="전체 이미지" />
      {productList.map(({ discountRate, productId, productName, priceDiscount, outside, imageUrl, pointX, pointY }) => (
        <ToolTip
          key={productId}
          productId={productId}
          discountRate={discountRate}
          imageUrl={imageUrl}
          priceDiscount={priceDiscount}
          outside={outside}
          productionName={productName}
          pointX={pointX}
          pointY={pointY}
        />
      ))}
    </ImageContainerBlock>
  );
};

export default ImageContainer;
