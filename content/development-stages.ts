import type { DevelopmentStage } from "./types";

// Status markers are editable content, not hard-coded completion states.
// PLACEHOLDER — H2MB must approve which stages are complete/active/upcoming
// before launch (brief Section 8 developer note, Section 14 checklist).
export const developmentStages: DevelopmentStage[] = [
  {
    id: "foundation",
    index: "01",
    label: "Foundation",
    description: "Company formation and project concept.",
    status: "complete",
  },
  {
    id: "site-planning",
    index: "02",
    label: "Site & Planning",
    description: "Location development and preliminary engineering.",
    status: "active",
  },
  {
    id: "market-development",
    index: "03",
    label: "Market Development",
    description: "Industry engagement, partnerships and future demand.",
    status: "active",
  },
  {
    id: "engineering-procurement",
    index: "04",
    label: "Engineering & Procurement",
    description: "FEED, detailed development and equipment procurement.",
    status: "upcoming",
  },
  {
    id: "construction-commissioning",
    index: "05",
    label: "Construction & Commissioning",
    description: "Construction, testing and commissioning of Phase 1.",
    status: "upcoming",
  },
];

// Homepage progress strip uses shorter labels (brief Section 6, Section 8).
export const progressLabels = [
  "Foundation",
  "Site & Planning",
  "Market Development",
  "Engineering & Procurement",
  "Construction & Commissioning",
];
