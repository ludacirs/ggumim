import styled from "styled-components";
import lens from "@assets/icons/lens.png";
import close from "@assets/icons/close.png";

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
}

const ToggleButton = ({ isOpen = false }: ToggleButtonProps) => {
  return (
    <ToggleButtonBlock>
      <img src={isOpen ? close : lens} alt={"button"} />
    </ToggleButtonBlock>
  );
};

export default ToggleButton;
