import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "../lib/cn";

const pill = cva(
  "inline-flex items-center gap-1.5 rounded-full font-mono text-xs font-medium uppercase tracking-wide px-3 py-1",
  {
    variants: {
      variant: {
        solid: "bg-foreground text-background",
        soft: "bg-muted text-muted-foreground",
        brand: "bg-brand-100 text-brand-700",
        glass: "glass text-muted-foreground",
      },
    },
    defaultVariants: { variant: "soft" },
  },
);

export interface PillProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof pill> {}

export function Pill({ className, variant, ...props }: PillProps) {
  return <span className={cn(pill({ variant }), className)} {...props} />;
}
