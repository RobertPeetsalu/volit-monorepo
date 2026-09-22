import { Check } from "lucide-react";

type ToastProps = {
  message: string;
};

export function Toast({ message }: ToastProps) {
  return (
    <div className="toast" role="status" aria-live="polite">
      <span className="toast-check"><Check size={14} /></span>
      <span>{message}</span>
    </div>
  );
}
