import * as S from "./style";
import { ImageBox } from "@components/atoms";

export interface BubbleProps {
  direction: {
    leftOrRight: "left" | "right";
    upOrDown: "up" | "down";
  };
  price: number;
  discount: number;
  imageUrl: string;
  title: string;
}
const Bubble = ({ direction, price, discount, imageUrl, title }: BubbleProps) => {
  return (
    <S.BubbleBlock direction={direction}>
      <ImageBox width={70} height={70} selected={false} radius={4} imageUrl={imageUrl} />
      <S.RightSection>
        <S.Title>{title}</S.Title>
        <S.PriceTab className="price-tab">
          {discount ? <S.Discount>{discount}%</S.Discount> : <S.ExpectedPrice>예상가</S.ExpectedPrice>}
          <S.Price className={"price"}>{price}</S.Price>
          <div>{">"}</div>
        </S.PriceTab>
      </S.RightSection>
    </S.BubbleBlock>
  );
};

export default Bubble;
