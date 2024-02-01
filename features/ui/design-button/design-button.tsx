import classNames from "classnames";
import styles from "./design-button.module.scss";

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
  children: React.ReactNode;
  size?: ButtonSize;
  color?: ButtonColor;
  disabled?: boolean;
};

export function DesignButton({
  children,
  size = ButtonSize.md,
  color = ButtonColor.primary,
  disabled = false,
}: ButtonProps) {
  return (
    <button
      className={classNames(styles.button, styles[size], styles[color])}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
