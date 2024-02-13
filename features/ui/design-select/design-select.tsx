import React, { useState } from "react";
import styles from "./design-select.module.scss";
import { Listbox } from "@headlessui/react";
import classNames from "classnames";
import Image from "next/image";
import chevron from "@icons/chevron.svg";
import check from "@icons/check.svg";

type DesignSelectProps = {
  label?: string;
  placeholder?: string;
  hint?: string;
  options?: string[];
  disabled?: boolean;
  error?: boolean;
  errorMsg?: string;
  iconSrc?: string;
};

export function DesignSelect({
  label,
  placeholder = "Select an option",
  hint,
  options = ["Option 1", "Option 2", "Option 3"],
  disabled = false,
  error = false,
  errorMsg,
  iconSrc,
}: DesignSelectProps) {
  if (options.includes(placeholder)) {
    throw new Error("Placeholder cannot be the same as any of the options.");
  }

  const [selectedOption, setSelectedOption] = useState<string>(placeholder);
  const [optionsListed, setOptionsListed] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <Listbox value={selectedOption} onChange={setSelectedOption}>
        <div
          className={classNames(
            styles.listboxButtonArea,
            error ? styles.error : "",
          )}
          aria-disabled={disabled}
        >
          {label && <p className={styles.label}>{label}</p>}
          <Listbox.Button
            className={classNames(
              styles.listboxButton,
              selectedOption == placeholder ? styles.placeholderSelected : "",
            )}
            aria-disabled={disabled}
            onClick={() => {
              setOptionsListed(!optionsListed);
            }}
          >
            <div>
              {iconSrc && (
                <Image
                  src={iconSrc}
                  alt="Icon"
                  className={styles.icon}
                  width={20}
                  height={20}
                />
              )}
              {selectedOption}
            </div>
            <Image src={chevron} alt={"chevron"} className={styles.chevron} />
          </Listbox.Button>
          {!optionsListed && hint && (!error || disabled) && (
            <p className={styles.hintText}>{hint}</p>
          )}
          {!optionsListed && error && !disabled && (
            <p className={styles.errorText}>{errorMsg ? errorMsg : "Error"}</p>
          )}
        </div>
        {optionsListed && (
          <Listbox.Options className={styles.listboxOptionsArea} static={true}>
            {options.map((option, index) => (
              <Listbox.Option
                key={index}
                value={option}
                onClick={() => {
                  setOptionsListed(false);
                }}
              >
                {({ selected }) => (
                  <li
                    className={classNames(
                      styles.listboxOption,
                      selected ? styles.selectedOption : "",
                    )}
                  >
                    <div>
                      {iconSrc && (
                        <Image
                          src={iconSrc}
                          alt="Icon"
                          className={styles.icon}
                          width={20}
                          height={20}
                        />
                      )}
                      {option}
                    </div>
                    {selected && <Image src={check} alt={"Checkmark"} />}
                  </li>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        )}
      </Listbox>
    </div>
  );
}
