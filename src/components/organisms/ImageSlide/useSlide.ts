import React, { useCallback, useEffect, useRef, useState } from "react";
import { SLIDE } from "@utils/constant";
import { IProduct } from "@models/ImageView";

interface IUseSlide {
  productList: IProduct[];
  selectedProduct: string;
}

const useSlide = ({ productList, selectedProduct }: IUseSlide) => {
  const [translateX, setTranslateX] = useState(0);

  const slideItemRef = useRef<{ [propsName: string]: HTMLDivElement }>({});

  const maxTransX = Math.floor(productList.length / SLIDE.SCROLL_COUNT) * SLIDE.ITEM_WIDTH + SLIDE.PAD;
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);

  useEffect(() => {
    const imageElems = Array.from(document.querySelectorAll(".slide-item")) as HTMLDivElement[];

    slideItemRef.current = imageElems.reduce((map, $elem) => {
      map[$elem.dataset.name!] = $elem;
      return map;
    }, slideItemRef.current);
  }, []);

  useEffect(() => {
    if (!slideItemRef.current[selectedProduct]) {
      return;
    }
    const transX = slideItemRef.current[selectedProduct]?.offsetLeft;

    setTranslateX(transX > maxTransX ? maxTransX : transX - SLIDE.PAD);
  }, [selectedProduct]);

  const handleMouseDown = (e: React.MouseEvent<HTMLUListElement>) => {
    const { clientX } = e;
    setIsMouseDown(true);
    setStartX(clientX);
  };
  const handleMouseUp = (e: React.MouseEvent<HTMLUListElement>) => {
    const { clientX } = e;

    if (Math.abs(clientX - startX) > 10) {
      setTranslateX((prev) => {
        if (prev < 0) {
          return 0;
        }
        if (prev > maxTransX) {
          return maxTransX;
        }
        return prev - SLIDE.PAD;
      });
    }

    setIsMouseDown(false);
    setStartX(0);
  };

  const moveSlide = useCallback(
    (clientX: number) => {
      setTranslateX(translateX + startX - clientX);
    },
    [isMouseDown]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLUListElement>) => {
    if (!isMouseDown) {
      return;
    }

    moveSlide(e.clientX);
  };

  return { handleMouseMove, handleMouseUp, handleMouseDown, translateX };
};

export default useSlide;
