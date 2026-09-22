import type { ReactNode } from "react";

type BreadcrumbsProps = {
  root: ReactNode;
  current: ReactNode;
};

export function Breadcrumbs({ root, current }: BreadcrumbsProps) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <span>{root}</span>
      <span className="breadcrumb-slash" aria-hidden="true">/</span>
      <strong>{current}</strong>
    </nav>
  );
}
