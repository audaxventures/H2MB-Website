import { cn } from "@/lib/cn";

/**
 * Original abstract line-art composition suggesting integrated hydrogen
 * infrastructure (production block, storage cylinders, distribution piping).
 * Intentionally non-technical — no equipment specs, layout or manufacturer
 * detail — and must always be paired with a visible "Conceptual rendering"
 * label per the brief's imagery policy.
 */
export function ConceptualFacility({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  const line = tone === "dark" ? "#e1e6e3" : "#091e49";
  const accent = "#78b861";
  const fill = tone === "dark" ? "#061532" : "#f3f6f4";

  return (
    <svg
      className={cn(className)}
      role="img"
      aria-label="Conceptual line illustration representing H2MB's proposed Phase 1 hydrogen infrastructure. This is a stylized concept, not an engineering drawing of an operating facility."
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 800 500"
    >
      <rect width="800" height="500" fill="none" />
      {/* ground line */}
      <line x1="40" y1="420" x2="760" y2="420" stroke={line} strokeOpacity="0.4" strokeWidth="1.5" />

      {/* production block */}
      <rect x="90" y="260" width="160" height="160" fill={fill} stroke={line} strokeWidth="1.5" />
      <line x1="90" y1="300" x2="250" y2="300" stroke={line} strokeOpacity="0.5" strokeWidth="1" />
      <line x1="90" y1="340" x2="250" y2="340" stroke={line} strokeOpacity="0.5" strokeWidth="1" />
      <line x1="90" y1="380" x2="250" y2="380" stroke={line} strokeOpacity="0.5" strokeWidth="1" />

      {/* storage cylinders */}
      <g>
        <ellipse cx="340" cy="270" rx="34" ry="12" fill="none" stroke={accent} strokeWidth="1.75" />
        <line x1="306" y1="270" x2="306" y2="420" stroke={accent} strokeWidth="1.75" />
        <line x1="374" y1="270" x2="374" y2="420" stroke={accent} strokeWidth="1.75" />
        <ellipse cx="340" cy="420" rx="34" ry="12" fill="none" stroke={accent} strokeWidth="1.75" opacity="0.5" />
      </g>
      <g>
        <ellipse cx="420" cy="300" rx="26" ry="9" fill="none" stroke={accent} strokeWidth="1.75" />
        <line x1="394" y1="300" x2="394" y2="420" stroke={accent} strokeWidth="1.75" />
        <line x1="446" y1="300" x2="446" y2="420" stroke={accent} strokeWidth="1.75" />
      </g>

      {/* distribution / piping */}
      <path
        d="M480 420 L480 340 L640 340 L640 380"
        fill="none"
        stroke={line}
        strokeWidth="1.5"
        strokeDasharray="2 6"
        strokeLinecap="round"
      />
      <circle cx="640" cy="380" r="6" fill="none" stroke={accent} strokeWidth="1.5" />

      {/* refuelling / distribution structure */}
      <rect x="590" y="380" width="120" height="40" fill={fill} stroke={line} strokeWidth="1.5" />
      <line x1="650" y1="380" x2="650" y2="340" stroke={line} strokeWidth="1.5" />
      <rect x="630" y="320" width="40" height="20" fill="none" stroke={accent} strokeWidth="1.5" />
    </svg>
  );
}
