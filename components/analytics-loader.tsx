import Script from "next/script";

/**
 * Loads the analytics provider script only when NEXT_PUBLIC_ANALYTICS_ID is
 * configured (see .env.example / lib/analytics.ts). Renders nothing
 * otherwise, so the site works fully with analytics disabled.
 */
export function AnalyticsLoader() {
  const id = process.env.NEXT_PUBLIC_ANALYTICS_ID;
  if (!id) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive" />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${id}');
        `}
      </Script>
    </>
  );
}
