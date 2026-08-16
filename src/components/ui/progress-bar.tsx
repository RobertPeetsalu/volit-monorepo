type ProgressBarProps = {
  value: number;
  color?: string;
  className?: string;
};

export function ProgressBar({
  value,
  color = "var(--gold)",
  className,
}: ProgressBarProps) {
  return (
    <div className={`progress-track${className ? ` ${className}` : ""}`}>
      <span
        style={{
          width: `${Math.max(0, Math.min(100, value))}%`,
          backgroundColor: color,
        }}
      />
    </div>
  );
}
