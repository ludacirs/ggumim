import styled from "styled-components";
import { ImageContainer, ImageSlide } from "@components/organisms";
import { IImageView } from "@models/ImageView";
import useFetch from "@hooks/useFetch";

const PictureViewerBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

const PictureViewer = () => {
  const imageViewData = useFetch<IImageView>("dummy.json");

  return (
    <PictureViewerBlock>
      <div>
        {imageViewData && (
          <>
            <ImageContainer imageViewData={imageViewData} />
            <ImageSlide productList={imageViewData.productList} />
          </>
        )}
      </div>
    </PictureViewerBlock>
  );
};

export default PictureViewer;
