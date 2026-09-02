import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { SectionNav } from "@/components/ui/section-nav";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { CardGrid } from "@/components/sections/card-grid";
import { DevelopmentTimeline } from "@/components/sections/development-timeline";
import { PartnerCta } from "@/components/sections/partner-cta";
import { ProcessDiagram } from "@/components/diagrams/process-diagram";
import { ConceptualFacility } from "@/components/art/conceptual-facility";
import { ConceptualRenderingLabel } from "@/components/ui/conceptual-rendering-label";
import { ImageCaption } from "@/components/ui/image-caption";
import { ctaLabels } from "@/content/config";
import { facilityPhase1Capabilities, valueChainSteps, builtForGrowthStages } from "@/content/facility";
import { developmentStages } from "@/content/development-stages";

export const metadata: Metadata = {
  title: "Our Facility | H2MB Phase 1 Green Hydrogen Project",
  description:
    "Explore H2MB's proposed Phase 1 green hydrogen production and distribution facility in Winnipeg, Manitoba.",
  alternates: { canonical: "/our-facility" },
};

const sectionNavItems = [
  { id: "overview", label: "Overview" },
  { id: "phase-1", label: "Phase 1" },
  { id: "infrastructure", label: "Infrastructure" },
  { id: "development", label: "Development" },
  { id: "built-for-growth", label: "Built for Growth" },
];

export default function OurFacilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Phase 1 Green Hydrogen Facility"
        title="Where Manitoba's hydrogen future begins."
        dek="H2MB is developing Phase 1 of its green hydrogen production and distribution infrastructure in Winnipeg, Manitoba."
        art={<ConceptualFacility className="h-full w-full opacity-25" tone="dark" />}
      >
        <Button href="#phase-1" variant="primary" analyticsLabel={ctaLabels.explorePhase1}>
          {ctaLabels.explorePhase1}
        </Button>
      </PageHero>
      <SectionNav items={sectionNavItems} />

      <Section id="overview" background="white">
        <div className="flex flex-col gap-14">
          <SectionHeading
            eyebrow="Overview"
            title="From renewable electricity to usable energy."
            dek="The proposed Phase 1 facility is intended to bring key parts of the hydrogen value chain together in one integrated development. Renewable electricity and water support green hydrogen production, while storage, distribution and refuelling capabilities help connect that supply with future users."
          />
          <ProcessDiagram steps={valueChainSteps.map((label) => ({ label }))} tone="light" />
        </div>
      </Section>

      <Section id="phase-1" background="grey">
        <div className="flex flex-col gap-14">
          <SectionHeading
            eyebrow="Phase 1"
            title="Establishing the foundation."
            dek="Phase 1 represents the first stage of H2MB's broader infrastructure development strategy. The initial facility is intended to establish commercial green hydrogen production and distribution capability in Manitoba while creating a platform for future expansion as market demand develops."
          />
          <CardGrid items={facilityPhase1Capabilities} columns={4} />
        </div>
      </Section>

      <Section id="infrastructure" background="white">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center md:gap-16">
          <SectionHeading
            eyebrow="Infrastructure"
            title="An integrated hydrogen pathway."
            dek="H2MB's approach is focused on more than production alone. Phase 1 is being developed to connect production with the infrastructure required to store, distribute and dispense hydrogen, helping reduce the distance between clean energy supply and practical use."
          />
          <div>
            <div className="relative aspect-[4/3] w-full bg-navy-950">
              <ConceptualFacility className="h-full w-full" tone="dark" />
              <ConceptualRenderingLabel light />
            </div>
            <ImageCaption>
              Original stylized illustration of H2MB&rsquo;s intended production, storage and
              distribution pathway. Not an engineering site plan.
            </ImageCaption>
          </div>
        </div>
      </Section>

      <Section id="development" background="grey">
        <div className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Development"
            title="From concept to construction."
            dek="Energy infrastructure is developed through a deliberate sequence of planning, engineering, market development, procurement, construction and commissioning. H2MB is advancing the work required to move Phase 1 toward implementation."
          />
          <DevelopmentTimeline stages={developmentStages} tone="light" />
          <p className="border border-dashed border-navy-950/25 bg-white p-5 text-sm leading-relaxed text-ink-700">
            Before launch, H2MB must approve which stages receive completed, active or future
            status. Dates and milestones remain editable in{" "}
            <code className="text-xs">content/development-stages.ts</code>.
          </p>
        </div>
      </Section>

      <section id="built-for-growth" className="scroll-mt-32 bg-navy-950 py-20 text-white md:py-28">
        <div className="mx-auto flex w-full max-w-content flex-col gap-14 px-6 md:px-10">
          <SectionHeading
            light
            eyebrow="Built for Growth"
            title="Phase 1 is the foundation, not the destination."
            dek="Future development will be guided by customer requirements, market demand and the evolution of Manitoba's hydrogen ecosystem. H2MB's long-term strategy is to expand production and infrastructure as practical opportunities emerge."
          />
          <ProcessDiagram
            steps={builtForGrowthStages.map((s) => ({ label: s.title, description: s.description }))}
            tone="dark"
          />
        </div>
      </section>

      <PartnerCta
        eyebrow="Work With Us"
        title="Interested in future hydrogen supply, infrastructure or project collaboration?"
        dek="H2MB welcomes conversations with organizations evaluating how hydrogen could support their future operations or investment priorities."
      />
    </>
  );
}
