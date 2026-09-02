import type { LucideIcon } from "lucide-react";
import { Truck, Zap, Factory, Wheat } from "lucide-react";

export interface ApplicationCategory {
  icon: LucideIcon;
  title: string;
  description: string;
}

// Home page summary cards (brief Section 6, Section 7 "Applications").
export const applicationCategories: ApplicationCategory[] = [
  {
    icon: Truck,
    title: "Heavy Transportation",
    description: "Heavy-duty trucking, fleets and commercial transportation.",
  },
  {
    icon: Zap,
    title: "Power & Energy",
    description:
      "Power generation, distributed energy, resilience and emerging energy uses.",
  },
  {
    icon: Factory,
    title: "Industry",
    description:
      "Manufacturing, process energy and other hard-to-electrify operations.",
  },
  {
    icon: Wheat,
    title: "Agriculture & Emerging Markets",
    description:
      "Potential applications across agricultural operations, value chains and new low-carbon fuels.",
  },
];

export interface ApplicationDetail {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

// Hydrogen page detailed application sections (brief Section 9, Section 5).
export const applicationDetails: ApplicationDetail[] = [
  {
    id: "heavy-transportation",
    icon: Truck,
    title: "Heavy Transportation",
    description:
      "Hydrogen may support certain heavy-duty trucking, fleet and commercial transportation applications where payload, range, utilization and refuelling time are important. H2MB is working to understand how regional hydrogen supply and infrastructure can support the evolution of Manitoba's transportation sector.",
  },
  {
    id: "power-energy",
    icon: Zap,
    title: "Power & Energy",
    description:
      "Hydrogen can potentially support power generation, distributed energy, backup or resilient energy systems and other emerging applications. The right use depends on operational requirements, economics and the availability of suitable equipment and infrastructure.",
  },
  {
    id: "industry",
    icon: Factory,
    title: "Industry",
    description:
      "Industrial users may consider hydrogen for process energy, manufacturing, chemical applications and other operations that are difficult to electrify directly. H2MB is interested in practical opportunities where regional green hydrogen could contribute to lower-carbon operations.",
  },
  {
    id: "agriculture",
    icon: Wheat,
    title: "Agriculture",
    description:
      "Over time, hydrogen may contribute to agricultural equipment, low-carbon fuels, fertilizer-related value chains and other rural energy applications. These opportunities will develop at different rates and require collaboration across producers, technology providers and users.",
  },
  {
    id: "emerging-opportunities",
    icon: Zap,
    title: "Emerging Opportunities",
    description:
      "Hydrogen may also support future fuel pathways and new technologies, including select aviation, synthetic fuel and energy applications. H2MB will evaluate opportunities as technology, policy and commercial demand evolve.",
  },
];
