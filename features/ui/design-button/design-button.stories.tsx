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
  label,
  size,
  color,
  disabled,
  iconSrc,
  trailingIcon,
}) => (
  <div style={{ padding: 10 }}>
    <DesignButton
      size={size}
      color={color}
      disabled={disabled}
      label={label}
      iconSrc={iconSrc}
      trailingIcon={trailingIcon}
    />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  label: "Button CTA",
  size: ButtonSize.md,
  color: ButtonColor.primary,
  disabled: false,
  iconSrc: "",
  trailingIcon: false,
};
Default.parameters = {
  viewMode: "docs",
};
