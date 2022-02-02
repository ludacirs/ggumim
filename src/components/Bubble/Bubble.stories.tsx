import Bubble from "./Bubble";

import { Meta, ComponentStory } from "@storybook/react";

export default {
  title: "Components/Bubble",
  component: Bubble,
} as Meta;

const Template: ComponentStory<typeof Bubble> = (args) => (
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
    <Bubble {...args} />
  </div>
);

export const UpLeft = Template.bind({});
UpLeft.args = {
  title: "엘르 라인 쉬폰 커튼",
  price: 37900,
  direction: {
    leftAndRight: "left",
    upAndDown: "up",
  },
};

export const UpRight = Template.bind({});
UpRight.args = {
  title: "위 오른쪽",
  price: 999999,
  direction: {
    leftAndRight: "right",
    upAndDown: "up",
  },
};

export const DownLeft = Template.bind({});
DownLeft.args = {
  title: "아래 왼쪽",
  price: 999999,
  direction: {
    leftAndRight: "left",
    upAndDown: "down",
  },
};

export const DownRight = Template.bind({});
DownRight.args = {
  title: "아래 오른쪽",
  price: 999999,
  direction: {
    leftAndRight: "right",
    upAndDown: "down",
  },
};
export const Discount = Template.bind({});
Discount.args = {
  title: "아래 오른쪽",
  price: 999999,
  direction: {
    leftAndRight: "right",
    upAndDown: "down",
  },
  discount: 38,
};
