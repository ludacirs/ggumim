import styled from "styled-components";
import { IProduct } from "@models/ImageView";
import { ImageBox } from "@components/atoms";

const ImageSlideBlock = styled.div`
  display: flex;
  width: 800px;
  align-items: center;
  overflow-y: hidden;
  overflow-x: auto;
`;
const SlideWrapper = styled.ul`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  box-sizing: content-box;
`;

const SlideItem = styled.li`
  display: inline-flex;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  margin: 28px 6px;
`;

interface ImageSlideProps {
  productList: IProduct[];
}

const ImageSlide = ({ productList }: ImageSlideProps) => {
  return (
    <ImageSlideBlock>
      <SlideWrapper>
        {productList.map((product) => (
          <SlideItem key={product.productId}>
            <ImageBox imageUrl={product.imageUrl} selected={false} />
          </SlideItem>
        ))}
      </SlideWrapper>
    </ImageSlideBlock>
  );
};

export default ImageSlide;
