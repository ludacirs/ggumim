import styled from "styled-components";
import { ToggleButton } from "@components/atoms";
import { Bubble } from "@components/molecules";

const ToolTipBlock = styled.div`
  position: relative;
`;

interface ToolTipProps {
  isOpen: boolean;
  productionName: string;
  imageUrl: string;
  priceDiscount: number;
  discountRate: number;
  outside: boolean;
}

const ToolTip = ({ isOpen, priceDiscount, productionName, imageUrl, discountRate, outside }: ToolTipProps) => {
  return (
    <ToolTipBlock>
      <ToggleButton isOpen={isOpen} />
      {isOpen && (
        <Bubble title={"s"} imgURL={""} discount={10} price={1} direction={{ upAndDown: "up", leftAndRight: "left" }} />
      )}
    </ToolTipBlock>
  );
};

export default ToolTip;
