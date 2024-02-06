import React from "react";
import styles from "./design-select.module.scss";

type DesignSelectProps = {
  placeholder?: string;
  options?: string[];
  disabled?: boolean;
};

export function DesignSelect({
  placeholder = "Select an option",
  options = ["Option 1", "Option 2", "Option 3"],
  disabled = false,
}: DesignSelectProps) {
  return (
    <select className={styles.select} disabled={disabled} required>
      <option className={styles.option} value="" disabled selected hidden>
        {placeholder}
      </option>
      {options.map((op, index) => (
        <option className={styles.option} key={op + index} value={op}>
          {op}
        </option>
      ))}
    </select>
  );
}
