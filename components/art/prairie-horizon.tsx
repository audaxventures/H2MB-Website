/**
 * Original abstract Manitoba prairie/horizon line illustration. Deliberately
 * non-literal (no recognizable landmark, no third-party imagery) — see
 * public/images/README.md for why this is used instead of stock photography.
 */
export function PrairieHorizon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="xMidYMax slice"
      viewBox="0 0 1600 900"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0f1c2e" />
          <stop offset="100%" stopColor="#16283f" />
        </linearGradient>
        <linearGradient id="field-far" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1f3652" />
          <stop offset="100%" stopColor="#16283f" />
        </linearGradient>
      </defs>
      <rect width="1600" height="900" fill="url(#sky)" />
      <circle cx="1260" cy="230" r="120" fill="#1b7a45" opacity="0.16" />
      <circle cx="1260" cy="230" r="60" fill="#279256" opacity="0.22" />
      <path d="M0 620 C 260 560, 520 600, 800 560 C 1080 520, 1340 580, 1600 540 L1600 900 L0 900 Z" fill="url(#field-far)" opacity="0.8" />
      <path d="M0 700 C 300 660, 560 720, 900 680 C 1180 650, 1400 700, 1600 660 L1600 900 L0 900 Z" fill="#0f1c2e" />
      <g stroke="#3fab6c" strokeOpacity="0.3" strokeWidth="1">
        <line x1="0" y1="760" x2="1600" y2="740" />
        <line x1="0" y1="800" x2="1600" y2="785" />
      </g>
      <g stroke="#dde1e5" strokeOpacity="0.35" strokeWidth="2">
        <line x1="120" y1="900" x2="180" y2="640" />
        <line x1="180" y1="640" x2="150" y2="900" />
        <line x1="120" y1="700" x2="210" y2="700" />
        <line x1="130" y1="760" x2="200" y2="760" />
      </g>
    </svg>
  );
}
