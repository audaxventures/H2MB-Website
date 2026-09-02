import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { FeaturedStory } from "@/components/sections/featured-story";
import { NewsFilter } from "@/components/sections/news-filter";
import { newsArticles, getFeaturedArticle } from "@/content/news";

export const metadata: Metadata = {
  title: "H2MB News & Insights",
  description:
    "Read H2MB company updates, insights on green hydrogen and media coverage from Manitoba and beyond.",
  alternates: { canonical: "/news" },
};

export default function NewsPage() {
  const featured = getFeaturedArticle();

  return (
    <>
      <PageHero
        eyebrow="News & Insights"
        title="News, perspectives and progress."
        dek="Updates from H2MB, perspectives on the evolving hydrogen economy and coverage of our work across Manitoba."
      />

      <Section background="white">
        <FeaturedStory article={featured} />
      </Section>

      <Section background="grey">
        <NewsFilter articles={newsArticles} />
      </Section>
    </>
  );
}
