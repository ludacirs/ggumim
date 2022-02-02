import { useState } from "react";

const useBoundingRect = (): [{ width: number; height: number }, (node: HTMLImageElement) => void] => {
  const [rectInfo, setRectInfo] = useState({
    height: 0,
    width: 0,
  });

  const containerRef = (node: HTMLImageElement) => {
    if (node) {
      node.onload = () => {
        const rectInfo = node.getBoundingClientRect();
        setRectInfo({ height: rectInfo.height, width: rectInfo.width });
      };
    }
  };
  return [rectInfo, containerRef];
};

export default useBoundingRect;
