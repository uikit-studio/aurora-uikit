import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "../lib/cn";

const button = cva(
  "inline-flex items-center justify-center gap-2 rounded-[var(--radius)] font-display font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 active:scale-[0.98] disabled:opacity-50 whitespace-nowrap",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground shadow-[var(--shadow-glass)] hover:brightness-110",
        glass: "glass text-foreground hover:bg-card/90",
        outline: "border border-border bg-card text-foreground hover:bg-muted",
        ghost: "text-foreground hover:bg-muted",
      },
      size: { sm: "h-9 px-4 text-sm", md: "h-11 px-5", lg: "h-13 px-7 text-base" },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button ref={ref} className={cn(button({ variant, size }), className)} {...props} />
  ),
);
Button.displayName = "Button";

export { button as buttonVariants };
