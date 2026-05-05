"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PRICING } from "@/lib/constants";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PricingCard } from "@/components/ui/PricingCard";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="text-center">
            <SectionLabel className="inline-block">{PRICING.label}</SectionLabel>
            <h2 className="mx-auto mt-2 max-w-3xl font-display text-3xl tracking-tight text-ink md:text-5xl">
              {PRICING.headline}
            </h2>
          </motion.div>

          <div className="relative mt-16">
            <div
              className="pointer-events-none absolute left-1/2 top-8 -z-10 h-[420px] w-[min(90vw,520px)] -translate-x-1/2 rounded-full bg-gold/15 blur-[100px] md:top-12 md:h-[480px]"
              aria-hidden
            />
            <div className="grid gap-8 lg:grid-cols-3 lg:items-start">
              {PRICING.packages.map((pkg) => (
                <motion.div key={pkg.id} variants={fadeUp} className="relative">
                  <PricingCard pkg={pkg} />
                </motion.div>
              ))}
            </div>
          </div>

          <motion.p
            variants={fadeUp}
            className="mt-12 text-center text-sm text-muted"
          >
            <Link href="/contact" className="hover:text-gold">
              {PRICING.footerHint}
            </Link>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
