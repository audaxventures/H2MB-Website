import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { NewsArticle } from "@/content/types";
import { NewsCoverArt } from "@/components/ui/news-cover-art";
import { Eyebrow } from "@/components/ui/section-heading";

function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function FeaturedStory({ article }: { article: NewsArticle }) {
  return (
    <Link
      href={`/news/${article.slug}`}
      className="group grid grid-cols-1 overflow-hidden border border-linegrey bg-white md:grid-cols-2"
    >
      <div className="relative aspect-[16/10] w-full bg-navy-950 md:aspect-auto">
        {article.image.isPlaceholder ? (
          <NewsCoverArt slug={article.slug} category={article.category} className="h-full w-full" />
        ) : (
          <Image
            src={article.image.src}
            alt={article.image.alt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
            priority
          />
        )}
      </div>
      <div className="flex flex-col justify-center gap-5 p-8 md:p-12">
        <Eyebrow>Featured Story</Eyebrow>
        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-ink-500">
          <span>{article.category}</span>
          <span aria-hidden="true">&middot;</span>
          <time dateTime={article.date}>{formatDate(article.date)}</time>
        </div>
        <h2 className="font-display text-2xl md:text-3xl font-semibold leading-snug text-navy-950">
          {article.title}
        </h2>
        <p className="text-base leading-relaxed text-ink-700">{article.excerpt}</p>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-navy-950">
          Read More
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
