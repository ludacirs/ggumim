import styled from "styled-components";
import lens from "@assets/icons/lens.png";
import close from "@assets/icons/close.png";
import { MouseEventHandler } from "react";

const ToggleButtonBlock = styled.button`
  width: 32px;
  height: 32px;
  img {
    width: 100%;
    height: 100%;
  }
`;

interface ToggleButtonProps {
  isOpen: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const ToggleButton = ({ isOpen = false, onClick }: ToggleButtonProps) => {
  return (
    <ToggleButtonBlock onClick={onClick}>
      <img src={isOpen ? close : lens} alt={"button"} />
    </ToggleButtonBlock>
  );
};

export default ToggleButton;
