# CMS migration notes

All editorial content currently lives as typed TypeScript modules under
`/content`. The shapes were chosen to map directly onto a headless CMS
collection, so migrating later means pointing the same components at a
fetch/query instead of a local import — not rewriting the page templates.

## Suggested collections

| `/content` module | Type | CMS collection | Notes |
| --- | --- | --- | --- |
| `content/news.ts` → `newsArticles` | `NewsArticle` | `newsArticle` | `category` becomes a select field (`H2MB News`/`Insights`/`Media`). `body` (an array of typed blocks) maps directly to a portable-text / rich-text field. `featured` becomes a boolean used by the homepage query instead of "most recent". |
| `content/leadership.ts` → `leadership` | `LeadershipProfile` | `person` | `headshot` becomes a CMS image asset; `isPlaceholder` drops once real photography is uploaded. |
| `content/ecosystem.ts` → `ecosystemPartners` | `EcosystemPartner` | `ecosystemPartner` | `approved` should stay a required boolean gate in the CMS too — never render an unapproved logo. |
| `content/development-stages.ts` → `developmentStages` | `DevelopmentStage` | `developmentStage` (singleton array) | `status` (`complete`/`active`/`upcoming`) is the field H2MB updates as Phase 1 progresses; keep it CMS-editable so no code deploy is needed to update progress. |
| `content/config.ts` | plain object | `siteSettings` (singleton) | Contact details, social links, footer nav, CTA label registry. |
| `content/contact.ts` | plain arrays | `siteSettings` fields | Contact-topic dropdown and partner-pathway cards; keep editable without a deploy since these drive form routing. |
| `content/applications.ts`, `content/manitoba-advantage.ts`, `content/facility.ts` | plain arrays | `siteSettings` fields or dedicated `pageSection` documents | Mostly static positioning copy; low priority to move off code, but shaped the same way for consistency. |

## Data-fetching seam

Every page/component currently imports directly from `/content/*.ts`. To
migrate:

1. Replace the module's exported functions (e.g. `getArticleBySlug`,
   `getFeaturedArticle`) with equivalent async functions that call the CMS
   client, keeping the same return types.
2. Because Next.js Server Components already `await` data, page files need
   no structural change beyond adding `await` in front of these calls.
3. Keep the TypeScript interfaces in `content/types.ts` as the contract —
   generate or hand-maintain matching CMS schema types so a mismatch fails
   at build time, not at runtime.

## Images

Files under `/public/images` are referenced by relative path today. A CMS
migration should move these to the CMS's asset pipeline (with responsive
image URLs) and update the `src` fields in the content modules — the
`ConceptualRenderingLabel` and caption/credit components already treat
`image.src` as an opaque URL, so this is a drop-in change.
