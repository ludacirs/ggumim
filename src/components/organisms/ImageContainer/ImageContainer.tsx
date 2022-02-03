import React from "react";
import styled from "styled-components";
import { IImageView } from "@models/ImageView";
import { ToolTip } from "@components/molecules";
import { useSetProduct } from "@contexts/ProductContext";
import useBoundingRect from "@hooks/useBoundingRect";

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
  const [rectInfo, callbackRef] = useBoundingRect();

  const { height, heightWeight, widthWeight } = rectInfo;

  const offToolTip = () => {
    setProduct("");
  };

  return (
    <ImageContainerBlock onClick={offToolTip}>
      <img src={imageUrl} alt="전체 이미지" ref={callbackRef} />
      {productList.map(({ discountRate, productId, productName, priceDiscount, outside, imageUrl, pointX, pointY }) => (
        <ToolTip
          key={productId}
          productId={productId}
          discountRate={discountRate}
          imageUrl={imageUrl}
          priceDiscount={priceDiscount}
          outside={outside}
          productionName={productName}
          pointX={pointX * heightWeight}
          pointY={pointY * widthWeight}
          imageHeight={height}
        />
      ))}
    </ImageContainerBlock>
  );
};

export default ImageContainer;
