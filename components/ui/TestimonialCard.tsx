import { Star } from "lucide-react";
import { cn } from "@/lib/cn";

type Props = {
  quote: string;
  name: string;
  role: string;
  initials: string;
  className?: string;
};

export function TestimonialCard({
  quote,
  name,
  role,
  initials,
  className,
}: Props) {
  return (
    <figure
      className={cn(
        "relative overflow-hidden rounded-xl border border-white/[0.06] bg-card p-8",
        className,
      )}
    >
      <span
        className="pointer-events-none absolute right-6 top-4 font-display text-7xl leading-none text-gold/25"
        aria-hidden
      >
        “
      </span>
      <blockquote className="relative z-[1] text-base leading-relaxed text-ink/95">
        {quote}
      </blockquote>
      <figcaption className="relative z-[1] mt-8 flex items-center gap-4">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-surface font-display text-sm text-gold"
          aria-hidden
        >
          {initials}
        </div>
        <div>
          <p className="font-semibold text-ink">{name}</p>
          <p className="text-sm text-muted">{role}</p>
          <div className="mt-2 flex gap-0.5" aria-label="5 star rating">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="h-4 w-4 fill-gold text-gold"
                aria-hidden
              />
            ))}
          </div>
        </div>
      </figcaption>
    </figure>
  );
}
