export function GridPattern({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 800 600"
    >
      <defs>
        <pattern id="h2mb-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </pattern>
        <linearGradient id="h2mb-grid-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0.9" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <mask id="h2mb-grid-mask">
          <rect width="800" height="600" fill="url(#h2mb-grid-fade)" />
        </mask>
      </defs>
      <rect width="800" height="600" fill="url(#h2mb-grid)" mask="url(#h2mb-grid-mask)" />
    </svg>
  );
}
