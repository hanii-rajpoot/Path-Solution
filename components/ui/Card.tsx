import { cn } from "@/lib/cn";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-white/[0.06] bg-card p-6 shadow-sm transition-colors",
        className,
      )}
    >
      {children}
    </div>
  );
}
