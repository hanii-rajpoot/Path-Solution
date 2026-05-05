"use client";

import { motion } from "framer-motion";
import { FINAL_CTA, SITE, getWhatsAppLink } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function FinalCTA() {
  const href = SITE.calendlyUrl || getWhatsAppLink();

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-y border-white/[0.06] bg-background py-24 md:py-32"
    >
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-radial-gold opacity-90" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl tracking-tight text-ink md:text-5xl lg:text-6xl"
          >
            {FINAL_CTA.headline}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-8 text-lg leading-relaxed text-muted md:text-xl"
          >
            {FINAL_CTA.subtext}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10 flex justify-center">
            <Button href={href} external variant="primary" className="px-10">
              {FINAL_CTA.button}
            </Button>
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-sm text-muted"
          >
            {FINAL_CTA.scarcity}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
