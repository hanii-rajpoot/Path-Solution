"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { SITE, getWhatsAppLink } from "@/lib/constants";

export type PricingPackage = {
  id: string;
  name: string;
  price: string;
  value: string;
  featured: boolean;
  badge?: string;
  items: readonly string[];
};

type Props = {
  pkg: PricingPackage;
};

export function PricingCard({ pkg }: Props) {
  const ctaHref = SITE.calendlyUrl || getWhatsAppLink();

  return (
    <motion.div
      layout
      className={cn(
        "relative flex h-full flex-col rounded-2xl border bg-card p-8 transition-shadow",
        pkg.featured
          ? "z-[1] border-gold shadow-glow-lg ring-1 ring-gold/30 md:-mt-3 md:mb-1"
          : "border-white/[0.08] hover:border-gold/35",
      )}
      whileHover={{ y: pkg.featured ? -6 : -4 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
    >
      {pkg.featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-xs font-semibold uppercase tracking-wide text-background">
          {pkg.badge ?? "Most Popular"}
        </div>
      )}
      <div className="mb-6">
        <h3 className="font-display text-2xl text-ink">{pkg.name}</h3>
        <p className="mt-2 text-sm text-muted">
          Value: <span className="text-gold-light line-through">{pkg.value}</span>
        </p>
        <p className="mt-4 font-display text-4xl text-gold">{pkg.price}</p>
      </div>
      <ul className="mb-8 flex flex-1 flex-col gap-3 text-sm text-ink/95">
        {pkg.items.map((item) => (
          <li key={item} className="flex gap-3">
            <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <Button
        variant={pkg.featured ? "primary" : "outline"}
        href={ctaHref}
        external
        className="w-full"
      >
        Book This Package
      </Button>
    </motion.div>
  );
}
