import type { NewsCategory } from "@/content/types";
import { cn } from "@/lib/cn";

const categoryAccent: Record<NewsCategory, string> = {
  "H2MB News": "#3fab6c",
  Insights: "#dde1e5",
  Media: "#93a4b8",
};

function hashSeed(input: string) {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = (hash << 5) - hash + input.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

/** Deterministic generated cover graphic used whenever an article has no real photography yet. */
export function NewsCoverArt({
  slug,
  category,
  className,
}: {
  slug: string;
  category: NewsCategory;
  className?: string;
}) {
  const seed = hashSeed(slug);
  const accent = categoryAccent[category];
  const x1 = 20 + (seed % 60);
  const y1 = 20 + ((seed >> 3) % 60);
  const x2 = 40 + ((seed >> 6) % 60);
  const y2 = 40 + ((seed >> 9) % 60);

  return (
    <svg
      className={cn(className)}
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 400 260"
    >
      <rect width="400" height="260" fill="#0f1c2e" />
      <g stroke={accent} strokeOpacity="0.55" strokeWidth="1.5">
        <line x1={x1} y1={y1} x2={x1 + 220} y2={y1 + 40} />
        <line x1={x2} y1={y2 + 60} x2={x2 + 260} y2={y2 - 10} />
      </g>
      <circle cx={x1 + 40} cy={y1 + 130} r="46" fill="none" stroke={accent} strokeWidth="1.5" opacity="0.7" />
      <circle cx={x2 + 220} cy={y2 + 40} r="4" fill={accent} />
      <text
        x="24"
        y="230"
        fontSize="13"
        fill="white"
        fillOpacity="0.55"
        letterSpacing="2"
        fontFamily="var(--font-display, sans-serif)"
      >
        H2MB
      </text>
    </svg>
  );
}
