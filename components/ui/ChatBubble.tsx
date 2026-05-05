"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

type Role = "client" | "ai" | "system";

type BubbleProps = {
  role: Role;
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

export function ChatBubble({ role, children, delay = 0, className }: BubbleProps) {
  const align = role === "client" ? "items-end" : "items-start";
  const bubble =
    role === "client"
      ? "rounded-2xl rounded-br-md bg-surface border border-white/[0.08] text-ink"
      : role === "ai"
        ? "rounded-2xl rounded-bl-md bg-gold/10 border border-gold/35 text-ink"
        : "rounded-xl bg-background/80 border border-gold/20 text-sm text-muted";

  return (
    <motion.div
      className={cn("flex w-full flex-col gap-1", align)}
      initial={{ opacity: 0, y: 12, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        delay,
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className={cn("max-w-[92%] px-4 py-3 text-sm leading-relaxed", bubble, className)}>
        {children}
      </div>
    </motion.div>
  );
}
