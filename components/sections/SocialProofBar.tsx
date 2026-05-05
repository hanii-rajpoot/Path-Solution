import { MARQUEE_ITEMS } from "@/lib/constants";

export function SocialProofBar() {
  const segment = MARQUEE_ITEMS.map((t) => `${t}`).join(" · ") + " · ";

  return (
    <div className="border-y border-white/[0.06] bg-surface/80 py-4">
      <div className="relative overflow-hidden">
        <div className="flex w-max animate-marquee gap-0">
          <span className="shrink-0 px-10 text-sm tracking-wide text-gold/70">
            {segment}
          </span>
          <span className="shrink-0 px-10 text-sm tracking-wide text-gold/70">
            {segment}
          </span>
        </div>
      </div>
      <p className="sr-only">
        Industries served: {MARQUEE_ITEMS.join(", ")}
      </p>
    </div>
  );
}
