"use client";

import { X } from "lucide-react";
import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type ModalProps = {
  ariaLabel: string;
  children: ReactNode;
  className?: string;
  closeLabel?: string;
  onClose: () => void;
};

export function Modal({ ariaLabel, children, className, closeLabel = "Close", onClose }: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    const focusableSelector = "button, input, textarea, select, [href], [tabindex]:not([tabindex='-1'])";
    const focusable = dialogRef.current?.querySelector<HTMLElement>(focusableSelector);
    document.body.style.overflow = "hidden";
    focusable?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;
      const controls = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(focusableSelector));
      if (controls.length === 0) return;
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div ref={dialogRef} className={cn("modal-card", className)} role="dialog" aria-modal="true" aria-label={ariaLabel} onMouseDown={(event) => event.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label={closeLabel}><X size={18} /></button>
        {children}
      </div>
    </div>
  );
}
