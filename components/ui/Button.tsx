"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  variant?: "primary" | "outline" | "ghost";
  external?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
  "aria-label"?: string;
};

const base =
  "inline-flex min-h-[48px] items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-gold text-background hover:bg-gold-light focus-visible:outline-gold-light shadow-glow",
  outline:
    "border border-gold/60 text-ink hover:border-gold hover:bg-gold/10 bg-transparent",
  ghost: "text-gold hover:bg-gold/10",
};

const tapHover = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
};

const MotionLink = motion(Link);

export function Button({
  children,
  className,
  href,
  variant = "primary",
  external,
  type = "button",
  onClick,
  disabled,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const classes = cn(base, variants[variant], className);

  if (href) {
    const isExternal = external ?? /^https?:\/\//.test(href);
    if (isExternal) {
      return (
        <motion.a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
          {...tapHover}
        >
          {children}
        </motion.a>
      );
    }
    return (
      <MotionLink href={href} className={classes} aria-label={ariaLabel} {...tapHover}>
        {children}
      </MotionLink>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
    >
      {children}
    </motion.button>
  );
}
