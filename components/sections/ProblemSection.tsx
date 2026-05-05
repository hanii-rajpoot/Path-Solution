"use client";

import { motion } from "framer-motion";
import { PROBLEM } from "@/lib/constants";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/cn";

export function ProblemSection() {
  return (
    <section id="problem" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>{PROBLEM.label}</SectionLabel>
            <h2 className="max-w-3xl font-display text-3xl tracking-tight text-ink md:text-5xl">
              {PROBLEM.headline}
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {PROBLEM.cards.map((card) => (
              <motion.article
                key={card.n}
                variants={fadeUp}
                className={cn(
                  "group rounded-xl border border-white/[0.06] bg-card p-8 transition-all duration-300",
                  "hover:border-gold/45 hover:shadow-glow",
                )}
              >
                <p className="font-display text-3xl text-gold/90">{card.n}</p>
                <h3 className="mt-4 font-display text-xl text-ink">{card.title}</h3>
                <p className="mt-3 text-muted leading-relaxed">{card.body}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
