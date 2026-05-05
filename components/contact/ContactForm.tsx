"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactSchema,
  type ContactPayload,
} from "@/lib/contact-schema";
import {
  BUSINESS_TYPES,
  CONTACT_PAGE,
} from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");
  const form = useForm<ContactPayload>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      businessType: BUSINESS_TYPES[0],
      whatsapp: "",
      email: "",
      challenge: "",
    },
  });

  async function onSubmit(data: ContactPayload) {
    setStatus("idle");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        setStatus("err");
        return;
      }
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("err");
    }
  }

  const fieldClass =
    "mt-2 w-full rounded-lg border border-white/[0.08] bg-card px-4 py-3 text-sm text-ink placeholder:text-muted/80 outline-none transition-colors focus:border-gold/50";

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="space-y-6"
      noValidate
    >
      <div>
        <label htmlFor="fullName" className="text-sm font-medium text-ink">
          Full Name <span className="text-gold">*</span>
        </label>
        <input
          id="fullName"
          type="text"
          autoComplete="name"
          className={cn(fieldClass, form.formState.errors.fullName && "border-red-500/50")}
          {...form.register("fullName")}
        />
        {form.formState.errors.fullName ? (
          <p className="mt-1 text-xs text-red-400">
            {form.formState.errors.fullName.message}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="businessType" className="text-sm font-medium text-ink">
          Business Type <span className="text-gold">*</span>
        </label>
        <select
          id="businessType"
          className={cn(fieldClass, "appearance-none bg-card")}
          {...form.register("businessType")}
        >
          {BUSINESS_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="whatsapp" className="text-sm font-medium text-ink">
          WhatsApp Number <span className="text-gold">*</span>
        </label>
        <input
          id="whatsapp"
          type="tel"
          autoComplete="tel"
          placeholder="+92 ..."
          className={cn(fieldClass, form.formState.errors.whatsapp && "border-red-500/50")}
          {...form.register("whatsapp")}
        />
        {form.formState.errors.whatsapp ? (
          <p className="mt-1 text-xs text-red-400">
            {form.formState.errors.whatsapp.message}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium text-ink">
          Email <span className="text-gold">*</span>
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          className={cn(fieldClass, form.formState.errors.email && "border-red-500/50")}
          {...form.register("email")}
        />
        {form.formState.errors.email ? (
          <p className="mt-1 text-xs text-red-400">
            {form.formState.errors.email.message}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="challenge" className="text-sm font-medium text-ink">
          Biggest Challenge
        </label>
        <textarea
          id="challenge"
          rows={5}
          className={cn(
            fieldClass,
            "resize-y min-h-[120px]",
            form.formState.errors.challenge && "border-red-500/50",
          )}
          {...form.register("challenge")}
        />
        {form.formState.errors.challenge ? (
          <p className="mt-1 text-xs text-red-400">
            {form.formState.errors.challenge.message}
          </p>
        ) : null}
      </div>

      <Button type="submit" variant="primary" disabled={form.formState.isSubmitting}>
        Send My Details →
      </Button>

      {status === "ok" ? (
        <p className="rounded-lg border border-gold/30 bg-gold/5 px-4 py-3 text-sm text-ink">
          {CONTACT_PAGE.formSuccess}
        </p>
      ) : null}
      {status === "err" ? (
        <p className="text-sm text-red-400">
          Something went wrong. Please try again or message us on WhatsApp.
        </p>
      ) : null}
    </form>
  );
}
