import { cn } from "@/lib/cn";

type Props = {
  label: string;
  value: string;
  note?: string;
  className?: string;
};

export function StatCard({ label, value, note, className }: Props) {
  return (
    <div
      className={cn(
        "rounded-lg border border-white/[0.06] bg-background/50 px-4 py-3",
        className,
      )}
    >
      <p className="text-xs uppercase tracking-wide text-muted">{label}</p>
      <p className="mt-1 font-display text-2xl text-gold">{value}</p>
      {note ? (
        <p className="mt-1 text-xs text-muted">{note}</p>
      ) : null}
    </div>
  );
}
