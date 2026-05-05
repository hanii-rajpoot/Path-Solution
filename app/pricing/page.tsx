import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { PRICING, SITE } from "@/lib/constants";

const PricingSection = dynamic(
  () =>
    import("@/components/sections/Pricing").then((m) => ({
      default: m.Pricing,
    })),
  { ssr: true },
);

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://pathsolution.com";

export const metadata: Metadata = {
  title: `Pricing | ${SITE.name}`,
  description: `${PRICING.headline}. Starter, Growth Engine, and Scale Suite packages for clinics, firms, and consultants.`,
  alternates: { canonical: `${siteUrl}/pricing` },
  openGraph: {
    title: `Pricing | ${SITE.name}`,
    description: PRICING.headline,
    url: `${siteUrl}/pricing`,
  },
};

export default function PricingPage() {
  return (
    <div className="pb-16 pt-24 md:pt-28">
      <PricingSection />
    </div>
  );
}
