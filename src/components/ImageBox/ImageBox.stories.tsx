import ImageBox from "./ImageBox";

import { Meta, ComponentStory } from "@storybook/react";

export default {
  title: "Components/ImageBox",
  component: ImageBox,
} as Meta;

const Template: ComponentStory<typeof ImageBox> = (args) => <ImageBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: 106,
  height: 106,
};
export const Discount = Template.bind({});
Discount.args = {
  width: 106,
  height: 106,
  discount: 48,
};

export const Selected = Template.bind({});
Selected.args = {
  width: 106,
  height: 106,
  selected: true,
};

export const Small = Template.bind({});
Small.args = {
  width: 70,
  height: 70,
};
