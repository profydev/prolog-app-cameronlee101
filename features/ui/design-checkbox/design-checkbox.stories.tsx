import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { CheckboxSize, CheckboxState, DesignCheckbox } from "./design-checkbox";

export default {
  title: "UI/DesignCheckbox",
  component: DesignCheckbox,
  parameters: {
    layout: "fullscreen",
  },
} as Meta<typeof DesignCheckbox>;

const Template: StoryFn<typeof DesignCheckbox> = ({ size, state, label }) => (
  <div style={{ padding: 10 }}>
    <DesignCheckbox size={size} state={state} label={label} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  size: CheckboxSize.sm,
  state: CheckboxState.unchecked,
  label: "Label",
};
Default.parameters = {
  viewMode: "docs",
};
