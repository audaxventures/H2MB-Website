"use client";

// Thin analytics wrapper (brief Section 12). Every tracked interaction in the
// app calls `trackEvent` below instead of talking to a provider directly, so
// swapping in a real analytics provider (GA4, Plausible, etc.) is a one-file
// change: replace the body of `sendToProvider`.

export type AnalyticsEvent =
  | { name: "cta_click"; label: string; href?: string }
  | { name: "partnership_pathway_selected"; pathway: string }
  | { name: "contact_topic_selected"; topic: string }
  | { name: "form_submit_success"; form: "contact" }
  | { name: "news_filter_used"; filter: string }
  | { name: "article_view"; slug: string; category: string }
  | { name: "outbound_link_click"; label: string; href: string };

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

function sendToProvider(event: AnalyticsEvent) {
  const analyticsId = process.env.NEXT_PUBLIC_ANALYTICS_ID;
  if (!analyticsId) {
    if (process.env.NODE_ENV === "development") {
      console.info("[analytics:dry-run]", event);
    }
    return;
  }

  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    const { name, ...params } = event;
    window.gtag("event", name, params);
  }
}

export function trackEvent(event: AnalyticsEvent) {
  sendToProvider(event);
}
