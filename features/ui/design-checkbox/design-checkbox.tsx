import React, { useEffect, useState } from "react";
import styles from "./design-checkbox.module.scss";

export enum CheckboxSize {
  sm = "sm",
  md = "md",
}

export enum CheckboxState {
  unchecked = "unchecked",
  checked = "checked",
  indeterminate = "indeterminate",
}

type CheckboxProps = {
  size?: CheckboxSize;
  state?: CheckboxState;
  label?: string;
  disabled?: boolean;
};

export function DesignCheckbox({
  size = CheckboxSize.sm,
  state = CheckboxState.unchecked,
  label = "",
  disabled = false,
}: CheckboxProps) {
  const [checked, setChecked] = useState<boolean>(
    state === CheckboxState.checked,
  );
  const [indeterminate, setIndeterminate] = useState<boolean>(
    state === CheckboxState.indeterminate,
  );
  const [checkState, setCheckState] = useState<CheckboxState>(state);

  const handleChange = () => {
    if (indeterminate) {
      setCheckState(CheckboxState.unchecked);
      setChecked(false);
      setIndeterminate(false);
    } else if (checked) {
      setCheckState(CheckboxState.unchecked);
      setChecked(false);
    } else if (!checked) {
      setCheckState(CheckboxState.checked);
      setChecked(true);
    } else {
      console.error("Unrecognize change for checkbox");
    }
  };

  useEffect(() => {
    if (state == CheckboxState.checked) {
      setChecked(true);
      setIndeterminate(false);
      setCheckState(CheckboxState.checked);
    } else if (state == CheckboxState.unchecked) {
      setChecked(false);
      setIndeterminate(false);
      setCheckState(CheckboxState.unchecked);
    } else if (state == CheckboxState.indeterminate) {
      setChecked(false);
      setIndeterminate(true);
      setCheckState(CheckboxState.indeterminate);
    } else {
      console.error("Unrecognized state for checkbox");
    }
  }, [state]);

  return (
    <div
      className={`${styles[size]} ${styles[checkState]} ${
        disabled ? styles.disabled : ""
      }`}
      onFocus={() => console.log("div focused")}
    >
      <input
        type="checkbox"
        className={styles.checkbox}
        id="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        onFocus={() => {
          console.log("input focused");
        }}
        ref={(el) => {
          if (el) {
            el.indeterminate = indeterminate;
          }
        }}
      />
      <label
        onFocus={() => {
          console.log("label focused");
        }}
        htmlFor="checkbox"
        className={styles.label}
      >
        {label}
      </label>
    </div>
  );
}
