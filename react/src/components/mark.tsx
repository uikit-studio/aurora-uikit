import * as React from "react";
import { cn } from "../lib/cn";

/** Aurora's signature gradient highlight for the key word of a heading. */
export function Mark({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn("grad-text", className)} {...props} />;
}
