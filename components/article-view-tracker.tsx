"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

export function ArticleViewTracker({ slug, category }: { slug: string; category: string }) {
  useEffect(() => {
    trackEvent({ name: "article_view", slug, category });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  return null;
}
