import type { ReactNode } from "react";

type SectionLabelProps = {
  children: ReactNode;
  action?: ReactNode;
  as?: "div" | "h2" | "h3";
  id?: string;
  className?: string;
};

export function SectionLabel({
  children,
  action,
  as: Component = "div",
  id,
  className,
}: SectionLabelProps) {
  return (
    <Component id={id} className={`section-label${className ? ` ${className}` : ""}`}>
      <span>{children}</span>
      {action}
    </Component>
  );
}
