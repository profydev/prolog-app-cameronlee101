import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { DesignSelect } from "./design-select";

export default {
  title: "UI/DesignSelect",
  component: DesignSelect,
  parameters: {
    layout: "fullscreen",
  },
} as Meta<typeof DesignSelect>;

const Template: StoryFn<typeof DesignSelect> = ({
  label,
  placeholder,
  hint,
  options,
  disabled,
  error,
  errorMsg,
  iconSrc,
}) => (
  <div style={{ padding: 10 }}>
    <DesignSelect
      label={label}
      placeholder={placeholder}
      hint={hint}
      options={options}
      disabled={disabled}
      error={error}
      errorMsg={errorMsg}
      iconSrc={iconSrc}
    />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  placeholder: "Select an option",
  options: ["Option 1", "Option 2", "Option 3"],
  disabled: false,
  error: false,
};
Default.parameters = {
  viewMode: "docs",
};
