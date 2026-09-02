import type { LucideIcon } from "lucide-react";
import { Wind, MapPinned, Building2, Sprout, ShieldCheck, Truck } from "lucide-react";

export interface AdvantagePoint {
  icon: LucideIcon;
  title: string;
  description: string;
}

// Home page "Manitoba Advantage" grid (brief Section 6, Section 5).
export const homeAdvantagePoints: AdvantagePoint[] = [
  {
    icon: Wind,
    title: "Renewable Electricity",
    description:
      "Manitoba's predominantly renewable electricity system supports low-carbon hydrogen production.",
  },
  {
    icon: MapPinned,
    title: "Central Location",
    description:
      "Winnipeg connects major Canadian and North American transportation and trade corridors.",
  },
  {
    icon: Building2,
    title: "Diverse Economy",
    description:
      "Transportation, agriculture, manufacturing and energy create a range of potential applications.",
  },
  {
    icon: Sprout,
    title: "Room to Grow",
    description:
      "Manitoba has an opportunity to develop supply, infrastructure and demand together.",
  },
];

// Hydrogen page "Why Manitoba" grid — five points (brief Section 9).
export const hydrogenAdvantagePoints: AdvantagePoint[] = [
  {
    icon: Wind,
    title: "Renewable Electricity",
    description:
      "A predominantly renewable electricity system supports low-carbon hydrogen production.",
  },
  {
    icon: MapPinned,
    title: "Strategic Geography",
    description:
      "A central North American location connects east-west and north-south trade corridors.",
  },
  {
    icon: Truck,
    title: "Transportation",
    description:
      "Significant freight activity creates potential for suitable heavy-duty hydrogen applications.",
  },
  {
    icon: Building2,
    title: "Industry & Agriculture",
    description: "A diverse economy provides potential uses beyond transportation.",
  },
  {
    icon: ShieldCheck,
    title: "Energy Security",
    description:
      "Locally produced hydrogen could support greater energy diversification and resilience.",
  },
];
