import * as React from "react";
import styles from './Input.module.scss';

import { cn } from "./utils";

function Input({ className, type, disabled, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(styles.input, disabled ? styles.disabled : '', className)}
      disabled={disabled}
      {...props}
    />
  );
}

export { Input };
