import { cn } from "@/lib/cn";

/**
 * Original stylized Manitoba outline showing Winnipeg and general corridor
 * directions only — not a real geographic boundary trace and no confidential
 * site information, per the brief's "Map instruction" (Section 9).
 */
export function ManitobaMap({ className }: { className?: string }) {
  return (
    <svg
      className={cn(className)}
      role="img"
      aria-label="Stylized map showing Winnipeg, Manitoba and general north-south and east-west transportation corridor directions."
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 600 620"
    >
      <path
        d="M120 40 L470 40 L470 200 L520 200 L520 520 L300 580 L120 540 L90 300 L140 250 L100 160 Z"
        fill="#f1f2f4"
        stroke="#16283f"
        strokeWidth="2"
      />
      <g stroke="#3fab6c" strokeWidth="2" strokeDasharray="6 8" strokeLinecap="round" opacity="0.85">
        <line x1="300" y1="10" x2="300" y2="610" />
        <line x1="20" y1="330" x2="580" y2="330" />
      </g>
      <circle cx="300" cy="330" r="9" fill="#1b7a45" />
      <circle cx="300" cy="330" r="18" fill="none" stroke="#1b7a45" strokeWidth="1.5" opacity="0.6" />
      <text
        x="320"
        y="325"
        fontSize="20"
        fontWeight="600"
        fill="#0f1c2e"
        fontFamily="var(--font-display, sans-serif)"
      >
        Winnipeg
      </text>
      <text x="300" y="34" textAnchor="middle" fontSize="13" fill="#3a4450" letterSpacing="1.5">
        NORTH
      </text>
      <text x="300" y="606" textAnchor="middle" fontSize="13" fill="#3a4450" letterSpacing="1.5">
        SOUTH
      </text>
      <text x="30" y="326" fontSize="13" fill="#3a4450" letterSpacing="1.5">
        WEST
      </text>
      <text x="530" y="326" fontSize="13" fill="#3a4450" letterSpacing="1.5">
        EAST
      </text>
    </svg>
  );
}
