import { useEffect, useState } from "react";
import { TUpOrDown, TLeftOrRight } from "@components/molecules/Bubble/Bubble";
import { IMAGE_WIDTH, WEIGHT } from "../../../utils/constant";
import { ToolTipProps } from "@components/molecules/ToolTip/ToolTip";

type TUseDirection = Pick<ToolTipProps, "imageHeight" | "pointY" | "pointX">;

const useDirection: ({ imageHeight, pointX, pointY }: TUseDirection) => {
  upOrDown: TUpOrDown;
  leftOrRight: TLeftOrRight;
} = ({ imageHeight, pointX, pointY }) => {
  const [upOrDown, setUpOrDown] = useState<TUpOrDown>("up");
  const leftOrRight = pointY * WEIGHT.Y > IMAGE_WIDTH ? "right" : "left";

  useEffect(() => {
    setUpOrDown(pointX * WEIGHT.X < imageHeight / 2 ? "up" : "down");
  }, [imageHeight, pointX]);

  return { upOrDown, leftOrRight };
};

export default useDirection;
