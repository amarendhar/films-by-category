import React from "react";
import styles from "./styles.scss";

const Button = ({
  className = "",
  onClick = () => {},
  disabled = false,
  children,
  ...restProps
}) => {
  return (
    <button
      data-testid={restProps["data-testid"]}
      className={styles.button}
      onClick={onClick}
      disabled={disabled}
    >
      <span>{children}</span>
    </button>
  );
};

export default Button;
