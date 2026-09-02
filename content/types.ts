// Shared content types. Field shapes are intentionally close to what a
// headless CMS (e.g. Sanity/Contentful) would model, so migrating later is a
// data-source swap rather than a schema rewrite. See docs/cms-notes.md.

export type NewsCategory = "H2MB News" | "Insights" | "Media";

export interface NewsArticle {
  slug: string;
  category: NewsCategory;
  title: string;
  excerpt: string;
  /** ISO date string */
  date: string;
  featured?: boolean;
  image: {
    src: string;
    alt: string;
    isPlaceholder?: boolean;
  };
  /** Rendered body content, paragraphs of HTML-safe plain text / simple markup blocks. */
  body: ArticleBlock[];
  pullQuote?: string;
  /** For Media category: link out to third-party coverage instead of an on-site body. */
  externalUrl?: string;
  externalSource?: string;
  relatedSlugs?: string[];
}

export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "quote"; text: string };

export interface LeadershipProfile {
  slug: string;
  name: string;
  title: string;
  bio: string;
  linkedinUrl?: string;
  headshot: {
    src: string;
    alt: string;
    isPlaceholder?: boolean;
  };
}

export type EcosystemCategory =
  | "Industry"
  | "Transportation"
  | "Government"
  | "Academia"
  | "Technology"
  | "Investment";

export interface EcosystemPartner {
  name: string;
  category: EcosystemCategory;
  logo: {
    src: string;
    alt: string;
  };
  approved: boolean;
}

export interface DevelopmentStage {
  id: string;
  index: string;
  label: string;
  description: string;
  status: "complete" | "active" | "upcoming";
}
