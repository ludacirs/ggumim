import styled from "styled-components";
import { ToggleButton } from "@components/atoms";
import { Bubble } from "@components/molecules";
import { useSetProduct, useProductState } from "@contexts/ProductContext";
import React from "react";

const ToolTipBlock = styled.div<Pick<ToolTipProps, "pointY" | "pointX">>`
  position: absolute;
  top: ${({ pointX }) => pointX * 1.6}px;
  left: ${({ pointY }) => pointY * 1.7}px;
`;
interface ToolTipProps {
  productionName: string;
  imageUrl: string;
  priceDiscount: number;
  discountRate: number;
  outside: boolean;
  pointX: number;
  pointY: number;
  productId: number;
}

const ToolTip = ({
  productId,
  priceDiscount,
  productionName,
  imageUrl,
  discountRate,
  outside,
  pointX,
  pointY,
}: ToolTipProps) => {
  const setProduct = useSetProduct();
  const selectedProduct = useProductState();

  const upOrDown = pointY * 1.7 < 450 ? "up" : "down";
  const leftOrRight = pointX * 1.6 < 400 ? "right" : "left";

  const isOpen = selectedProduct === productionName;

  const toggleTooltip = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setProduct((prevProduct) => {
      return prevProduct === productionName ? "" : productionName;
    });
  };

  return (
    <ToolTipBlock pointX={pointX} pointY={pointY}>
      <ToggleButton isOpen={isOpen} onClick={toggleTooltip} />
      <Bubble
        productId={productId}
        isOpen={isOpen}
        title={productionName}
        imageUrl={imageUrl}
        discount={discountRate}
        price={priceDiscount}
        direction={{ upOrDown, leftOrRight }}
        outside={outside}
      />
    </ToolTipBlock>
  );
};

export default ToolTip;
