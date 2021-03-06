import styled from "styled-components";
import badge from "@assets/icons/badge.png";
import { useState } from "react";

const ImageBoxBlock = styled.div<Omit<ImageBoxProps, "imageUrl" | "onClick">>`
  position: relative;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  ${({ selected }) => (selected ? `background: linear-gradient(163.54deg, #ff659e 8.22%, #f56b30 94.1%);` : ``)};

  border-radius: 18px;
  padding: 2px;
  img {
    width: 100%;
    height: 100%;
    border-radius: ${({ radius }) => radius}px;
    border: 0.5px solid ${({ selected }) => (selected ? "white" : "#aaafb9")};
  }
  &:hover {
    cursor: pointer;
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
  width?: number;
  height?: number;
  discount?: number;
  radius?: number;
  selected: boolean;
  imageUrl: string;
  onClick?: any;
}

const ImageBox = ({ width = 106, height = 106, radius = 16, selected, discount, imageUrl, onClick }: ImageBoxProps) => {
  const [startX, setStartX] = useState(0);
  const handleMouseDown = (e: any) => {
    const { clientX } = e;
    setStartX(clientX);
  };
  const handleMouseUp = (e: any) => {
    if (Math.abs(startX - e.clientX) < 10) {
      onClick(e);
    }
  };
  return (
    <ImageBoxBlock
      width={width}
      height={height}
      selected={selected}
      discount={discount}
      radius={radius}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <img src={imageUrl} alt="가구 이미지" draggable={false} />
      {!!discount && <Badge>{discount}%</Badge>}
    </ImageBoxBlock>
  );
};

export default ImageBox;
