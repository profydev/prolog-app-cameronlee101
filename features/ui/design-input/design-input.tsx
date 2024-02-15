import React from "react";
import styles from "./design-input.module.scss";

type DesignInputProps = {
  disabled?: boolean;
};

export function DesignInput({ disabled }: DesignInputProps) {
  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.inputBox}
        disabled={disabled ? true : false}
      />
    </div>
  );
}
