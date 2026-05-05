import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { SocialProofBar } from "@/components/sections/SocialProofBar";

const ProblemSection = dynamic(
  () =>
    import("@/components/sections/ProblemSection").then((m) => ({
      default: m.ProblemSection,
    })),
  { loading: () => <SectionPlaceholder /> },
);

const SolutionSection = dynamic(
  () =>
    import("@/components/sections/SolutionSection").then((m) => ({
      default: m.SolutionSection,
    })),
  { loading: () => <SectionPlaceholder /> },
);

const ServicesSection = dynamic(
  () =>
    import("@/components/sections/ServicesSection").then((m) => ({
      default: m.ServicesSection,
    })),
  { loading: () => <SectionPlaceholder /> },
);

const CaseStudies = dynamic(
  () =>
    import("@/components/sections/CaseStudies").then((m) => ({
      default: m.CaseStudies,
    })),
  { loading: () => <SectionPlaceholder tall /> },
);

const Pricing = dynamic(
  () =>
    import("@/components/sections/Pricing").then((m) => ({
      default: m.Pricing,
    })),
  { loading: () => <SectionPlaceholder tall /> },
);

const Testimonials = dynamic(
  () =>
    import("@/components/sections/Testimonials").then((m) => ({
      default: m.Testimonials,
    })),
  { loading: () => <SectionPlaceholder /> },
);

const AISection = dynamic(
  () =>
    import("@/components/sections/AISection").then((m) => ({
      default: m.AISection,
    })),
  { loading: () => <SectionPlaceholder /> },
);

const FinalCTA = dynamic(
  () =>
    import("@/components/sections/FinalCTA").then((m) => ({
      default: m.FinalCTA,
    })),
  { loading: () => <SectionPlaceholder /> },
);

function SectionPlaceholder({ tall }: { tall?: boolean }) {
  return (
    <div
      className={`w-full animate-pulse bg-surface/40 ${tall ? "min-h-[28rem]" : "min-h-[16rem]"}`}
      aria-hidden
    />
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <SocialProofBar />
      <ProblemSection />
      <SolutionSection />
      <ServicesSection />
      <CaseStudies />
      <Pricing />
      <Testimonials />
      <AISection />
      <FinalCTA />
    </>
  );
}
