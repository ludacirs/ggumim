import PictureViewer from "./PictureViewer";

import { Meta, ComponentStory } from "@storybook/react";

export default {
  title: "templates/PictureViewer",
  component: PictureViewer,
} as Meta;

const Template: ComponentStory<typeof PictureViewer> = (args) => <PictureViewer {...args} />;

export const Default = Template.bind({});
Default.args = {};
