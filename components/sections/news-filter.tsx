"use client";

import { useState } from "react";
import type { NewsArticle, NewsCategory } from "@/content/types";
import { newsCategoryIntros } from "@/content/news";
import { NewsCard } from "@/components/sections/news-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/cn";

const filters: ("All" | NewsCategory)[] = ["All", "H2MB News", "Insights", "Media"];
const categoryOrder: NewsCategory[] = ["H2MB News", "Insights", "Media"];

export function NewsFilter({ articles }: { articles: NewsArticle[] }) {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const visibleCategories =
    active === "All" ? categoryOrder : categoryOrder.filter((c) => c === active);

  return (
    <div className="flex flex-col gap-16">
      <div role="tablist" aria-label="Filter news by category" className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            role="tab"
            aria-selected={active === filter}
            onClick={() => {
              setActive(filter);
              trackEvent({ name: "news_filter_used", filter });
            }}
            className={cn(
              "border px-5 py-2.5 text-xs font-semibold uppercase tracking-wide transition-colors",
              active === filter
                ? "border-navy-950 bg-navy-950 text-white"
                : "border-linegrey bg-white text-ink-700 hover:border-navy-950/40",
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      {visibleCategories.map((category) => {
        const categoryArticles = articles.filter((a) => a.category === category);
        if (categoryArticles.length === 0) return null;
        const intro = newsCategoryIntros[category];
        return (
          <div key={category} className="flex flex-col gap-10">
            <SectionHeading eyebrow={intro.eyebrow} title={intro.title} dek={intro.dek} />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {categoryArticles.map((article) => (
                <NewsCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
