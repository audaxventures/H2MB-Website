import type { NewsArticle } from "./types";

// PLACEHOLDER NEWS CONTENT — demonstrates the News/Insights/Media system and
// filtering/article template end to end. Every item below must be reviewed,
// replaced or removed by H2MB before launch (see brief Section 14, "Confirm
// news migration list, redirects and legacy URL plan"). No item states a
// completed milestone, a date, cost or capacity beyond what the brief
// approves for public disclosure.
export const newsArticles: NewsArticle[] = [
  {
    slug: "advancing-planning-proposed-winnipeg-facility",
    category: "H2MB News",
    title: "H2MB Advances Planning for Its Proposed Winnipeg Facility",
    excerpt:
      "H2MB continues to advance the planning and development work behind its proposed Phase 1 green hydrogen facility in Winnipeg.",
    date: "2026-08-18",
    featured: true,
    image: {
      src: "/images/news/placeholder-planning.svg",
      alt: "Placeholder graphic representing H2MB development update coverage.",
      isPlaceholder: true,
    },
    body: [
      {
        type: "paragraph",
        text: "H2MB is continuing to advance the planning, engineering and market-development work required to move its proposed Phase 1 green hydrogen facility toward implementation in Winnipeg, Manitoba.",
      },
      {
        type: "paragraph",
        text: "The company's current focus spans site and preliminary engineering work, engagement with prospective industry and transportation partners, and the broader collaborative work needed to support a viable regional hydrogen market.",
      },
      {
        type: "heading",
        level: 2,
        text: "A deliberate, staged approach",
      },
      {
        type: "paragraph",
        text: "Consistent with H2MB's development-stage approach, the company is not disclosing detailed engineering, commercial or financing information publicly. As Phase 1 progresses through planning, engineering and procurement, H2MB will continue to share high-level updates on its progress.",
      },
      {
        type: "quote",
        text: "Phase 1 is intended to establish a foundation that can grow as customer needs, technology and the market evolve.",
      },
      {
        type: "paragraph",
        text: "H2MB welcomes conversations with organizations exploring hydrogen supply, transportation and industrial applications, strategic collaboration, investment and project development.",
      },
    ],
    relatedSlugs: [
      "broadening-engagement-manitoba-energy-ecosystem",
      "understanding-green-hydrogen-electrolysis",
    ],
  },
  {
    slug: "broadening-engagement-manitoba-energy-ecosystem",
    category: "H2MB News",
    title: "H2MB Broadens Engagement Across Manitoba's Energy Ecosystem",
    excerpt:
      "H2MB is deepening conversations with industry, transportation and government stakeholders as it advances its Phase 1 development work.",
    date: "2026-07-22",
    image: {
      src: "/images/news/placeholder-engagement.svg",
      alt: "Placeholder graphic representing H2MB stakeholder engagement coverage.",
      isPlaceholder: true,
    },
    body: [
      {
        type: "paragraph",
        text: "Developing a hydrogen economy requires collaboration across industry, transportation, government, academia, technology and capital. H2MB is working to bring those parts of Manitoba's ecosystem together as it advances Phase 1.",
      },
      {
        type: "paragraph",
        text: "Recent engagement has focused on understanding potential future demand from transportation, industrial and energy organizations, and on building relationships that can support the responsible development of a regional hydrogen market over time.",
      },
      {
        type: "paragraph",
        text: "H2MB expects to continue this engagement as Phase 1 progresses, and will share further updates on collaborations as they are formally confirmed.",
      },
    ],
    relatedSlugs: [
      "advancing-planning-proposed-winnipeg-facility",
      "hydrogen-heavy-transportation-fit",
    ],
  },
  {
    slug: "hydrogen-heavy-transportation-fit",
    category: "Insights",
    title: "What Makes Hydrogen a Practical Fit for Heavy Transportation",
    excerpt:
      "Payload, range and refuelling time can make hydrogen a compelling option for certain heavy-duty fleets. Here's how to think about the fit.",
    date: "2026-06-30",
    image: {
      src: "/images/news/placeholder-transportation.svg",
      alt: "Placeholder graphic representing an insights article on hydrogen and heavy transportation.",
      isPlaceholder: true,
    },
    body: [
      {
        type: "paragraph",
        text: "Direct electrification is a practical solution for a growing share of transportation. But for certain heavy-duty trucking, fleet and commercial applications, operational requirements can make hydrogen a compelling complement.",
      },
      {
        type: "heading",
        level: 2,
        text: "Where hydrogen tends to fit",
      },
      {
        type: "paragraph",
        text: "Hydrogen's potential advantage shows up most clearly where payload, range, utilization and refuelling time matter most. Fast refuelling and favourable weight-to-range characteristics can be significant for operators running heavy routes on tight schedules.",
      },
      {
        type: "paragraph",
        text: "The right solution ultimately depends on each operator's duty cycle, route profile and the availability of suitable regional supply and infrastructure — which is exactly the gap H2MB is working to help close in Manitoba.",
      },
      {
        type: "heading",
        level: 2,
        text: "Building supply and demand together",
      },
      {
        type: "paragraph",
        text: "Hydrogen markets face a connected challenge: fleets need confidence that supply and infrastructure will be available, and producers need confidence that demand will develop. Practical progress requires both sides advancing together.",
      },
    ],
    relatedSlugs: [
      "understanding-green-hydrogen-electrolysis",
      "broadening-engagement-manitoba-energy-ecosystem",
    ],
  },
  {
    slug: "understanding-green-hydrogen-electrolysis",
    category: "Insights",
    title: "Understanding Green Hydrogen: How Electrolysis Works",
    excerpt:
      "Not all hydrogen is produced the same way. Here's a plain-language look at how renewable electricity and water become green hydrogen.",
    date: "2026-06-05",
    image: {
      src: "/images/news/placeholder-electrolysis.svg",
      alt: "Placeholder graphic representing an insights article on green hydrogen production.",
      isPlaceholder: true,
    },
    body: [
      {
        type: "paragraph",
        text: "Hydrogen is an energy carrier that can be produced through different processes, and the process matters. Green hydrogen is made by using renewable electricity to separate water into hydrogen and oxygen through electrolysis.",
      },
      {
        type: "paragraph",
        text: "Traditional hydrogen production often relies on fossil fuels and may create significant greenhouse gas emissions. Green hydrogen production avoids fossil-fuel combustion in the production process by using renewable electricity and water instead.",
      },
      {
        type: "heading",
        level: 2,
        text: "From electricity to an energy carrier",
      },
      {
        type: "paragraph",
        text: "Once produced, green hydrogen can be stored, transported and used later in applications where it provides practical value — turning renewable electricity into an energy carrier that can move beyond the grid.",
      },
      {
        type: "paragraph",
        text: "That pathway — renewable electricity, electrolysis, storage and distribution — is the foundation of the infrastructure H2MB is developing in Manitoba.",
      },
    ],
    relatedSlugs: [
      "hydrogen-heavy-transportation-fit",
      "advancing-planning-proposed-winnipeg-facility",
    ],
  },
  {
    slug: "h2mb-featured-manitoba-hydrogen-coverage",
    category: "Media",
    title: "H2MB Featured in Coverage of Manitoba's Emerging Hydrogen Sector",
    excerpt:
      "H2MB was featured in third-party coverage discussing Manitoba's developing green hydrogen opportunity.",
    date: "2026-05-14",
    image: {
      src: "/images/news/placeholder-media-1.svg",
      alt: "Placeholder graphic representing third-party media coverage of H2MB.",
      isPlaceholder: true,
    },
    body: [],
    // PLACEHOLDER — replace with the real publication name and article URL.
    externalUrl: "https://example.com/placeholder-h2mb-media-coverage",
    externalSource: "[Publication Name — Pending]",
  },
  {
    slug: "h2mb-interview-manitoba-energy-outlook",
    category: "Media",
    title: "H2MB Joins Conversation on Manitoba's Energy Outlook",
    excerpt:
      "H2MB contributed perspective to a regional discussion on renewable electricity, transportation and the province's energy future.",
    date: "2026-04-02",
    image: {
      src: "/images/news/placeholder-media-2.svg",
      alt: "Placeholder graphic representing third-party media coverage of H2MB.",
      isPlaceholder: true,
    },
    body: [],
    // PLACEHOLDER — replace with the real outlet name and interview/article URL.
    externalUrl: "https://example.com/placeholder-h2mb-energy-outlook",
    externalSource: "[Outlet Name — Pending]",
  },
];

export function getArticleBySlug(slug: string) {
  return newsArticles.find((a) => a.slug === slug);
}

export function getFeaturedArticle() {
  return newsArticles.find((a) => a.featured) ?? newsArticles[0];
}

export function getRelatedArticles(article: NewsArticle) {
  if (!article.relatedSlugs?.length) return [];
  return article.relatedSlugs
    .map((slug) => getArticleBySlug(slug))
    .filter((a): a is NewsArticle => Boolean(a));
}
