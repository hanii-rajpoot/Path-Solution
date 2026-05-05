"use client";

import { motion } from "framer-motion";
import { CASE_STUDIES } from "@/lib/constants";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { StatCard } from "@/components/ui/StatCard";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function CaseStudies() {
  return (
    <section id="case-studies" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>{CASE_STUDIES.label}</SectionLabel>
            <h2 className="max-w-3xl font-display text-3xl tracking-tight text-ink md:text-5xl">
              {CASE_STUDIES.headline}
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-10 lg:grid-cols-2">
            {CASE_STUDIES.studies.map((study) => (
              <motion.article
                key={study.id}
                variants={fadeUp}
                className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-card p-8 pl-7 shadow-sm"
              >
                <div
                  className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-gold via-gold-light to-gold/40"
                  aria-hidden
                />
                <p className="text-xs font-semibold uppercase tracking-wide text-gold">
                  {study.badge}
                </p>
                <h3 className="mt-3 font-display text-2xl text-ink">
                  {study.client}
                </h3>
                <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted">
                  <p>
                    <span className="font-semibold text-ink/90">Challenge:</span>{" "}
                    {study.challenge}
                  </p>
                  <p>
                    <span className="font-semibold text-ink/90">Solution:</span>{" "}
                    {study.solution}
                  </p>
                </div>
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {study.results.map((r) => (
                    <StatCard
                      key={r.label}
                      label={r.label}
                      value={r.value}
                      note={r.note}
                    />
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
