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

## Stage 3 — Shared components

- Built the reusable set once: `Header` (transparent-over-hero, solid on
  scroll, accessible mobile menu) and `Footer`; `PageHero` and `SectionNav`
  (the sticky anchor navigator, active-state tracked with an
  `IntersectionObserver`); `Section`/`Container`/`SectionHeading`/`Eyebrow`
  as layout primitives; `Button`/`ButtonEl` (analytics-tracked CTAs);
  `IconCard`/`CardGrid` for application/capability/advantage cards;
  `DevelopmentTimeline`; `ProcessDiagram` (the reusable value-chain/how-it-
  works flow, horizontal on desktop → vertical on mobile) and
  `OpportunityDiagram` (Production ↔ Infrastructure ↔ Demand);
  `NewsCard`/`NewsFilter`; `ContactForm`; `ConceptualRenderingLabel` /
  `ImageCaption`; `PartnerCta`.
- Two real bugs found and fixed while building the header:
  1. It was `position: sticky`, which reserves its own space in normal
     flow — so the "transparent over the hero, solid on scroll" effect
     never actually showed; it just sat on the plain page background above
     the hero. Switched to `fixed`.
  2. `backdrop-blur` (a `filter`) was applied directly to the `<header>`
     element. Per spec, `filter`/`backdrop-filter` on an ancestor creates a
     new containing block for `position: fixed` descendants — which broke
     the mobile menu panel's full-viewport positioning (it was
     re-anchoring to the ~65px header box instead of the viewport). Moved
     the blur to an inner wrapper div, keeping `<header>` itself
     filter-free.

## Stage 4 — Homepage

- Built all 11 sections from brief Section 6 in order, establishing the
  alternating navy/white/grey rhythm the brief asks for ("alternating
  white, photographic, navy and light-grey sections") — dark sections used
  specifically for Vision, Development and the closing Partner CTA, per
  the brief's "dark sections: use for vision, partner CTAs and major
  transitions."
- Verified visually at desktop/tablet/mobile with Playwright screenshots
  (Chromium, pre-installed in this environment). One screenshot artifact
  worth noting for future QA: Playwright's `fullPage` screenshot resizes
  the viewport to the full document height in one jump rather than
  scrolling incrementally, so `framer-motion`'s `whileInView` reveals can
  appear not to have fired, and `position: sticky` elements can appear to
  render twice. Neither is a real bug — confirmed by scrolling normally
  instead of jumping. Scripted QA screenshots now scroll top-to-bottom in
  steps before capturing to avoid this.

## Stage 5 — Interior pages (About, Our Facility, Hydrogen)

- Built all three with their section navigators, using the shared
  components from Stage 3. The Hydrogen page's "Why Manitoba" section
  needed a 5-column card grid (the brief's grid was previously only 3/4);
  extended `CardGrid` to support it.
- Original stylized Manitoba map (`components/art/manitoba-map.tsx`) per
  the brief's explicit "Map instruction" — Winnipeg marker and
  north/south/east/west corridor lines only, no real geographic trace, no
  site-specific information.

## Stage 6 — News, article template, Contact

- News listing groups articles by category (H2MB News / Insights / Media),
  each with its own eyebrow/heading/dek from the brief, with a working
  All/H2MB News/Insights/Media filter (`news_filter_used` analytics event)
  layered on top — satisfies both the content brief (each category needs
  its own intro copy) and the functional requirement (Section 12: "News
  filtering by All, H2MB News, Insights and Media"). Media-category items
  have no on-site body — they redirect straight to `externalUrl` (a
  placeholder pending H2MB's real coverage links).
- Article template: category/date, H1, hero image (falls back to
  generated cover art when no real photo exists yet), typed rich-text
  body blocks (paragraph/heading/quote), share links (LinkedIn — no brand
  icon library shipped one, see below — and copy-link), related stories,
  closing Partner CTA.
- Contact page: partner pathway cards deep-link into the form with a
  preset topic via `?topic=…#contact`; contact form; location section
  (no facility address, per the brief).
- Two real bugs found and fixed while wiring the contact form end to end
  with Playwright:
  1. `lib/contact-form.ts` had `"use server"` at the top but also exported
     a plain object (`initialContactFormState`) and a type — Next.js
     rejects this at runtime ("A 'use server' file can only export async
     functions"). Split the state type/initial value into
     `lib/contact-form-state.ts`.
  2. `lucide-react` 1.39 dropped all brand icons (no `Linkedin` export
     anymore) — added a small original inline SVG glyph
     (`components/ui/linkedin-icon.tsx`) instead.
  Re-verified the full flow afterward: empty-submit validation errors,
  dry-run delivery logging (no `CONTACT_FORM_PROVIDER` configured yet),
  and the success state, all via a scripted Playwright run.

## Stage 7 — Privacy, Terms, 404

- Both legal pages are explicitly framed as structural placeholders (a
  visible "Placeholder document" notice, `robots: noindex`) rather than
  real legal copy — the brief requires legal/privacy review before launch,
  and inventing plausible-sounding legal text would work against that.
- Custom 404 reuses the homepage's dark hero treatment for visual
  consistency, with two exit CTAs.

## Stage 8 — Contact form validation (folded into Stage 6)

Client-side: native HTML5 `required`/`type="email"` constraints plus a
honeypot field and a minimum-fill-time check (spam protection, see
`lib/contact-form.ts`). Server-side: full re-validation of every field
(the source of truth — client constraints are a UX nicety, not the
security boundary), accessible field-level errors via `aria-describedby` +
`role="alert"`, and the exact success/error copy from the brief.

## Stage 9 — Analytics events (folded into Stages 3–6)

`lib/analytics.ts` is a single `trackEvent()` call site; swapping in a
real provider is a one-file change (currently wired for GA4's `gtag`, and
falls back to a console log in development when no
`NEXT_PUBLIC_ANALYTICS_ID` is set). All six events from brief Section 12
are wired: `cta_click` (every `Button` use), `partnership_pathway_selected`
and `contact_topic_selected`, `form_submit_success`, `news_filter_used`,
`article_view` (fires on article page mount), and `outbound_link_click`
(LinkedIn links, external media coverage links, share links).

## Stage 10 — SEO / technical

- Per-page titles/meta descriptions matching the brief's copy for every
  page; canonical URLs via `alternates.canonical`; OG/Twitter metadata
  (Next.js auto-populates `openGraph.title`/`description` from the page's
  own `title`/`description` when not overridden).
- `app/sitemap.ts` and `app/robots.ts` (Next.js file-convention routes —
  no manual XML/text templating).
- `app/icon.tsx` and `app/opengraph-image.tsx` generated programmatically
  via `next/og`'s `ImageResponse` — no binary asset files to manage, and
  they update automatically if the brand palette changes.
- `Organization` JSON-LD site-wide (root layout) and `NewsArticle`
  JSON-LD on the article template.

## Stage 11 — Accessibility pass

Ran an automated `axe-core` scan (via Playwright, against the production
build) across every page and template — home, all four interior pages,
news listing, an article, contact, both legal pages, and 404 — targeting
WCAG 2.0/2.2 A and AA rules. Found and fixed 2 real color-contrast
failures (both a muted grey label color landing under 4.5:1 against a
grey — not white — background; darkened to a token that clears AA on
every background it's actually used against) and 1 real focus-management
gap (content visually covered by the open mobile menu was still reachable
by keyboard/screen reader underneath it — fixed with `inert`). Re-ran
after each fix; the site now returns 0 violations across every page
scanned. Manually verified: one H1 per page, logical heading order,
visible focus rings (a single global `:focus-visible` rule, never
overridden), real alt text vs. `aria-hidden` on decorative art, accessible
form labels/errors, and that `prefers-reduced-motion` is respected (all
scroll-reveal animation is a non-blocking position shift only — content is
never rendered at `opacity: 0`, which also avoids a hydration mismatch
that existed in an earlier draft of `ProcessDiagram`).

## Stage 12 — Verification pass

- `npm run build`, `npm run typecheck` (`tsc --noEmit`) and `npm run lint`
  all clean.
- Fixed 2 real `eslint-plugin-react-hooks` errors surfaced during this
  pass (not stylistic — both were flagging genuine anti-patterns): the
  header's route-change menu-close was `setState` inside a `useEffect`
  keyed on `pathname`; rewrote it as a render-time comparison (React's
  documented pattern for deriving state from a changing value) instead.
  The contact form's anti-spam timestamp was a `ref` read during render
  (`renderedAtRef.current` used directly in JSX); replaced with
  `useState(() => Date.now())`.
- Responsive check at desktop/tablet/mobile for every page via scripted
  Playwright screenshots (this environment has no interactive browser, so
  screenshots are the verification method — see the artifact note under
  Stage 4 for the one capture quirk to know about).
- Re-checked brief Section 4's content rules against actual rendered copy
  (not just the plan) — grepped for invented specs/manufacturers/pricing,
  premature-completion language, superlatives, and a facility street
  address; none found. Also caught and fixed a real disclosure-rule gap on
  this pass: the placeholder contact email (`info@h2mb.ca`) and LinkedIn
  URL (`linkedin.com/company/h2mb`) were plausible-looking invented values
  a visitor could easily mistake for real, confirmed ones — exactly what
  Section 4 says not to do. Changed the email fallback to the brief's own
  bracketed-placeholder convention (`[APPROVED GENERAL EMAIL]`), rendered
  as plain text rather than a dead `mailto:` link, and changed the
  LinkedIn fallback to a keyword search link rather than a guessed company
  page slug that could point to the wrong (or someone else's) page.

## Stage 13 — Deploy prep & wrap-up

- `next.config.ts` needs no special setup for Vercel — no remote images,
  no custom headers/rewrites/redirects. No server-only code is imported
  into any client component (verified: `lib/contact-form.ts`'s
  `"use server"` action is the only place secret-bearing env vars like
  `RESEND_API_KEY` are read).
- `README.md` rewritten with real local-setup, environment-variable and
  `vercel deploy` instructions (see Stage 10 above for how `.env.example`
  maps to what each variable controls).

---

## Final summary

**What's built:** every page from the brief's sitemap (Home, About,
Our Facility, Hydrogen, News + filters, an article template, Contact,
Privacy, Terms, custom 404), all working navigation (including the
page-level anchor navigators), a validated contact form with topic
routing and spam protection, analytics event hooks for every event in
Section 12, full SEO/technical setup (sitemap, robots, OG/icon,
structured data), and a verified WCAG 2.2 AA accessibility pass — all
responsive at desktop/tablet/mobile and confirmed against a clean
`build`/`typecheck`/`lint`.

**Run it locally:** `npm install && npm run dev`, or see `README.md` for
the full setup and deploy steps.

**Still needs H2MB's approval or real assets before launch** (mirrors the
brief's Section 14 checklist):

- [ ] Leadership names, titles, biographies, headshots and LinkedIn links
      (currently 3 clearly bracketed placeholder profiles —
      `content/leadership.ts`)
- [ ] Which ecosystem-partner organizations may appear by logo, and the
      approved relationship wording (currently zero logos — the ecosystem
      section falls back to a category-label treatment;
      `content/ecosystem.ts`)
- [ ] Approved development-stage wording and status markers (currently
      placeholder statuses — `content/development-stages.ts`)
- [ ] Real public contact details: email, phone (if public), LinkedIn URL
      (currently render as bracketed placeholders / a LinkedIn search
      link — see `.env.example`)
- [ ] Contact-form delivery routing: pick Resend (email) or a webhook
      provider and supply the credentials (currently runs in a validated
      "dry run" mode — see `.env.example` and `lib/contact-form.ts`)
- [ ] Privacy Policy and Terms of Use legal copy and consent language,
      reviewed by legal/privacy counsel (currently structural placeholders,
      `noindex`ed — `app/privacy`, `app/terms`)
- [ ] Every factual claim reviewed once more against what's actually
      approved for disclosure — this build stayed inside the brief's
      language rules throughout, but H2MB should still sign off before
      launch
- [ ] Real photography/renderings, if H2MB wants to move off the original
      SVG art this build uses instead (see `public/images/README.md` for
      why, and the drop-in replacement path — this is optional, not a
      blocker, since the SVG art is brief-compliant as a permanent choice)
- [ ] News migration list: which of the 7 placeholder articles (if any)
      become real launch content, plus any legacy URLs to redirect
      (`content/news.ts`)
- [ ] SEO metadata and social-sharing images reviewed against final brand
      guidelines (currently generated programmatically in the brand
      palette — `app/opengraph-image.tsx`, `app/icon.tsx`)
- [ ] Browser testing beyond this build's Chromium-based verification
- [ ] Analytics provider selection and `NEXT_PUBLIC_ANALYTICS_ID`
      (currently wired for GA4's `gtag`, with a documented dry-run
      fallback if unset)
- [ ] CMS provider decision, if/when H2MB wants to move content management
      off local TypeScript files — see `docs/cms-notes.md` for the
      field-by-field migration mapping already prepared for this
- [ ] The exact H2MB brand green hex — the current accent
      (`--color-h2green-*` in `app/globals.css`) is a placeholder chosen to
      match the brief's direction, not a confirmed brand value
