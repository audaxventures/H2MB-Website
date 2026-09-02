// Central site configuration.
// Values marked PLACEHOLDER must be confirmed by H2MB before launch —
// see docs/build-log.md and the Section 14 checklist in the brief.

export const siteConfig = {
  name: "H2MB",
  legalName: "H2MB Inc.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.h2mb.ca",
  description:
    "H2MB is developing green hydrogen production and distribution infrastructure in Manitoba, beginning with a proposed Phase 1 facility in Winnipeg.",
  locale: "en-CA",
};

// Brief Section 4/11: never fabricate a contact detail that could be
// mistaken for a real, confirmed one. Until H2MB supplies real values via
// env vars, these render as visibly bracketed placeholders (matching the
// brief's own "[APPROVED EMAIL ADDRESS]" convention) rather than a
// plausible-looking but invented email/phone/link.
export const contactConfig = {
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "[APPROVED GENERAL EMAIL]",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "", // leave blank until approved for public release
  city: "Winnipeg, Manitoba",
  country: "Canada",
  // The proposed facility address is intentionally withheld per the brief (Section 11).
};

export const socialLinks = {
  // No confirmed LinkedIn handle exists yet — link to a search rather than
  // guessing a company URL slug, which could point visitors to the wrong
  // (or someone else's) page.
  linkedin:
    process.env.NEXT_PUBLIC_LINKEDIN_URL ||
    "https://www.linkedin.com/search/results/companies/?keywords=H2MB",
};

export const footerLegal = {
  year: new Date().getFullYear(),
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About H2MB", href: "/about" },
  { label: "Our Facility", href: "/our-facility" },
  { label: "Hydrogen", href: "/hydrogen" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export const headerCta = { label: "Partner With H2MB", href: "/contact#partner" };

// Global CTA label registry (brief Section 5) — kept centralized so copy edits
// happen in one place and can migrate to a CMS "site strings" collection later.
export const ctaLabels = {
  exploreFacility: "Explore Our Facility",
  aboutH2mb: "About H2MB",
  exploreHydrogen: "Explore Green Hydrogen",
  exploreApplications: "Explore Hydrogen Applications",
  partner: "Partner With H2MB",
  startConversation: "Start a Conversation",
  viewAllNews: "View All News",
  discoverH2mb: "Discover H2MB",
  explorePhase1: "Explore Phase 1",
  whyManitoba: "Why Manitoba",
  ourDevelopment: "Our Development",
  discoverManitobaAdvantage: "Discover the Manitoba Advantage",
  howGreenHydrogenWorks: "How Green Hydrogen Works",
  discussHydrogenSupply: "Discuss Hydrogen Supply",
  exploreAPartnership: "Explore a Partnership",
  connectWithH2mb: "Connect With H2MB",
};

export const footerNav = {
  company: [
    { label: "About H2MB", href: "/about" },
    { label: "Our Facility", href: "/our-facility" },
    { label: "News", href: "/news" },
  ],
  hydrogen: [
    { label: "Green Hydrogen", href: "/hydrogen#green-hydrogen" },
    { label: "Why Manitoba", href: "/hydrogen#why-manitoba" },
    { label: "Applications", href: "/hydrogen#applications" },
  ],
  connect: [
    { label: "Partner With H2MB", href: "/contact#partner" },
    { label: "Contact", href: "/contact" },
    { label: "LinkedIn", href: socialLinks.linkedin, external: true },
  ],
};
