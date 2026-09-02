# H2MB Website — Build Log

Chronological record of build decisions, so progress can be reviewed without
re-reading the whole codebase. Each entry maps to a stage in the build
prompt's Section 6.

## Stage 0 — Setup

- Confirmed the repo contained only `docs_H2MB_Website_Brief.md`; no existing
  framework to inspect. Proceeded with the stack specified in the prompt.
- Read the full brief before writing code.

## Stage 1 — Scaffold

- Scaffolded with `create-next-app` (App Router, TypeScript, Tailwind CSS
  v4, ESLint), then merged into the repo root (`create-next-app` refuses to
  target a directory whose name contains capital letters, so it was
  generated in a temp dir and copied in).
- Added `lucide-react` (icon set) and `framer-motion` (used narrowly for the
  hydrogen value-chain / process diagrams' scroll reveal and line-draw
  animation, respecting `prefers-reduced-motion`). No other dependencies
  added — Tailwind v4 covers layout/styling, and forms/validation are
  handled with native `<form>` + a server action rather than a form
  library, since the field set is small and fixed.
- Defined the design system directly in `app/globals.css` via Tailwind v4's
  `@theme` block: navy scale (`navy-950`…`navy-600`) as primary, an
  `h2green` scale as the selective accent, `warmwhite`/`coolgrey` light
  backgrounds, `ink` text scale. **The exact H2MB green hex is a
  placeholder** (`#1b7a45` / `h2green-600`) — swap `--color-h2green-*` in
  `app/globals.css` for the real brand value; every accent use in the
  codebase reads from that token, so it's a one-file change.
- Typography: Archivo (display/headings, architectural grotesk feel, wide
  weight range) + Inter (body), loaded via `next/font/google` so they're
  self-hosted at build time with no runtime request to Google Fonts.

## Stage 2 — Content model

- Built `/content` as typed TypeScript modules (`types.ts` defines the
  shapes) rather than MDX, since none of the launch content is long-form
  freeform prose beyond news articles, and a typed array is easier to keep
  in sync with the brief's exact field lists (e.g. contact-topic dropdown,
  development-stage statuses). News article bodies use a small typed block
  system (`paragraph`/`heading`/`quote`) so they can render rich text
  without a markdown pipeline, and so migrating to a CMS's rich-text field
  later is a straight mapping (see `docs/cms-notes.md`).
- **No third-party or invented facility photography exists for this
  project.** Rather than use stock placeholder photos (which would risk the
  exact misrepresentation the brief's imagery policy warns against),
  hero/diagram art is built as original inline SVG components — see
  `public/images/README.md` for the full rationale and the swap-in path
  once real photography/renderings are approved.
- Leadership (`content/leadership.ts`) ships with 3 clearly bracketed
  placeholder profiles (`[Full Name Pending Approval]`) so the Leadership
  section is demonstrable, but nothing resembling a real credential is
  published. Must be replaced before launch (checklist item).
- Ecosystem partners (`content/ecosystem.ts`) ships with **zero** entries —
  the brief is explicit that only H2MB-approved organizations may appear by
  logo. The homepage/About ecosystem section falls back to the
  category-label treatment (`INDUSTRY • TRANSPORTATION • …`) until real
  approved logos are added with `approved: true`.
- News content (`content/news.ts`) ships with 7 placeholder articles (2
  H2MB News, 2 Insights, 2 Media, all cross-linked as "related") so the
  filter system, featured-story module and article template are fully
  demonstrable. All copy stays inside the brief's disclosure rules (no
  invented dates beyond a publish date, no costs/capacities/specs). Must be
  reviewed/replaced before launch.

<!-- Further stage entries appended below as work progresses. -->
