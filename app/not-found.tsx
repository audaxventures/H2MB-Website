import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { PrairieHorizon } from "@/components/art/prairie-horizon";
import { ctaLabels } from "@/content/config";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-navy-950 pt-24 text-white">
      <PrairieHorizon className="absolute inset-0 h-full w-full opacity-50" />
      <Container className="relative">
        <div className="max-w-xl">
          <Eyebrow light className="mb-5">
            404
          </Eyebrow>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold uppercase leading-[1.05] tracking-tight text-balance">
            This page isn&rsquo;t part of the map yet.
          </h1>
          <p className="mt-7 max-w-md text-base md:text-lg leading-relaxed text-white/80">
            The page you&rsquo;re looking for may have moved or doesn&rsquo;t exist. Here are a few
            places to pick back up.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/" variant="primary" analyticsLabel="404 — Home">
              Back to Home
            </Button>
            <Button href="/our-facility" variant="ghost-light" analyticsLabel="404 — Explore Facility">
              {ctaLabels.exploreFacility}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
