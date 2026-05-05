"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeUp}
            className="text-center font-display text-3xl tracking-tight text-ink md:text-5xl"
          >
            {TESTIMONIALS.headline}
          </motion.h2>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {TESTIMONIALS.items.map((t) => (
              <motion.div key={t.name} variants={fadeUp}>
                <TestimonialCard
                  quote={t.quote}
                  name={t.name}
                  role={t.role}
                  initials={t.initials}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
