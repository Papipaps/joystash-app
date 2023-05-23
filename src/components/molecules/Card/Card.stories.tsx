import { Meta, Story, StoryFn } from "@storybook/react";
import Card, { CardProps } from "./Card";
import { svgIcons } from "../../../assets/icons/icons";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    svgPath: { control: "text" },
    title: { control: "text" },
    description: { control: "text" },
  },
} as Meta;

const Template: StoryFn<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Example Title",
  description: "Example Description",
};

export const Info = Template.bind({});
Info.args = {
  svgPath: svgIcons.infoSVG,
  title: "Information",
  description: "This is an important information",
};

export const Actions = Template.bind({});
Actions.args = {
  title: "Action",
  description:
    "This is an action dialog. Here, you can chose to have one or two buttons that can call 2 callback functions. By default one of the two is primary.",
  cancel: { label: "Cancel", callback: () => console.log("Cancel") },
  action: { label: "OK", callback: () => console.log("Ok") },
  actionsPosition: "middle",
};
export const ActionsLeft = Template.bind({});
ActionsLeft.args = {
  title: "ActionLeft",
  description:
    "This is an action dialog. Here, you can chose to have one or two buttons that can call 2 callback functions. By default one of the two is primary.",
  cancel: { label: "Cancel", callback: () => console.log("Cancel") },
  action: { label: "OK", callback: () => console.log("Ok") },
  actionsPosition: "left",
};
export const ActionsRight = Template.bind({});
ActionsRight.args = {
  title: "ActionRight",
  description:
    "This is an action dialog. Here, you can chose to have one or two buttons that can call 2 callback functions. By default one of the two is primary.",
  cancel: { label: "Cancel", callback: () => console.log("Cancel") },
  action: { label: "OK", callback: () => console.log("Ok") },
  actionsPosition: "right",
};
