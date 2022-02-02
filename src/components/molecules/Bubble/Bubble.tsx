import * as S from "./style";
import { ImageBox } from "@components/atoms";

export interface BubbleProps {
  direction: {
    leftAndRight: "left" | "right";
    upAndDown: "up" | "down";
  };
  price: number;
  discount: number;
  imgURL: string;
  title: string;
}

const Bubble = ({ direction, price, discount, imgURL, title }: BubbleProps) => {
  return (
    <S.BubbleBlock direction={direction}>
      <ImageBox width={70} height={70} selected={false} radius={4} />
      <S.RightSection>
        <S.Title>{title}ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㄴㅇ</S.Title>
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
