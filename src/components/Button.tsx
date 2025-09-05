import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import styles from './Button.module.scss';
import { cn } from "./utils";

type ButtonProps = React.ComponentProps<'button'> & {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'accent';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  asChild?: boolean;
};
function Button({ className, variant = 'default', size = 'default', asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  const base = styles.btn;
  const variantClass = variant === 'default' ? styles.primary : variant === 'destructive' ? styles.destructive : variant === 'outline' ? styles.outline : variant === 'secondary' ? styles.secondary : variant === 'ghost' ? styles.ghost : variant === 'link' ? styles.link : variant === 'accent' ? styles.accent : styles.primary;
  const sizeClass = size === 'sm' ? styles.sm : size === 'lg' ? styles.lg : size === 'icon' ? styles.icon : '';

  return (
    <Comp data-slot="button" className={cn(base, variantClass, sizeClass, className)} {...(props as any)} />
  );
}

export { Button };
