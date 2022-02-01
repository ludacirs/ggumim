import styled from "styled-components";

const ImageBoxBlock = styled.div<ImageBoxProps>`
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

interface ImageBoxProps {
  width: number;
  height: number;
  selected: boolean;
}

const ImageBox = ({ width = 106, height = 106, selected }: ImageBoxProps) => {
  return (
    <ImageBoxBlock width={width} height={height} selected={selected}>
      <img src="https://cdn.ggumim.co.kr/cache/furniture/300/20220110174102naCtctXTxY.png" alt="가구 이미지" />
    </ImageBoxBlock>
  );
};

export default ImageBox;
