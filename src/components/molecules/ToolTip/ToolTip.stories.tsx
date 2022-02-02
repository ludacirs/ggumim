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
  isOpen: true,
};

export const Close = Template.bind({});
Close.args = {
  isOpen: false,
};
