import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IImageView } from "@models/ImageView";
import ToolTip from "@components/molecules/ToolTip/ToolTip";

const ImageContainerBlock = styled.div`
  position: relative;
  width: 800px;
  height: auto;
  img {
    width: inherit;
    height: inherit;
  }
`;
interface ImageContainerProps {}

const ImageContainer = ({}: ImageContainerProps) => {
  const [test, setTest] = useState<IImageView>();
  useEffect(() => {
    const fetchAPI = async () => {
      const response = await fetch("dummy.json");
      const data = await response.json();
      setTest(data);
    };
    fetchAPI();
  }, []);

  return (
    <ImageContainerBlock>
      {test && (
        <>
          <img src={test.imageUrl} alt="전체 이미지" />
          {test.productList.map(
            ({ discountRate, productId, productName, priceDiscount, outside, imageUrl, pointX, pointY }) => (
              <ToolTip
                key={productId}
                isOpen={false}
                discountRate={discountRate}
                imageUrl={imageUrl}
                priceDiscount={priceDiscount}
                outside={outside}
                productionName={productName}
                pointX={pointX}
                pointY={pointY}
              />
            )
          )}
        </>
      )}
    </ImageContainerBlock>
  );
};

export default ImageContainer;
