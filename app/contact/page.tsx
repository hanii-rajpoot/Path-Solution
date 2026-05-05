import type { Metadata } from "next";
import { CONTACT_PAGE, SITE, SEO } from "@/lib/constants";
import { ContactForm } from "@/components/contact/ContactForm";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://pathsolution.com";

export const metadata: Metadata = {
  title: `Contact | ${SITE.name}`,
  description: SEO.description,
  alternates: { canonical: `${siteUrl}/contact` },
  openGraph: {
    title: `Contact | ${SITE.name}`,
    description: CONTACT_PAGE.intro,
    url: `${siteUrl}/contact`,
  },
};

export default function ContactPage() {
  const calendly = process.env.NEXT_PUBLIC_CALENDLY_URL ?? SITE.calendlyUrl;

  return (
    <div className="mx-auto max-w-6xl px-4 pb-24 pt-28 md:px-6 md:pt-36">
      <h1 className="font-display text-4xl tracking-tight text-ink md:text-5xl">
        {CONTACT_PAGE.title}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
        {CONTACT_PAGE.intro}
      </p>

      <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-start">
        <ContactForm />

        <div className="rounded-2xl border border-white/[0.06] bg-card p-2 lg:sticky lg:top-28">
          <p className="px-4 pt-4 text-center text-sm font-medium text-muted">
            Prefer to book directly? Pick a time below.
          </p>
          <div className="mt-2 overflow-hidden rounded-xl">
            <iframe
              title="Schedule a strategy call"
              src={`${calendly}?hide_gdpr_banner=1`}
              className="h-[650px] w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
