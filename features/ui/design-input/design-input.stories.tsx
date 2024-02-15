import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { DesignInput } from "./design-input";

export default {
  title: "UI/DesignInput",
  component: DesignInput,
  parameters: {
    layout: "fullscreen",
  },
} as Meta<typeof DesignInput>;

const Template: StoryFn<typeof DesignInput> = ({ disabled }) => (
  <div style={{ padding: 10 }}>
    <DesignInput disabled={disabled} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  disabled: false,
};
Default.parameters = {
  viewMode: "docs",
};
