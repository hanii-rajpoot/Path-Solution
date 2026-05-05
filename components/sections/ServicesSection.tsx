"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Bot,
  GitBranch,
  LayoutGrid,
  Palette,
  Target,
} from "lucide-react";
import { SERVICES_PREVIEW } from "@/lib/constants";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/cn";

const ICONS = {
  palette: Palette,
  layout: LayoutGrid,
  gitBranch: GitBranch,
  target: Target,
  bot: Bot,
} as const;

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>{SERVICES_PREVIEW.label}</SectionLabel>
            <h2 className="max-w-3xl font-display text-3xl tracking-tight text-ink md:text-5xl">
              {SERVICES_PREVIEW.headline}
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES_PREVIEW.items.map((item) => {
              const Icon = ICONS[item.icon];
              return (
                <motion.article
                  key={item.key}
                  variants={fadeUp}
                  className={cn(
                    "group rounded-xl border border-white/[0.06] bg-card p-8 transition-all duration-300",
                    "hover:-translate-y-1 hover:border-gold/40 hover:shadow-glow",
                  )}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-gold/25 bg-gold/5 text-gold transition-colors group-hover:border-gold/50">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="mt-6 font-display text-xl text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </div>

          <motion.p variants={fadeUp} className="mt-12 text-center">
            <Link
              href="/services"
              className="text-sm font-semibold text-gold hover:text-gold-light"
            >
              Explore full service breakdown →
            </Link>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
