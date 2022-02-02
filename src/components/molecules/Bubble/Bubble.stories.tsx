import Bubble from "./Bubble";

import { Meta, ComponentStory } from "@storybook/react";

export default {
  title: "molecules/Bubble",
  component: Bubble,
} as Meta;

const Template: ComponentStory<typeof Bubble> = (args) => (
  <div
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
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
    leftOrRight: "left",
    upOrDown: "up",
  },
};

export const UpRight = Template.bind({});
UpRight.args = {
  title: "위 오른쪽",
  price: 999999,
  direction: {
    leftOrRight: "right",
    upOrDown: "up",
  },
};

export const DownLeft = Template.bind({});
DownLeft.args = {
  title: "아래 왼쪽",
  price: 999999,
  direction: {
    leftOrRight: "left",
    upOrDown: "down",
  },
};

export const DownRight = Template.bind({});
DownRight.args = {
  title: "아래 오른쪽",
  price: 999999,
  direction: {
    leftOrRight: "right",
    upOrDown: "down",
  },
};
export const Discount = Template.bind({});
Discount.args = {
  title: "아래 오른쪽",
  price: 999999,
  direction: {
    leftOrRight: "right",
    upOrDown: "down",
  },
  discount: 38,
};
