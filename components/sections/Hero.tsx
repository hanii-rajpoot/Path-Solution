"use client";

import { motion } from "framer-motion";
import { HERO, SITE, getWhatsAppLink } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { heroStagger, fadeItem } from "@/lib/animations";

const particles = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  left: `${(i * 17) % 100}%`,
  top: `${(i * 23) % 100}%`,
  duration: 10 + (i % 7),
  delay: (i % 5) * 0.4,
}));

export function Hero() {
  const primaryHref = SITE.calendlyUrl || getWhatsAppLink();

  return (
    <section
      id="hero"
      className="relative overflow-hidden pb-20 pt-28 md:pb-28 md:pt-36"
    >
      <div className="pointer-events-none absolute inset-0 bg-radial-gold" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(201,168,76,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(201,168,76,0.35) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="pointer-events-none absolute inset-0">
        {particles.map((p) => (
          <motion.span
            key={p.id}
            className="absolute h-1 w-1 rounded-full bg-gold/60"
            style={{ left: p.left, top: p.top }}
            animate={{ y: [0, -18, 0], opacity: [0.15, 0.55, 0.15] }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-[1] mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          className="max-w-4xl"
          variants={heroStagger}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={fadeItem}
            className="font-display text-4xl leading-[1.1] tracking-tight text-ink md:text-6xl lg:text-7xl"
          >
            {HERO.headline}
          </motion.h1>
          <motion.p
            variants={fadeItem}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl"
          >
            {HERO.subheadline}
          </motion.p>
          <motion.div
            variants={fadeItem}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Button href={primaryHref} external variant="primary">
              {HERO.primaryCta}
            </Button>
            <Button href="/#solution" variant="outline">
              {HERO.secondaryCta}
            </Button>
          </motion.div>
          <motion.p
            variants={fadeItem}
            className="mt-10 text-sm text-muted md:text-base"
          >
            {HERO.trustBar}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
