import ToolTip from "./ToolTip";

import { Meta, ComponentStory } from "@storybook/react";

export default {
  title: "molecules/ToolTip",
  component: ToolTip,
} as Meta;

const Template: ComponentStory<typeof ToolTip> = (args) => (
  <div
    style={{
      background: "black",
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <ToolTip {...args} />
  </div>
);

export const Open = Template.bind({});
Open.args = {
  priceDiscount: 9999,
  productionName: "가구",
  discountRate: 30,
  pointX: 50,
  pointY: 50,
  imageUrl: "https://cdn.ggumim.co.kr/cache/furniture/300/20220110174102naCtctXTxY.png",
  outside: false,
};

// export const Close = Template.bind({});
// Close.args = {
//   isOpen: false,
//   priceDiscount: 9999,
//   productionName: "가구",
//   discountRate: 30,
//   pointX: 50,
//   pointY: 50,
//   imageUrl: "https://cdn.ggumim.co.kr/cache/furniture/300/20220110174102naCtctXTxY.png",
// };
