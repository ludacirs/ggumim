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
  return (
    <ToolTipBlock pointX={pointX} pointY={pointY}>
      <ToggleButton isOpen={isOpen} />
      {isOpen && (
        <Bubble title={"s"} imgURL={""} discount={10} price={1} direction={{ upAndDown: "up", leftAndRight: "left" }} />
      )}
    </ToolTipBlock>
  );
};

export default ToolTip;
