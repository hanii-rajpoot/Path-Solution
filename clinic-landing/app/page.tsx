import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";

const painPoints = [
  "No strong online presence for your clinic",
  "Outdated or no website to build trust",
  "Low patient inquiries from digital channels",
  "Weak branding compared to premium competitors",
  "No proper conversion flow for leads",
];

const services = [
  {
    title: "Website Development",
    description:
      "Modern, premium clinic websites that build trust and convert visitors into patient inquiries.",
  },
  {
    title: "Landing Pages",
    description:
      "High-converting service pages for treatments, offers, and campaigns with clear consultation CTAs.",
  },
  {
    title: "Lead Generation",
    description:
      "Simple, practical lead flow setup focused on real consultation requests for your clinic.",
  },
  {
    title: "Social Media Setup",
    description:
      "Professional profile setup and brand-ready presence so your clinic looks credible everywhere.",
  },
];

const reasons = [
  "Modern premium designs aligned with healthcare trust",
  "Conversion-focused page structure and CTA placement",
  "Fast delivery with clear communication",
  "Built specifically for doctors and clinics",
];

const outcomes = [
  "More qualified patient inquiries",
  "Stronger online trust and authority",
  "Premium clinic image across web and social",
  "Better lead-to-consultation conversion",
];

const testimonials = [
  {
    quote:
      "Within weeks, we started getting consistent consultation inquiries from our new landing flow.",
    name: "Dr. Ayesha Khan",
    role: "Aesthetic Clinic Owner",
  },
  {
    quote:
      "Our brand now looks premium online, and patient trust improved immediately after launch.",
    name: "Dr. Hamza Qureshi",
    role: "Dental Clinic Director",
  },
  {
    quote:
      "Simple process, fast delivery, and clear results. Exactly what a clinic business needs.",
    name: "Dr. Sara Ali",
    role: "Skin Clinic Founder",
  },
];

const portfolioCards = [
  "Aesthetic Clinic Website Preview",
  "Skin Treatment Landing Page Preview",
  "Dental Smile Makeover Funnel Preview",
];

function Card({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <article className="rounded-2xl border border-white/10 bg-card/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-glow">
      <h3 className="text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink/75">{description}</p>
    </article>
  );
}

export default function ClinicLandingPage() {
  return (
    <div className="bg-radial-gold">
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-24 sm:px-8 md:pt-28">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionLabel>Clinic Growth Setup</SectionLabel>
            <h1 className="text-balance font-display text-4xl leading-tight text-ink sm:text-5xl md:text-6xl">
              Premium Digital Presence for Doctors and Clinics
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/80 sm:text-lg">
              We help aesthetic, skin, dental, and cosmetic clinics get a high-converting
              website, landing pages, and lead-focused setup that brings more consultation
              bookings.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="https://calendly.com/your-clinic-growth-call">
                Book Free Consultation
              </Button>
              <Button
                href="https://wa.me/923000000000?text=I%20want%20my%20clinic%20growth%20setup"
                variant="outline"
              >
                Get Your Clinic Growth Setup
              </Button>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-surface/80 p-5 shadow-glow">
            <div className="rounded-2xl border border-white/10 bg-card p-4">
              <div className="h-3 w-24 rounded-full bg-gold/40" />
              <div className="mt-4 space-y-3">
                <div className="h-28 rounded-xl bg-white/[0.06]" />
                <div className="grid grid-cols-2 gap-3">
                  <div className="h-20 rounded-xl bg-white/[0.06]" />
                  <div className="h-20 rounded-xl bg-white/[0.06]" />
                </div>
                <div className="h-10 w-40 rounded-lg bg-gold/30" />
              </div>
            </div>
            <p className="mt-4 text-sm text-ink/70">
              Modern clinic-style preview block (placeholder mockup)
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <SectionLabel>The Problems We Solve</SectionLabel>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {painPoints.map((point) => (
            <article
              key={point}
              className="rounded-2xl border border-white/10 bg-surface/70 p-5 text-sm text-ink/80 transition-colors duration-300 hover:border-gold/40"
            >
              {point}
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <SectionLabel>Our Services</SectionLabel>
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <Card key={service.title} title={service.title} description={service.description} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <SectionLabel>Why Choose Us</SectionLabel>
        <div className="grid gap-4 sm:grid-cols-2">
          {reasons.map((reason) => (
            <div
              key={reason}
              className="rounded-2xl border border-white/10 bg-card/70 p-5 text-sm text-ink/85"
            >
              {reason}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <SectionLabel>Results You Can Expect</SectionLabel>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((item) => (
            <article
              key={item}
              className="rounded-2xl border border-gold/25 bg-gold/10 p-5 text-sm text-ink"
            >
              {item}
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <SectionLabel>Portfolio Mockups</SectionLabel>
        <div className="grid gap-5 md:grid-cols-3">
          {portfolioCards.map((item) => (
            <article
              key={item}
              className="rounded-2xl border border-white/10 bg-surface p-4 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="h-48 rounded-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02]" />
              <p className="mt-3 text-sm text-ink/80">{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <SectionLabel>Clinic Testimonials</SectionLabel>
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="rounded-2xl border border-white/10 bg-card p-6">
              <p className="text-sm leading-relaxed text-ink/80">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <p className="mt-4 text-sm font-semibold text-ink">{testimonial.name}</p>
              <p className="text-xs uppercase tracking-wide text-gold/90">{testimonial.role}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 pt-10 sm:px-8">
        <div className="rounded-3xl border border-gold/30 bg-gradient-to-b from-gold/15 to-transparent p-8 text-center sm:p-12">
          <SectionLabel className="mb-3 text-center">Start Your Growth Setup</SectionLabel>
          <h2 className="text-balance font-display text-3xl text-ink sm:text-4xl">
            Ready to attract more patients and grow your clinic?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-ink/80 sm:text-base">
            Book a free consultation and get a clear, practical setup plan for your clinic website,
            landing pages, and lead generation flow.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="https://calendly.com/your-clinic-growth-call">Book Free Consultation</Button>
            <Button
              href="https://wa.me/923000000000?text=I%20want%20to%20grow%20my%20clinic%20online"
              variant="outline"
            >
              WhatsApp Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
