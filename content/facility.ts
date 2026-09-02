import type { LucideIcon } from "lucide-react";
import { Zap, Database, Truck, TrendingUp, Fuel } from "lucide-react";

export interface FacilityCapability {
  icon: LucideIcon;
  title: string;
  description: string;
}

// Home page Phase 1 capability cards (brief Section 6, Section 3).
export const homeFacilityCapabilities: FacilityCapability[] = [
  {
    icon: Zap,
    title: "Green Hydrogen Production",
    description: "Production using renewable electricity and water.",
  },
  {
    icon: Database,
    title: "Storage & Distribution",
    description: "Integrated capabilities to help move hydrogen where it is needed.",
  },
  {
    icon: Fuel,
    title: "Hydrogen Refuelling",
    description: "Infrastructure intended to support suitable transportation applications.",
  },
  {
    icon: TrendingUp,
    title: "Designed for Growth",
    description: "A foundation that can evolve alongside demand and the market.",
  },
];

// Our Facility page Phase 1 capability cards (brief Section 8, Section 3).
export const facilityPhase1Capabilities: FacilityCapability[] = [
  {
    icon: Zap,
    title: "Production",
    description: "Green hydrogen produced using renewable electricity and water.",
  },
  {
    icon: Database,
    title: "Storage",
    description: "Integrated storage intended to support safe and reliable supply.",
  },
  {
    icon: Truck,
    title: "Distribution",
    description:
      "Capabilities designed to support the movement of hydrogen to future customers.",
  },
  {
    icon: Fuel,
    title: "Refuelling",
    description: "Dispensing infrastructure intended for suitable transportation applications.",
  },
];

export const valueChainSteps = [
  "Renewable Electricity",
  "Green Hydrogen Production",
  "Storage",
  "Distribution & Refuelling",
  "Customers",
];

export const homeProcessSteps = [
  "Renewable Electricity",
  "Water + Electrolysis",
  "Green Hydrogen",
  "Storage & Distribution",
  "End Users",
];

export const growthStages = [
  {
    title: "Phase 1",
    description: "Establish initial production and distribution infrastructure.",
  },
  {
    title: "Grow",
    description: "Expand capacity and capabilities alongside customer demand.",
  },
  {
    title: "Scale",
    description: "Support a broader hydrogen economy across Manitoba and the Canadian Prairies.",
  },
];

export const builtForGrowthStages = [
  { title: "Phase 1", description: "Establish initial infrastructure." },
  { title: "Expansion", description: "Increase capacity and capabilities alongside demand." },
  {
    title: "Regional Growth",
    description: "Support a broader Manitoba and Prairie hydrogen economy.",
  },
];
