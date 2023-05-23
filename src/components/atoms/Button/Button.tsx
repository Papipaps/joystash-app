import { MouseEventHandler } from "react";
import styles from "./button.module.css";

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  disabled?: boolean;
  onClick: MouseEventHandler;
}

export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  disabled = false,
  label,
  onClick,
  ...props
}: ButtonProps) => {
  const mode = primary ? styles.primary : styles.secondary;
  const isDisabled = disabled ? styles.disabled : "";
  return (
    <button
      onClick={onClick}
      type="button"
      className={[styles.button, styles[size], mode, isDisabled].join(" ")}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
