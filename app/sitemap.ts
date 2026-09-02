import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/config";
import { newsArticles } from "@/content/news";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const staticRoutes = [
    "",
    "/about",
    "/our-facility",
    "/hydrogen",
    "/news",
    "/contact",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));

  const articleRoutes = newsArticles
    .filter((a) => a.category !== "Media")
    .map((a) => ({
      url: `${base}/news/${a.slug}`,
      lastModified: new Date(a.date),
    }));

  return [...staticRoutes, ...articleRoutes];
}
