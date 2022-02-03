import { useState } from "react";

interface RectInfo {
  height: number;
  width: number;
  widthWeight: number;
  heightWeight: number;
}

const useBoundingRect = (): [RectInfo, (node: HTMLImageElement) => void] => {
  const [rectInfo, setRectInfo] = useState<RectInfo>({
    height: 0,
    width: 0,
    widthWeight: 0,
    heightWeight: 0,
  });

  const containerRef = (node: HTMLImageElement) => {
    if (node) {
      node.onload = () => {
        const { height, width } = node.getBoundingClientRect();
        const heightWeight = (height / node.naturalHeight) * 2;
        const widthWeight = (width / node.naturalWidth) * 2;

        requestAnimationFrame(() => {
          setRectInfo({ height, width, heightWeight, widthWeight });
        });
      };
    }
  };
  return [rectInfo, containerRef];
};

export default useBoundingRect;
