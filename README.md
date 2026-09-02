# H2MB Website

Production Next.js website for H2MB, a Manitoba-based company developing
green hydrogen production and distribution infrastructure. Built against
`docs_H2MB_Website_Brief.md` — see that file for the full content/strategy
brief, and `docs/build-log.md` for a chronological record of build
decisions and what still needs H2MB's input before launch.

## Stack

- **Next.js 16** (App Router, TypeScript, React 19)
- **Tailwind CSS v4** — design tokens live in `app/globals.css` (`@theme` block)
- **lucide-react** for icons, **framer-motion** for the small set of
  scroll-reveal/diagram animations (motion-safe, respects
  `prefers-reduced-motion`)
- Content as typed local data under `/content` — see `docs/cms-notes.md`
  for the intended headless-CMS migration path
- No image files: hero art, the conceptual facility rendering, the
  Manitoba map and the process diagrams are original inline SVG
  components (`/components/art`, `/components/diagrams`) rather than
  stock photography — see `public/images/README.md` for why

## Local setup

```bash
npm install
cp .env.example .env.local   # fill in real values as they become available
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Other scripts

```bash
npm run build       # production build (also runs Next's TypeScript check)
npm run start        # serve the production build locally
npm run lint          # ESLint
npm run typecheck   # standalone tsc --noEmit (run after a build/dev so .next/types exists)
```

## Environment variables

See `.env.example` for the full list with explanations. Nothing is
required for local development — the site runs with sensible fallbacks
(the contact form runs in a "dry run" mode that validates but doesn't
deliver submissions, and contact details render as bracketed placeholders
instead of inventing values). Before production:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL used for metadata, Open Graph tags and `sitemap.xml` |
| `CONTACT_FORM_PROVIDER` + related vars | Wires the contact form to a real delivery method (Resend email API, or a webhook endpoint) — see `.env.example` for both options |
| `NEXT_PUBLIC_CONTACT_EMAIL` / `NEXT_PUBLIC_CONTACT_PHONE` | Public contact details shown in the footer and on `/contact` |
| `NEXT_PUBLIC_LINKEDIN_URL` | H2MB's confirmed LinkedIn company URL |
| `NEXT_PUBLIC_ANALYTICS_ID` | GA4 measurement ID — omit to disable analytics loading entirely |

## Deploying to Vercel

The project needs no special `next.config.ts` setup (no remote images, no
custom headers/rewrites) — a standard Vercel deployment works out of the
box.

```bash
npm install -g vercel   # if you don't already have the CLI
vercel                  # first deploy — links the project, deploys a preview
vercel --prod            # promote to production
```

Or connect the GitHub repository in the Vercel dashboard for automatic
deploys on push. Either way, set the environment variables above in the
Vercel project settings before the production deploy — the site builds and
runs without them, but the contact form won't deliver anywhere and contact
details will show as placeholders until they're set.

## Project structure

```
app/                  Routes (App Router) — one folder per page, plus
                       sitemap.ts, robots.ts, icon.tsx, opengraph-image.tsx
components/
  layout/              Header, Footer
  ui/                  Buttons, cards, section/heading primitives, forms shell
  sections/            Page-section-level composites (news card/filter,
                       leadership grid, development timeline, etc.)
  diagrams/            The process/opportunity flow diagrams
  art/                 Original SVG illustrations (see public/images/README.md)
content/               Typed content modules (news, leadership, ecosystem,
                       config, contact topics) — see docs/cms-notes.md
lib/                   Contact form server action + validation, analytics
                       wrapper
docs/                  Build log and CMS migration notes
```

## Pre-launch checklist

See the end of `docs/build-log.md` for the full list of items that need
H2MB's approval or real assets before this goes live (leadership bios,
ecosystem logos, real contact details, final imagery, legal copy, and an
analytics/CMS provider decision), mapped to Section 14 of the brief.
