import ImageContainer from "./ImageContainer";

import { Meta, ComponentStory } from "@storybook/react";

export default {
  title: "Organisms/ImageContainer",
  component: ImageContainer,
} as Meta;

const Template: ComponentStory<typeof ImageContainer> = (args) => <ImageContainer {...args} />;

export const Default = Template.bind({});
Default.args = {};
