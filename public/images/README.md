# Image assets — structure and status

## Real assets currently in this folder

| File | Used for | Notes |
| --- | --- | --- |
| `logo.png` | Header logo, Open Graph image | Real H2MB brand mark. Design tokens in `app/globals.css` (`--color-navy-*`, `--color-h2green-*`) are derived from this file's actual pixel colors — see `docs/build-log.md`. |
| `favicon.png` | Browser tab icon / apple touch icon (`app/layout.tsx` → `metadata.icons`) | Real H2MB icon mark. |
| `homepagehero.png` | Homepage hero image (`app/page.tsx`) | A photorealistic image showing hydrogen storage/production equipment. Per the brief's imagery policy (Section 4), a "Conceptual rendering" label and non-misleading alt text/caption are applied wherever it's used — this is a deliberate compliance step layered on top of the provided asset, not something to remove without confirming the underlying photo's real status (stock vs. an actual approved H2MB rendering) with H2MB. |

## Why the rest of this folder is otherwise empty

The brief's imagery policy (Section 4) prohibits third-party facility
photography, AI-generated "technical" imagery, and photorealistic imagery
that could blur the line between a conceptual project and a completed
facility. Beyond the three real assets above, no other licensed
Manitoba/Winnipeg photography or approved H2MB photography exists yet, and
sourcing stock photography without a confirmed licence would risk exactly
the misrepresentation the brief warns against.

So instead of placeholder stock photos, **the remaining hero art, the
conceptual facility rendering, the Manitoba map and the process/value-chain
diagrams are built as original inline SVG components** under
`/components/art` and `/components/diagrams`. They are abstract line-work
in the brand navy/green/grey palette — never a literal, technically-detailed
depiction of equipment — and every "facility" visual carries a visible
"Conceptual rendering" label per the brief. This is a deliberate,
brief-compliant choice, not a placeholder shortcut, and it can stay in
production indefinitely. It also means these visuals have zero
network/image weight and no licensing risk.

News cover art and leadership headshots use the same approach at a smaller
scale: `components/ui/news-cover-art.tsx` and
`components/ui/avatar-placeholder.tsx` render deterministic generated
graphics from an article slug / person's initials whenever the underlying
content record is flagged `isPlaceholder: true`.

## When more real photography becomes available

Swapping in real assets is a drop-in replacement, not a rebuild:

1. Add the approved file to the relevant folder below.
2. In the matching `/content/*.ts` record, set the `image.src` (or
   `headshot.src`) field to the new path and remove `isPlaceholder: true`.
3. The News card, article template and Leadership section already render a
   real `next/image` whenever `isPlaceholder` is absent/false — no
   component changes needed.
4. For hero/diagram art, replace the relevant component in
   `/components/art` with a real `next/image`-based version, or keep the
   illustration as permanent brand art — both are supported patterns in
   this codebase.

## Folder structure

| Folder | Purpose | Status |
| --- | --- | --- |
| `/public/images/facility` | Real Phase 1 conceptual renderings / approved facility-adjacent imagery, once available. | Empty — currently replaced by `components/art/conceptual-facility.tsx`. |
| `/public/images/manitoba` | Manitoba/Winnipeg landscape and transportation-corridor photography. | Empty — currently replaced by `components/art/prairie-horizon.tsx`. |
| `/public/images/leadership` | Approved leadership headshots. | Empty — currently replaced by `components/ui/avatar-placeholder.tsx`. |
| `/public/images/ecosystem` | Approved ecosystem-partner logos (only ones H2MB has approved for display — see `content/ecosystem.ts`). | Empty. |
| `/public/images/news` | Story-specific photography or approved media assets for articles. | Empty — currently replaced by `components/ui/news-cover-art.tsx`. |
| `/public/images/og` | Static Open Graph fallback images, if a designed static image ever replaces the generated one (`app/opengraph-image.tsx`, which embeds `logo.png` directly). | Empty. |

## Alt text and captions

Every image-bearing component in this codebase takes an explicit `alt`
prop and, for conceptual renderings, a caption via
`components/ui/image-caption.tsx`. When real photography is added, write
alt text that describes the image plainly and never implies an operating
facility (see brief Section 4 for the required phrasing pattern).
