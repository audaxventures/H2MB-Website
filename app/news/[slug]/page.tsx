import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { NewsCoverArt } from "@/components/ui/news-cover-art";
import { ArticleBody } from "@/components/sections/article-body";
import { ShareLinks } from "@/components/sections/share-links";
import { NewsCard } from "@/components/sections/news-card";
import { PartnerCta } from "@/components/sections/partner-cta";
import { ArticleViewTracker } from "@/components/article-view-tracker";
import { newsArticles, getArticleBySlug, getRelatedArticles } from "@/content/news";
import { siteConfig } from "@/content/config";

export function generateStaticParams() {
  return newsArticles.filter((a) => a.category !== "Media").map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/news/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      publishedTime: article.date,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();
  if (article.category === "Media" && article.externalUrl) {
    redirect(article.externalUrl);
  }

  const related = getRelatedArticles(article);
  const articleUrl = `${siteConfig.url}/news/${article.slug}`;

  return (
    <>
      <ArticleViewTracker slug={article.slug} category={article.category} />
      <Section background="white" className="pt-32 md:pt-40">
        <Container className="max-w-3xl">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-h2green-600">
            <span>{article.category}</span>
            <span className="text-ink-500/50" aria-hidden="true">
              &middot;
            </span>
            <time dateTime={article.date} className="text-ink-500 font-medium normal-case tracking-normal">
              {formatDate(article.date)}
            </time>
          </div>
          <h1 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.1] text-navy-950 text-balance">
            {article.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-700">{article.excerpt}</p>
        </Container>
      </Section>

      <Container className="max-w-4xl">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-navy-950">
          {article.image.isPlaceholder ? (
            <NewsCoverArt slug={article.slug} category={article.category} className="h-full w-full" />
          ) : (
            <Image
              src={article.image.src}
              alt={article.image.alt}
              fill
              sizes="(min-width: 1024px) 900px, 100vw"
              className="object-cover"
              priority
            />
          )}
        </div>
      </Container>

      <Section background="white">
        <Container className="max-w-3xl">
          <ArticleBody blocks={article.body} />
          <div className="mt-10 border-t border-linegrey pt-8">
            <ShareLinks url={articleUrl} title={article.title} />
          </div>
        </Container>
      </Section>

      {related.length > 0 && (
        <Section background="grey">
          <Container>
            <h2 className="mb-8 font-display text-2xl font-semibold text-navy-950">Related Stories</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <NewsCard key={r.slug} article={r} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      <PartnerCta />
    </>
  );
}
