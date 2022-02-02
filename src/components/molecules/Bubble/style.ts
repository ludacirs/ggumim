import styled from "styled-components";
import { BubbleProps } from "./Bubble";

export const BubbleBlock = styled.div<Pick<BubbleProps, "direction">>`
  position: absolute;
  ${({ direction }) => (direction.upOrDown === "up" ? `top: 30px;` : "top: -95px;")}
  ${({ direction }) => (direction.leftOrRight === "left" ? `left: -26px;` : "left: -161px;")}
  
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.95);
  width: 220px;
  height: 86px;
  padding: 8px 0 8px 8px;
  margin-top: 16px;
  border-radius: 7px;
  -webkit-box-shadow: 3px 3px 8px 0 rgb(0 0 0 / 20%);
  box-shadow: 3px 3px 8px 0 rgb(0 0 0 / 20%);
  font-size: 14px;
  color: #4a4a4a;
  ::before {
    content: "";
    position: absolute;
    border-color: rgba(255, 255, 255, 0.95) transparent;
    border-style: solid;
    ${({ direction }) => (direction.upOrDown === "up" ? `border-width: 0 8px 8px;` : "border-width: 8px 8px 0;")}
    display: block;
    z-index: 1;
    ${({ direction }) => (direction.leftOrRight === "left" ? "left: 34px;" : "right: 34px;")}
    ${({ direction }) => (direction.upOrDown === "up" ? "top: -8px;" : "bottom: -8px;")}
  }
`;

export const RightSection = styled.div`
  margin-left: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const Title = styled.div`
  display: -webkit-box;
  width: 130px;
  color: #333c45;
  line-height: 1.3em;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  white-space: initial;
`;

export const PriceTab = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ExpectedPrice = styled.span`
  line-height: 1.2em;
  color: #898f94;
  font-size: 11px;
  font-weight: bold;
  margin-right: 4px;
`;

export const Price = styled.span`
  display: flex;
  align-items: center;
  color: #181d1f;
  font-size: 16px;
  line-height: 16px;
  font-weight: bold;
`;

export const Discount = styled.span`
  color: #ff585d;
  margin-right: 4px;
  line-height: 1.2em;
  font-size: 16px;
  font-weight: bold;
`;
