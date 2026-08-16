import type { ReactNode } from "react";

type SectionLabelProps = {
  children: ReactNode;
  action?: ReactNode;
  className?: string;
};

export function SectionLabel({ children, action, className }: SectionLabelProps) {
  return (
    <div className={`section-label${className ? ` ${className}` : ""}`}>
      <span>{children}</span>
      {action}
    </div>
  );
}
