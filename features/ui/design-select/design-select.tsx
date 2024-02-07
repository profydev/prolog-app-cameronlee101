import React, { useState } from "react";
import styles from "./design-select.module.scss";
import { Listbox } from "@headlessui/react";
import classNames from "classnames";

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
  if (options.includes(placeholder)) {
    throw new Error("Placeholder cannot be the same as any of the options.");
  }

  const [selectedOption, setSelectedOption] = useState<string>(placeholder);

  return (
    <div className={styles.container}>
      <Listbox value={selectedOption} onChange={setSelectedOption}>
        <Listbox.Button
          className={classNames(
            styles.listboxButton,
            disabled ? styles.disabled : "",
            selectedOption == placeholder ? styles.placeholderSelected : "",
          )}
          aria-disabled={disabled}
        >
          {selectedOption}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/chevron.svg" />
        </Listbox.Button>
        <Listbox.Options className={styles.listboxOptionsArea}>
          {options.map((option, index) => (
            <Listbox.Option key={index} value={option}>
              {({ selected }) => (
                <li
                  className={classNames(
                    styles.listboxOption,
                    selected ? styles.selectedOption : "",
                  )}
                >
                  {option}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  {selected && <img src="/icons/check.svg" />}
                </li>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
}
