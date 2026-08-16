import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

type AvatarProps = {
  initials: string;
  color: string;
  size?: "sm" | "md" | "lg";
  className?: string;
};

export function Avatar({ initials, color, size = "md", className }: AvatarProps) {
  return (
    <span
      className={cn("avatar", `avatar-${size}`, className)}
      style={{ backgroundColor: color } as CSSProperties}
    >
      {initials}
    </span>
  );
}
