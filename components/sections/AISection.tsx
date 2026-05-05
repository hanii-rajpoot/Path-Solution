"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AI_SECTION } from "@/lib/constants";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ChatBubble } from "@/components/ui/ChatBubble";
import { fadeUp, staggerContainer } from "@/lib/animations";

function TypingDots({ delay }: { delay: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className="flex justify-start"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: reduce ? 0 : delay, duration: 0.35 }}
    >
      <div className="flex gap-1 rounded-full border border-white/[0.08] bg-surface px-3 py-2">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="h-1.5 w-1.5 rounded-full bg-gold/70"
            animate={
              reduce
                ? {}
                : { y: [0, -3, 0], opacity: [0.4, 1, 0.4] }
            }
            transition={{
              duration: 0.9,
              repeat: Infinity,
              delay: i * 0.15,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}

export function AISection() {
  const reduce = useReducedMotion();
  const d = reduce ? 0 : 1;

  return (
    <section id="ai-automation" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid gap-14 lg:grid-cols-2 lg:items-center"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>{AI_SECTION.label}</SectionLabel>
            <h2 className="mt-2 font-display text-3xl tracking-tight text-ink md:text-5xl">
              {AI_SECTION.headline}
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted">
              {AI_SECTION.body.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="relative mx-auto w-full max-w-md"
          >
            <div
              className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-gold/10 blur-3xl"
              aria-hidden
            />
            <div className="rounded-[2rem] border border-gold/25 bg-background/90 p-5 shadow-glow">
              <p className="mb-4 text-center text-xs uppercase tracking-wide text-gold/80">
                Live demo · WhatsApp
              </p>
              <div className="flex max-h-[420px] flex-col gap-3 overflow-hidden">
                <p className="text-[11px] text-muted">{AI_SECTION.chat.clientMeta}</p>
                <ChatBubble role="client" delay={0.15 * d}>
                  {AI_SECTION.chat.clientMsg}
                </ChatBubble>
                <TypingDots delay={0.85 * d} />
                <ChatBubble role="ai" delay={1.35 * d}>
                  {AI_SECTION.chat.aiReply}
                </ChatBubble>
                <ChatBubble role="system" delay={2.45 * d}>
                  {AI_SECTION.chat.bookedMsg}
                </ChatBubble>
                <motion.p
                  className="pt-2 text-center text-xs text-gold/90"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: reduce ? 0 : 3.35, duration: 0.5 }}
                >
                  {AI_SECTION.chat.ownerNote}
                </motion.p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
