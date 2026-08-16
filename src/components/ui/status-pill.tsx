type StatusPillProps = {
  status: string;
  className?: string;
};

export function StatusPill({ status, className }: StatusPillProps) {
  const tone =
    status === "Proposed" || status === "Voting open"
      ? "gold"
      : status === "Enacted" || status === "In implementation"
        ? "green"
        : status === "Current"
          ? "blue"
          : "muted";

  return (
    <span className={`status-pill status-${tone}${className ? ` ${className}` : ""}`}>
      <span className="status-dot" />
      {status}
    </span>
  );
}
