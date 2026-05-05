/** Central copy & configuration — edit here without touching components */

export const SITE = {
  name: "Path Solution",
  tagline: "Your Business, Engineered for Growth.",
  /** Replace with your WhatsApp business number (digits only, country code, no +) */
  whatsappPhone: "923001234567",
  /** Pre-filled message for strategy call CTAs */
  whatsappMessage:
    "Hi Path Solution, I'd like a free strategy call",
  /** Replace with your Calendly URL */
  calendlyUrl: "https://calendly.com/path-solution/strategy-call",
  email: "hello@pathsolution.com",
  twitterHandle: "@pathsolution",
} as const;

export function getWhatsAppLink(text?: string): string {
  const msg = encodeURIComponent(text ?? SITE.whatsappMessage);
  return `https://wa.me/${SITE.whatsappPhone}?text=${msg}`;
}

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Case Studies", href: "/#case-studies" },
  { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
] as const;

export const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://instagram.com/",
    icon: "instagram" as const,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/",
    icon: "linkedin" as const,
  },
  {
    label: "WhatsApp",
    href: getWhatsAppLink(),
    icon: "whatsapp" as const,
  },
] as const;

export const HERO = {
  headline: "Your Business Deserves Clients. Not Just a Website.",
  subheadline:
    "We engineer premium brands, high-converting funnels, and AI automation systems that turn your business into a client-generation machine.",
  primaryCta: "Book My Free Strategy Call",
  secondaryCta: "See How It Works",
  trustBar:
    "Trusted by clinics, law firms, coaches & consultants",
} as const;

export const MARQUEE_ITEMS = [
  "Dental Clinics",
  "Law Firms",
  "Real Estate",
  "Life Coaches",
  "Aesthetic Clinics",
  "Contractors",
  "Consultants",
] as const;

export const PROBLEM = {
  label: "THE PROBLEM",
  headline: "You're Good at What You Do. But Online? You're Invisible.",
  cards: [
    {
      n: "01",
      title: "No Consistent Leads",
      body: "You rely on referrals that dry up without warning.",
    },
    {
      n: "02",
      title: "Your Website Doesn't Convert",
      body: "Visitors land and leave without calling or booking.",
    },
    {
      n: "03",
      title: "Manual Everything",
      body: "Answering WhatsApps, chasing leads — all by hand.",
    },
    {
      n: "04",
      title: "Brand Doesn't Match Your Quality",
      body: "Your work is premium. Your online presence isn't.",
    },
  ],
} as const;

export const SOLUTION = {
  headline: "We Build the System Your Business Has Been Missing",
  subtext:
    "Brand authority, conversion architecture, and automation — engineered as one cohesive growth engine. No disconnected tactics. One path from stranger to booked client.",
  columns: [
    {
      title: "Premium Brand",
      subtitle: "Authority that commands premium prices",
    },
    {
      title: "Smart Funnel",
      subtitle: "Converts strangers into booked appointments",
    },
    {
      title: "AI Automation",
      subtitle: "Handles leads 24/7 while you focus on your craft",
    },
  ],
} as const;

export const SERVICES_PREVIEW = {
  label: "WHAT WE BUILD",
  headline: "Everything You Need. Nothing You Don't.",
  items: [
    {
      key: "branding",
      title: "Branding Strategy",
      description:
        "Premium logos, brand guidelines, and identity systems that position you as the #1 choice in your market.",
      icon: "palette" as const,
    },
    {
      key: "websites",
      title: "High-Converting Websites",
      description:
        "Built to turn visitors into inquiries — not just look pretty. Mobile-first, fast, and SEO-optimised.",
      icon: "layout" as const,
    },
    {
      key: "funnels",
      title: "Sales Funnels",
      description:
        "Landing pages and conversion journeys engineered to book appointments and generate qualified leads.",
      icon: "gitBranch" as const,
    },
    {
      key: "leads",
      title: "Lead Generation Systems",
      description:
        "Google Ads, Meta Ads, and organic systems that bring your ideal clients to you — predictably.",
      icon: "target" as const,
    },
    {
      key: "ai",
      title: "AI Automation",
      description:
        "WhatsApp bots, appointment booking, follow-up sequences, and AI receptionists that work 24/7.",
      icon: "bot" as const,
    },
  ],
} as const;

export const SERVICES_PAGE = {
  title: "Services",
  intro:
    "From positioning to pipelines — we design and build the assets and systems high-trust service businesses need to win premium clients.",
  pillars: [
    {
      title: "Brand & positioning",
      body: "Voice, visual identity, and messaging that match the caliber of your work — so prospects feel the premium before they book.",
    },
    {
      title: "Conversion-focused web",
      body: "Fast, mobile-first sites structured around clarity, proof, and calls-to-action that drive inquiries.",
    },
    {
      title: "Funnels & acquisition",
      body: "Landing pages, offers, and paid/organic acquisition paths engineered for qualified appointments — not vanity traffic.",
    },
    {
      title: "Automation layer",
      body: "WhatsApp flows, booking logic, reminders, and AI-assisted reception — so leads never slip through the cracks.",
    },
  ],
} as const;

export const CASE_STUDIES = {
  label: "REAL RESULTS",
  headline: "Systems That Delivered.",
  studies: [
    {
      id: "clinic",
      badge: "Clinic",
      client: "Dr. Farrukh's Aesthetic Clinic",
      challenge:
        "Zero online presence, manual appointment booking, no lead system.",
      solution:
        "New brand, Google funnel, AI receptionist, automated booking.",
      results: [
        { label: "New patients / month", value: "47", note: "was 12" },
        { label: "Google rating", value: "4.8★", note: "" },
        { label: "Manual inquiry handling", value: "Zero", note: "" },
      ],
    },
    {
      id: "law",
      badge: "Law Firm",
      client: "Raza & Associates, Islamabad",
      challenge: "Old website, referral-only leads, weak brand.",
      solution: "Premium rebrand, conversion website, lead funnel.",
      results: [
        { label: "Consultation requests", value: "3×", note: "" },
        { label: "Avg. client value", value: "+40%", note: "" },
        { label: "Brand perception", value: "Top-tier", note: "" },
      ],
    },
  ],
} as const;

export const PRICING = {
  label: "INVESTMENT",
  headline: "Choose Your Growth Path",
  footerHint:
    "Not sure which to choose? Book a free strategy call →",
  packages: [
    {
      id: "starter",
      name: "Starter Presence",
      price: "$797",
      value: "$2,400",
      featured: false,
      items: [
        "Brand logo + colour system",
        "5-page website",
        "Basic SEO + Google Business",
        "WhatsApp lead capture",
        "1 month support",
      ],
    },
    {
      id: "growth",
      name: "Growth Engine",
      price: "$2,497",
      value: "$7,500",
      featured: true,
      badge: "Most Popular",
      items: [
        "Full brand identity system",
        "8-page custom website",
        "1 high-converting lead funnel",
        "Lead magnet + email capture",
        "AI WhatsApp auto-responder",
        "1 ad campaign setup",
        "3-month reporting",
      ],
    },
    {
      id: "scale",
      name: "Scale Suite",
      price: "$4,997",
      value: "$15,000",
      featured: false,
      items: [
        "Premium brand + guidelines",
        "Website + landing pages",
        "2-step funnel with upsells",
        "Full AI automation system",
        "Appointment booking bot",
        "WhatsApp + email sequences",
        "Monthly ad management",
        "6 months support",
      ],
    },
  ],
} as const;

export const TESTIMONIALS = {
  headline: "What Our Clients Say",
  items: [
    {
      quote:
        "Before Path Solution, I had a website nobody visited. Now I get 3–5 consultation requests every week on autopilot.",
      name: "Dr. Kamran Malik",
      role: "Aesthetic Clinic, Lahore",
      initials: "KM",
    },
    {
      quote:
        "Our clinic went from zero social presence to consistent patient inquiries within 60 days. The funnel converts like nothing we've seen before.",
      name: "Sana Ahmed",
      role: "Dental Practice Owner, Karachi",
      initials: "SA",
    },
    {
      quote:
        "We were wasting money on ads. Path Solution rebuilt our funnel and cost per lead dropped 65%.",
      name: "Raza & Associates",
      role: "Real Estate, Islamabad",
      initials: "RA",
    },
    {
      quote:
        "After Path Solution rebuilt my coaching brand, I went from $200/session to $750/session. The system just works.",
      name: "Fatima Hassan",
      role: "Business Coach",
      initials: "FH",
    },
  ],
} as const;

export const AI_SECTION = {
  label: "AI AUTOMATION",
  headline: "Your Business, Running While You Sleep.",
  body: [
    "Your prospects message at odd hours. Missed chats mean missed revenue.",
    "We deploy intelligent WhatsApp flows that qualify, educate, and book — instantly.",
    "You wake up to confirmations on your calendar instead of a backlog of unread threads.",
  ],
  chat: {
    clientMsg: "Hi — do you have openings this week?",
    clientMeta: "WhatsApp · 2:14 AM",
    aiReply:
      "Yes — two slots Thu & Fri. I can hold one for you. Which works best?",
    bookedMsg:
      "Booked ✓ Thu 11:00 AM — you'll receive a confirmation shortly.",
    ownerNote: "Owner wakes up → client already confirmed.",
  },
} as const;

export const FINAL_CTA = {
  headline: "Ready to Build a Business That Runs Without You?",
  subtext:
    "Book a free 30-minute strategy call. We'll audit your brand, website, and lead system — and show you exactly what needs to change to double your client flow in 90 days. No pitch. No pressure. Just strategy.",
  button: "Book My Free Strategy Call",
  scarcity: "⚡ Only 3 spots available this month",
} as const;

export const CONTACT_PAGE = {
  title: "Contact",
  intro:
    "Tell us about your business and your biggest constraint. We'll reply within 24 hours.",
  formSuccess:
    "We've received your details! Expect a call within 24 hours.",
} as const;

export const BUSINESS_TYPES = [
  "Clinic/Doctor",
  "Law Firm",
  "Real Estate",
  "Coach",
  "Other",
] as const;

export const SEO = {
  title:
    "Path Solution | Premium Branding, Funnels & AI Automation for Service Businesses",
  description:
    "Path Solution engineers premium brands, high-converting websites, sales funnels, and AI automation systems for clinics, law firms, coaches, and consultants.",
  keywords: [
    "branding agency",
    "sales funnel",
    "AI automation",
    "WhatsApp automation",
    "service business marketing",
  ],
} as const;

export const COPYRIGHT_YEAR = 2026;
