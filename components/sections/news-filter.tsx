"use client";

import { useMemo, useState } from "react";
import type { NewsArticle, NewsCategory } from "@/content/types";
import { NewsCard } from "@/components/sections/news-card";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/cn";

const filters: ("All" | NewsCategory)[] = ["All", "H2MB News", "Insights", "Media"];

export function NewsFilter({ articles }: { articles: NewsArticle[] }) {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const filtered = useMemo(
    () => (active === "All" ? articles : articles.filter((a) => a.category === active)),
    [active, articles],
  );

  return (
    <div className="flex flex-col gap-10">
      <div
        role="tablist"
        aria-label="Filter news by category"
        className="flex flex-wrap gap-2"
      >
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

      {filtered.length === 0 ? (
        <p className="text-sm text-ink-500">No articles in this category yet.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article) => (
            <NewsCard key={article.slug} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}
