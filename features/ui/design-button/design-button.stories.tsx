import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { DesignButton, ButtonSize, ButtonColor } from "./design-button";

export default {
  title: "UI/DesignButton",
  component: DesignButton,
  parameters: {
    layout: "fullscreen",
  },
} as Meta<typeof DesignButton>;

const Template: StoryFn<typeof DesignButton> = ({
  size,
  color,
  children,
  disabled,
}) => (
  <div style={{ padding: 10 }}>
    <DesignButton size={size} color={color} disabled={disabled}>
      {children}
    </DesignButton>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  size: ButtonSize.md,
  color: ButtonColor.primary,
  children: "Button CTA",
  disabled: false,
};
Default.parameters = {
  viewMode: "docs",
};
