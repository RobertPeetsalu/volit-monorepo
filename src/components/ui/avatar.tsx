import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

type AvatarProps = {
  initials: string;
  color: string;
  size?: "sm" | "md" | "lg";
  label?: string;
  decorative?: boolean;
  className?: string;
};

export function Avatar({
  initials,
  color,
  size = "md",
  label,
  decorative = false,
  className,
}: AvatarProps) {
  return (
    <span
      className={cn("avatar", `avatar-${size}`, className)}
      style={{ backgroundColor: color } as CSSProperties}
      role={decorative ? undefined : "img"}
      aria-label={decorative ? undefined : label ?? `Participant ${initials}`}
      aria-hidden={decorative ? true : undefined}
    >
      {initials}
    </span>
  );
}
