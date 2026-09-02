import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Zap, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading, Eyebrow } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { CardGrid } from "@/components/sections/card-grid";
import { ProcessDiagram } from "@/components/diagrams/process-diagram";
import { DevelopmentTimeline } from "@/components/sections/development-timeline";
import { EcosystemDisplay } from "@/components/sections/ecosystem-section";
import { NewsCard } from "@/components/sections/news-card";
import { PartnerCta } from "@/components/sections/partner-cta";
import { GridPattern } from "@/components/art/grid-pattern";
import { ConceptualRenderingLabel } from "@/components/ui/conceptual-rendering-label";
import { ImageCaption } from "@/components/ui/image-caption";
import { ctaLabels } from "@/content/config";
import { homeFacilityCapabilities, homeProcessSteps } from "@/content/facility";
import { homeAdvantagePoints } from "@/content/manitoba-advantage";
import { applicationCategories } from "@/content/applications";
import { developmentStages } from "@/content/development-stages";
import { newsArticles } from "@/content/news";

export const metadata: Metadata = {
  title: "Building Manitoba's Green Hydrogen Future",
  description:
    "H2MB is developing green hydrogen production and distribution infrastructure in Manitoba, beginning with a proposed Phase 1 facility in Winnipeg.",
  alternates: { canonical: "/" },
};

const visionStages = [
  { label: "Phase 1", description: "Establish initial production and distribution infrastructure." },
  { label: "Grow", description: "Expand capacity and capabilities alongside customer demand." },
  {
    label: "Scale",
    description: "Support a broader hydrogen economy across Manitoba and the Canadian Prairies.",
  },
];

const aboutPillars = [
  {
    icon: MapPin,
    title: "Manitoba Born.",
    description: "Founded in Manitoba with a commitment to developing opportunity at home.",
  },
  {
    icon: Zap,
    title: "Energy Focused.",
    description:
      "Focused on practical infrastructure that connects clean energy supply with real-world demand.",
  },
  {
    icon: TrendingUp,
    title: "Built for the Future.",
    description: "Beginning with Phase 1 and designed to grow as Manitoba's hydrogen market develops.",
  },
];

export default function Home() {
  const latestNews = newsArticles.slice(0, 3);

  return (
    <>
      {/* Section 1 — Hero */}
      <section className="relative overflow-hidden bg-white pt-28 pb-16 md:pt-36 md:pb-24">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-10">
          <div>
            <Eyebrow className="mb-5">H2MB</Eyebrow>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold uppercase leading-[1.05] tracking-tight text-balance">
              <span className="text-navy-950">Building Manitoba&rsquo;s </span>
              <span className="text-h2green-600">Green Hydrogen Future.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base md:text-lg leading-relaxed text-ink-700">
              H2MB is developing green hydrogen production and distribution infrastructure in
              Manitoba, beginning with our proposed Phase 1 facility in Winnipeg.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/our-facility" variant="primary" analyticsLabel={ctaLabels.exploreFacility}>
                {ctaLabels.exploreFacility}
              </Button>
              <Button href="/about" variant="secondary" analyticsLabel={ctaLabels.aboutH2mb}>
                {ctaLabels.aboutH2mb}
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl sm:aspect-[16/11]">
              <Image
                src="/images/homepagehero.png"
                alt="Conceptual rendering of green hydrogen production and storage infrastructure on the Manitoba prairie. This image does not depict an existing or operating H2MB facility."
                fill
                priority
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
              <ConceptualRenderingLabel />
            </div>
            <ImageCaption>
              Conceptual illustration of green hydrogen production, storage and distribution
              infrastructure — not a photo of an existing or operating H2MB facility.
            </ImageCaption>
          </div>
        </Container>
      </section>

      {/* Section 2 — About H2MB */}
      <Section background="white">
        <div className="flex flex-col gap-14">
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="About H2MB"
              title="Building the infrastructure for Manitoba's hydrogen economy."
              dek="H2MB is a Manitoba-based energy company focused on advancing green hydrogen production, storage and distribution infrastructure. Our work is grounded in a long-term vision: helping make locally produced hydrogen a practical part of Manitoba's evolving energy, transportation and industrial future."
            />
            <Button href="/about" variant="secondary" analyticsLabel={ctaLabels.discoverH2mb} className="shrink-0">
              {ctaLabels.discoverH2mb}
            </Button>
          </div>
          <CardGrid items={aboutPillars} columns={3} />
        </div>
      </Section>

      {/* Section 3 — Phase 1 Facility */}
      <Section background="grey">
        <div className="flex flex-col gap-14">
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Our Facility"
              title="It starts with Phase 1."
              dek="H2MB's proposed Phase 1 facility is being developed to establish initial green hydrogen production and distribution infrastructure in Winnipeg. It is intended to create a practical foundation for serving emerging demand and supporting future growth across Manitoba and the Prairies."
            />
            <Button href="/our-facility" variant="secondary" analyticsLabel={ctaLabels.explorePhase1} className="shrink-0">
              {ctaLabels.explorePhase1}
            </Button>
          </div>
          <CardGrid items={homeFacilityCapabilities} columns={4} />
        </div>
      </Section>

      {/* Section 4 — Bigger Vision */}
      <section className="relative overflow-hidden bg-navy-950 py-20 md:py-28 text-white">
        <GridPattern className="absolute inset-0 h-full w-full text-white/15" />
        <Container className="relative flex flex-col gap-14">
          <SectionHeading
            light
            eyebrow="Our Vision"
            title="Phase 1 is just the beginning."
            dek="H2MB's long-term vision extends beyond a single facility. Phase 1 is intended to establish a foundation that can grow as customers adopt hydrogen, new applications emerge and Manitoba's hydrogen ecosystem develops."
          />
          <ProcessDiagram steps={visionStages} tone="dark" />
        </Container>
      </section>

      {/* Section 5 — Manitoba Advantage */}
      <Section background="white">
        <div className="flex flex-col gap-14">
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="The Manitoba Advantage"
              title="The right energy. The right location. The right opportunity."
              dek="Manitoba combines renewable electricity, a central continental location, a strong transportation sector and a diverse industrial economy. Together, these strengths create a compelling foundation for the responsible development of green hydrogen."
            />
            <Button
              href="/about#why-manitoba"
              variant="secondary"
              analyticsLabel={ctaLabels.whyManitoba}
              className="shrink-0"
            >
              {ctaLabels.whyManitoba}
            </Button>
          </div>
          <CardGrid items={homeAdvantagePoints} columns={4} />
        </div>
      </Section>

      {/* Section 6 — Hydrogen Process */}
      <Section background="grey">
        <div className="flex flex-col gap-14">
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="From Renewable Power to Real-World Energy"
              title="A simple pathway from electricity to hydrogen use."
              dek="Green hydrogen converts renewable electricity and water into a versatile energy carrier that can be stored, transported and used in applications where it provides practical value."
            />
            <Button href="/hydrogen" variant="secondary" analyticsLabel={ctaLabels.exploreHydrogen} className="shrink-0">
              {ctaLabels.exploreHydrogen}
            </Button>
          </div>
          <ProcessDiagram steps={homeProcessSteps.map((label) => ({ label }))} tone="light" />
        </div>
      </Section>

      {/* Section 7 — Applications */}
      <Section background="white">
        <div className="flex flex-col gap-14">
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Hydrogen Applications"
              title="Energy for applications that can be difficult to electrify."
              dek="Hydrogen has the potential to complement direct electrification across select transportation, power, industrial and emerging applications. H2MB is focused on helping connect future supply with practical regional demand."
            />
            <Button
              href="/hydrogen#applications"
              variant="secondary"
              analyticsLabel={ctaLabels.exploreApplications}
              className="shrink-0"
            >
              {ctaLabels.exploreApplications}
            </Button>
          </div>
          <CardGrid items={applicationCategories} columns={4} />
        </div>
      </Section>

      {/* Section 8 — Development */}
      <section className="bg-navy-950 py-20 md:py-28 text-white">
        <Container className="flex flex-col gap-14">
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              light
              eyebrow="Development"
              title="Moving from vision to infrastructure."
              dek="H2MB is advancing the technical, commercial and collaborative work required to develop Phase 1 responsibly. Progress is being built through planning, engineering, market development and engagement across Manitoba's energy and transportation ecosystem."
            />
            <Button
              href="/our-facility#development"
              variant="ghost-light"
              analyticsLabel={ctaLabels.ourDevelopment}
              className="shrink-0"
            >
              {ctaLabels.ourDevelopment}
            </Button>
          </div>
          <DevelopmentTimeline stages={developmentStages} tone="dark" />
        </Container>
      </section>

      {/* Section 9 — Ecosystem */}
      <Section background="grey">
        <div className="flex flex-col gap-10">
          <SectionHeading
            align="center"
            eyebrow="Collaboration"
            title="Building Manitoba's hydrogen economy together."
            dek="Developing a hydrogen economy requires collaboration across industry, transportation, government, academia, technology, infrastructure and investment. H2MB is working to help bring those parts of the ecosystem together."
          />
          <EcosystemDisplay />
        </div>
      </Section>

      {/* Section 10 — News */}
      <Section background="white">
        <div className="flex flex-col gap-14">
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Latest From H2MB"
              title="News & Insights"
              dek="Follow H2MB's development, perspectives on the evolving hydrogen economy and coverage of our work in Manitoba."
            />
            <Button href="/news" variant="secondary" analyticsLabel={ctaLabels.viewAllNews} className="shrink-0">
              {ctaLabels.viewAllNews}
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latestNews.map((article) => (
              <NewsCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </Section>

      {/* Section 11 — Partner CTA */}
      <PartnerCta />
    </>
  );
}
