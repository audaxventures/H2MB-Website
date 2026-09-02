import type { EcosystemCategory, EcosystemPartner } from "./types";

// Category labels (brief Section 7, "Collaboration"): shown regardless of
// approved logos so the ecosystem story reads even before partners sign off.
export const ecosystemCategories: EcosystemCategory[] = [
  "Industry",
  "Transportation",
  "Government",
  "Academia",
  "Technology",
  "Investment",
];

// PLACEHOLDER — no organization logos are approved for public display yet.
// Per the brief: "Only display organizations approved by H2MB." Add entries
// here (with approved: true) only once H2MB confirms both the logo usage and
// the relationship wording. Until then the ecosystem section falls back to
// the category-label treatment instead of fabricating partner logos.
export const ecosystemPartners: EcosystemPartner[] = [];
