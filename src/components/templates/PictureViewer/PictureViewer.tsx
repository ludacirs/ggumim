import styled from "styled-components";
import { ImageContainer, ImageSlide } from "@components/organisms";
import { IImageView } from "@models/ImageView";
import useFetch from "../../../hooks/useFetch";

const PictureViewerBlock = styled.div``;

interface PictureViewerProps {}

const PictureViewer = ({}: PictureViewerProps) => {
  const imageViewData = useFetch<IImageView>("dummy.json");

  return (
    <PictureViewerBlock>
      {imageViewData && (
        <>
          <ImageContainer imageViewData={imageViewData} />
          <ImageSlide productList={imageViewData.productList} />
        </>
      )}
    </PictureViewerBlock>
  );
};

export default PictureViewer;
