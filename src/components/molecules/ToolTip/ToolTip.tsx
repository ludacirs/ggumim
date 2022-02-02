import styled from "styled-components";
import { ToggleButton } from "@components/atoms";
import { Bubble } from "@components/molecules";
import { useSetProduct, useProductState } from "@contexts/ProductContext";

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
}

const ToolTip = ({ priceDiscount, productionName, imageUrl, discountRate, outside, pointX, pointY }: ToolTipProps) => {
  const setProduct = useSetProduct();
  const selectedProduct = useProductState();

  const upOrDown = pointY * 1.7 < 450 ? "up" : "down";
  const leftOrRight = pointX * 1.6 < 400 ? "right" : "left";

  const isOpen = selectedProduct === productionName;

  const toggleTooltip = () => {
    if (selectedProduct === productionName) {
      setProduct("");
    } else {
      setProduct(productionName);
    }
  };

  return (
    <ToolTipBlock pointX={pointX} pointY={pointY}>
      <ToggleButton isOpen={isOpen} onClick={toggleTooltip} />
      <Bubble
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
