"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { NewsArticle } from "@/content/types";
import { NewsCoverArt } from "@/components/ui/news-cover-art";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/cn";

function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function NewsCard({ article, featured = false }: { article: NewsArticle; featured?: boolean }) {
  const isMedia = article.category === "Media";
  const href = isMedia ? article.externalUrl! : `/news/${article.slug}`;
  const external = isMedia;

  const content = (
    <>
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-navy-950">
        {article.image.isPlaceholder ? (
          <NewsCoverArt slug={article.slug} category={article.category} className="h-full w-full" />
        ) : (
          <Image
            src={article.image.src}
            alt={article.image.alt}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover"
          />
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-h2green-600">
          <span>{article.category}</span>
          <span className="text-ink-500/50" aria-hidden="true">
            &middot;
          </span>
          <time dateTime={article.date} className="text-ink-500 font-medium normal-case tracking-normal">
            {formatDate(article.date)}
          </time>
        </div>
        <h3
          className={cn(
            "font-display font-semibold text-navy-950 leading-snug",
            featured ? "text-2xl md:text-3xl" : "text-lg",
          )}
        >
          {article.title}
        </h3>
        <p className="text-sm leading-relaxed text-ink-700">{article.excerpt}</p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold uppercase tracking-wide text-navy-950">
          {isMedia ? "Read Coverage" : "Read More"}
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </span>
      </div>
    </>
  );

  const className =
    "group flex h-full flex-col overflow-hidden rounded-xl border border-linegrey bg-white transition-shadow hover:shadow-[0_8px_30px_rgba(15,28,46,0.08)]";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={() =>
          trackEvent({ name: "outbound_link_click", label: article.title, href: href! })
        }
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}
