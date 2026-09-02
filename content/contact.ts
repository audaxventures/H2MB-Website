export const contactTopics = [
  "Hydrogen Supply",
  "Transportation",
  "Industrial / Energy",
  "Strategic Partnership",
  "Investment & Development",
  "Media",
  "General Inquiry",
] as const;

export type ContactTopic = (typeof contactTopics)[number];

export interface PartnerPathway {
  id: string;
  title: string;
  description: string;
  ctaLabel: string;
  /** Pre-selects this topic in the contact form when the pathway CTA is used. */
  presetTopic: ContactTopic;
}

// brief Section 11, "Partner With H2MB"
export const partnerPathways: PartnerPathway[] = [
  {
    id: "hydrogen-offtake",
    title: "Hydrogen & Offtake",
    description:
      "For organizations exploring future hydrogen supply and demand opportunities.",
    ctaLabel: "Discuss Hydrogen Supply",
    presetTopic: "Hydrogen Supply",
  },
  {
    id: "industry-transportation",
    title: "Industry & Transportation",
    description:
      "For fleets, industrial operators, energy users and organizations evaluating hydrogen applications.",
    ctaLabel: "Explore Hydrogen Applications",
    presetTopic: "Industrial / Energy",
  },
  {
    id: "strategic-partnerships",
    title: "Strategic Partnerships",
    description:
      "For technology, infrastructure, engineering, academic and ecosystem organizations.",
    ctaLabel: "Explore a Partnership",
    presetTopic: "Strategic Partnership",
  },
  {
    id: "investment-development",
    title: "Investment & Development",
    description:
      "For strategic investors, capital partners and organizations interested in H2MB's development.",
    ctaLabel: "Connect With H2MB",
    presetTopic: "Investment & Development",
  },
];
