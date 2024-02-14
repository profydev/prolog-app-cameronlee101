import React from "react";
import Image from "next/image";
import styles from "./icon-with-text.module.scss";

type IconWithTextProps = {
  text: string;
  iconSrc: string | undefined;
};

export function IconWithText({ text, iconSrc }: IconWithTextProps) {
  return (
    <div className={styles.container}>
      {iconSrc && (
        <Image
          src={iconSrc}
          alt="Icon"
          className={styles.icon}
          width={20}
          height={20}
        />
      )}
      {text}
    </div>
  );
}
