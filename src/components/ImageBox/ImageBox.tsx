import styled from "styled-components";
import badge from "@assets/icons/badge.png";

const ImageBoxBlock = styled.div<ImageBoxProps>`
  position: relative;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  ${({ selected }) =>
    selected
      ? `
  background: linear-gradient(163.54deg, #ff659e 8.22%, #f56b30 94.1%);  
  border-radius: 18px; 
  padding: 2px;`
      : ``};

  img {
    width: 100%;
    height: 100%;
    border-radius: 16px;
    border: 0.5px solid white;
  }
`;

const Badge = styled.div`
    position: absolute;
    top: 3px;
    right: 8px;
    background-image: url(${badge});
    width: 24px;
    height: 28px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    font-size: 11px;
    font-weight: bold;
    line-height: 25px;
    color: white;
    text-align: center;
    padding-left: 1px;
}`;

interface ImageBoxProps {
  width: number;
  height: number;
  selected: boolean;
  discount?: number;
}

const ImageBox = ({ width = 106, height = 106, selected, discount }: ImageBoxProps) => {
  return (
    <ImageBoxBlock width={width} height={height} selected={selected} discount={discount}>
      <img src="https://cdn.ggumim.co.kr/cache/furniture/300/20220110174102naCtctXTxY.png" alt="가구 이미지" />
      {discount && <Badge>{discount}%</Badge>}
    </ImageBoxBlock>
  );
};

export default ImageBox;
