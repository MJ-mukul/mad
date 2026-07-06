import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-lg border border-white/10 bg-card/80 p-6 shadow-soft backdrop-blur",
        className
      )}
      {...props}
    />
  );
}
