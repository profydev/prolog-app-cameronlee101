import classNames from "classnames";
import styles from "./design-button.module.scss";
import Image from "next/image";

export enum ButtonSize {
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
}

export enum ButtonColor {
  primary = "primary",
  secondary = "secondary",
  gray = "gray",
  empty = "empty",
  emptyGrey = "emptyGrey",
  error = "error",
  emptyError = "emptyError",
}

type ButtonProps = {
  label: string;
  size?: ButtonSize;
  color?: ButtonColor;
  disabled?: boolean;
  iconSrc?: string;
  trailingIcon?: boolean;
};

export function DesignButton({
  label,
  size = ButtonSize.md,
  color = ButtonColor.primary,
  disabled = false,
  iconSrc,
  trailingIcon = false,
}: ButtonProps) {
  return (
    <button
      className={classNames(
        styles.button,
        styles[size],
        styles[color],
        iconSrc && label == "" ? styles.iconOnly : "",
      )}
      disabled={disabled}
    >
      {iconSrc && !trailingIcon && (
        <Image src={iconSrc} alt={"Icon"} width={20} height={20} />
      )}
      {label && label}
      {iconSrc && trailingIcon && (
        <Image src={iconSrc} alt={"Icon"} width={20} height={20} />
      )}
    </button>
  );
}
