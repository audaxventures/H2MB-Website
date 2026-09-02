import type { Metadata } from "next";
import { Inter, Archivo } from "next/font/google";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { AnalyticsLoader } from "@/components/analytics-loader";
import { JsonLd } from "@/components/json-ld";
import { siteConfig, socialLinks } from "@/content/config";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name + " | Building Manitoba's Green Hydrogen Future",
    template: "%s | H2MB",
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    url: siteConfig.url,
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${archivo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-warmwhite text-ink-900">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: siteConfig.name,
            legalName: "H2MB Inc.",
            url: siteConfig.url,
            description: siteConfig.description,
            sameAs: [socialLinks.linkedin],
          }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-h2green-600 focus:text-white focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <AnalyticsLoader />
      </body>
    </html>
  );
}
