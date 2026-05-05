import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES_PAGE, SERVICES_PREVIEW, SITE } from "@/lib/constants";
import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  Bot,
  GitBranch,
  LayoutGrid,
  Palette,
  Target,
} from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://pathsolution.com";

export const metadata: Metadata = {
  title: `Services | ${SITE.name}`,
  description: SERVICES_PAGE.intro,
  alternates: { canonical: `${siteUrl}/services` },
  openGraph: {
    title: `Services | ${SITE.name}`,
    description: SERVICES_PAGE.intro,
    url: `${siteUrl}/services`,
  },
};

const ICONS = {
  palette: Palette,
  layout: LayoutGrid,
  gitBranch: GitBranch,
  target: Target,
  bot: Bot,
} as const;

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-24 pt-28 md:px-6 md:pt-36">
      <SectionLabel>Services</SectionLabel>
      <h1 className="mt-2 max-w-3xl font-display text-4xl tracking-tight text-ink md:text-5xl">
        {SERVICES_PAGE.title}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
        {SERVICES_PAGE.intro}
      </p>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {SERVICES_PAGE.pillars.map((p) => (
          <article
            key={p.title}
            className="rounded-xl border border-white/[0.06] bg-card p-8"
          >
            <h2 className="font-display text-2xl text-gold">{p.title}</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">{p.body}</p>
          </article>
        ))}
      </div>

      <h2 className="mt-24 font-display text-3xl text-ink">What we deliver</h2>
      <p className="mt-4 max-w-2xl text-muted">
        Tangible assets and systems mapped to how premium service businesses
        actually win clients.
      </p>

      <ul className="mt-12 space-y-10">
        {SERVICES_PREVIEW.items.map((item) => {
          const Icon = ICONS[item.icon];
          return (
            <li
              key={item.key}
              className="flex flex-col gap-4 border-b border-white/[0.06] pb-10 md:flex-row md:items-start md:gap-8"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-gold/25 bg-gold/5 text-gold">
                <Icon className="h-7 w-7" aria-hidden />
              </div>
              <div>
                <h3 className="font-display text-2xl text-ink">{item.title}</h3>
                <p className="mt-3 text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="mt-16 rounded-xl border border-gold/20 bg-surface/80 p-8 text-center">
        <p className="text-ink">
          Ready to scope your project? Start with a free strategy call.
        </p>
        <Link
          href="/contact"
          className="mt-4 inline-block text-sm font-semibold text-gold hover:text-gold-light"
        >
          Go to contact →
        </Link>
      </div>
    </div>
  );
}
