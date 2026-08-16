import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type SurfaceProps = ComponentProps<"div"> & {
  tone?: "default" | "soft" | "brand";
};

export function Surface({ className, tone = "default", ...props }: SurfaceProps) {
  return <div className={cn("volit-surface", `volit-surface-${tone}`, className)} {...props} />;
}
