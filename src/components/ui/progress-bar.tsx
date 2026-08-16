import type { ComponentProps } from "react";

type ProgressBarProps = {
  value: number;
  color?: string;
  label?: string;
  className?: string;
} & Omit<ComponentProps<"div">, "role" | "children" | "className">;

export function ProgressBar({
  value,
  color = "var(--gold)",
  label = "Progress",
  className,
  ...props
}: ProgressBarProps) {
  const clampedValue = Math.max(0, Math.min(100, value));

  return (
    <div
      {...props}
      className={`progress-track${className ? ` ${className}` : ""}`}
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={clampedValue}
    >
      <span
        style={{
          width: `${clampedValue}%`,
          backgroundColor: color,
        }}
      />
    </div>
  );
}
