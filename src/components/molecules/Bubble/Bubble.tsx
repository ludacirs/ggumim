import * as S from "./style";
import { ImageBox } from "@components/atoms";
import { addCommaSecond } from "@utils/format";

export type TUpOrDown = "up" | "down";
export type TLeftOrRight = "left" | "right";

export interface BubbleProps {
  direction: {
    leftOrRight: TLeftOrRight;
    upOrDown: TUpOrDown;
  };
  price: number;
  discount: number;
  imageUrl: string;
  title: string;
  isOpen: boolean;
  outside: boolean;
  productId: number;
}
const Bubble = ({ productId, isOpen, direction, price, discount, imageUrl, title, outside }: BubbleProps) => {
  const moveToProductPage = () => {
    window.location.href = `https://www.ggumim.co.kr/furniture/view/${productId}`;
  };
  return (
    <S.BubbleBlock direction={direction} isOpen={isOpen} tabIndex={1} onClick={moveToProductPage}>
      <ImageBox width={70} height={70} selected={false} radius={4} imageUrl={imageUrl} />
      <S.RightSection>
        <S.Title>{title}</S.Title>
        <S.PriceTab className="price-tab">
          {!outside ? <S.Discount>{discount}%</S.Discount> : <S.ExpectedPrice>예상가</S.ExpectedPrice>}
          <S.Price className={"price"}>{addCommaSecond(price)}</S.Price>
          <div>{">"}</div>
        </S.PriceTab>
      </S.RightSection>
    </S.BubbleBlock>
  );
};

export default Bubble;
