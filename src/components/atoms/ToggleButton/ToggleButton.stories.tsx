import ToggleButton from "./ToggleButton";

import { Meta, ComponentStory } from "@storybook/react";

export default {
  title: "Components/ToggleButton",
  component: ToggleButton,
} as Meta;

const Template: ComponentStory<typeof ToggleButton> = (args) => <ToggleButton {...args} />;

export const Default = Template.bind({});
Default.args = {};
