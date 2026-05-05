"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SOLUTION } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function SolutionSection() {
  const [a, b, c] = SOLUTION.columns;

  return (
    <section id="solution" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="mx-auto max-w-4xl font-display text-3xl tracking-tight text-ink md:text-5xl"
          >
            {SOLUTION.headline}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted"
          >
            {SOLUTION.subtext}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-16 grid gap-8 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center md:gap-6"
          >
            <article className="rounded-2xl border border-white/[0.08] bg-card p-8 text-left">
              <p className="font-display text-2xl text-gold">{a.title}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {a.subtitle}
              </p>
            </article>
            <ChevronRight
              className="mx-auto hidden h-10 w-10 shrink-0 text-gold/45 md:block"
              aria-hidden
            />
            <article className="rounded-2xl border border-white/[0.08] bg-card p-8 text-left">
              <p className="font-display text-2xl text-gold">{b.title}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {b.subtitle}
              </p>
            </article>
            <ChevronRight
              className="mx-auto hidden h-10 w-10 shrink-0 text-gold/45 md:block"
              aria-hidden
            />
            <article className="rounded-2xl border border-white/[0.08] bg-card p-8 text-left">
              <p className="font-display text-2xl text-gold">{c.title}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {c.subtitle}
              </p>
            </article>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
