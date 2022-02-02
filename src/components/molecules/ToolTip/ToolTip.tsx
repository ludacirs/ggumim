import styled from "styled-components";
import { ToggleButton } from "@components/atoms";
import { Bubble } from "@components/molecules";

const ToolTipBlock = styled.div<Pick<ToolTipProps, "pointY" | "pointX">>`
  position: absolute;
  top: ${({ pointX }) => pointX * 1.6}px;
  left: ${({ pointY }) => pointY * 1.7}px;
`;
interface ToolTipProps {
  isOpen: boolean;
  productionName: string;
  imageUrl: string;
  priceDiscount: number;
  discountRate: number;
  outside: boolean;
  pointX: number;
  pointY: number;
}

const ToolTip = ({
  isOpen,
  priceDiscount,
  productionName,
  imageUrl,
  discountRate,
  outside,
  pointX,
  pointY,
}: ToolTipProps) => {
  const upOrDown = pointX < 400 ? "up" : "down";
  const leftOrRight = pointY < 400 ? "left" : "right";

  return (
    <ToolTipBlock pointX={pointX} pointY={pointY}>
      <ToggleButton isOpen={isOpen} />
      {isOpen && (
        <Bubble
          title={productionName}
          imageUrl={imageUrl}
          discount={discountRate}
          price={priceDiscount}
          direction={{ upOrDown, leftOrRight }}
        />
      )}
    </ToolTipBlock>
  );
};

export default ToolTip;
