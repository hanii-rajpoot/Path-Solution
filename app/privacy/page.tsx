import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://pathsolution.com";

export const metadata: Metadata = {
  title: `Privacy Policy | ${SITE.name}`,
  description: `How ${SITE.name} collects and uses information submitted through this website.`,
  alternates: { canonical: `${siteUrl}/privacy` },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-24 pt-28 md:px-6 md:pt-36">
      <h1 className="font-display text-4xl text-ink md:text-5xl">Privacy Policy</h1>
      <p className="mt-8 text-muted leading-relaxed">
        This policy describes how {SITE.name} (“we”) handles information you provide when
        you use our website or contact forms. Update this page with counsel-approved
        language before launch.
      </p>
      <h2 className="mt-12 font-display text-2xl text-gold">Information you submit</h2>
      <p className="mt-4 text-muted leading-relaxed">
        When you submit the contact form, we collect the fields you provide (such as
        name, business type, WhatsApp number, email, and your message) solely to respond
        to your inquiry and assess fit for our services.
      </p>
      <h2 className="mt-10 font-display text-2xl text-gold">How we use it</h2>
      <p className="mt-4 text-muted leading-relaxed">
        We use submitted information to communicate with you about your request. We do
        not sell your personal data. Third-party tools (for example email delivery or
        scheduling) may process data under their own policies when you engage those
        features.
      </p>
      <h2 className="mt-10 font-display text-2xl text-gold">Contact</h2>
      <p className="mt-4 text-muted leading-relaxed">
        For privacy-related requests, contact us at the email address published on this
        site once configured.
      </p>
    </div>
  );
}
