import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { SectionNav } from "@/components/ui/section-nav";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { CardGrid } from "@/components/sections/card-grid";
import { IconCard } from "@/components/ui/icon-card";
import { PartnerCta } from "@/components/sections/partner-cta";
import { ProcessDiagram } from "@/components/diagrams/process-diagram";
import { OpportunityDiagram } from "@/components/diagrams/opportunity-diagram";
import { ManitobaMap } from "@/components/art/manitoba-map";
import { GridPattern } from "@/components/art/grid-pattern";
import { ctaLabels } from "@/content/config";
import { hydrogenAdvantagePoints } from "@/content/manitoba-advantage";
import { applicationDetails } from "@/content/applications";

export const metadata: Metadata = {
  title: "Green Hydrogen in Manitoba | H2MB",
  description:
    "Learn how green hydrogen is produced, why Manitoba has an advantage and where hydrogen may support transportation, power and industry.",
  alternates: { canonical: "/hydrogen" },
};

const sectionNavItems = [
  { id: "green-hydrogen", label: "Green Hydrogen" },
  { id: "how-it-works", label: "How It Works" },
  { id: "why-manitoba", label: "Why Manitoba" },
  { id: "applications", label: "Applications" },
  { id: "opportunity", label: "Opportunity" },
];

const howItWorksSteps = [
  { label: "Renewable electricity" },
  { label: "Water is separated through electrolysis" },
  { label: "Green hydrogen is produced" },
  { label: "Hydrogen is stored and distributed" },
  { label: "Energy is delivered to suitable end uses" },
];

export default function HydrogenPage() {
  return (
    <>
      <PageHero
        eyebrow="Green Hydrogen"
        title="A versatile energy solution for a changing world."
        dek="Green hydrogen can complement direct electrification in applications where weight, range, operating requirements or industrial processes make other low-carbon solutions difficult."
      >
        <Button href="#how-it-works" variant="primary" analyticsLabel={ctaLabels.howGreenHydrogenWorks}>
          {ctaLabels.howGreenHydrogenWorks}
        </Button>
      </PageHero>
      <SectionNav items={sectionNavItems} />

      <Section id="green-hydrogen" background="white">
        <div className="flex flex-col gap-14">
          <SectionHeading
            eyebrow="Green Hydrogen"
            title="Not all hydrogen is produced the same way."
            dek="Hydrogen is an energy carrier that can be produced through different processes. Green hydrogen is made by using renewable electricity to separate water into hydrogen and oxygen through electrolysis. When produced this way, it can offer a low-carbon energy pathway for suitable applications."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-3 border border-linegrey bg-coolgrey p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink-700">
                Traditional Hydrogen Production
              </p>
              <p className="text-base leading-relaxed text-ink-700">
                Often relies on fossil fuels and may create significant greenhouse gas emissions.
              </p>
            </div>
            <div className="flex flex-col gap-3 border border-h2green-600/30 bg-h2green-50 p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-h2green-600">
                Green Hydrogen Production
              </p>
              <p className="text-base leading-relaxed text-ink-700">
                Uses renewable electricity and water through electrolysis, avoiding fossil-fuel
                combustion in the production process.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="how-it-works" background="grey">
        <div className="flex flex-col gap-14">
          <SectionHeading
            eyebrow="How It Works"
            title="From renewable electricity to energy where it is needed."
            dek="Green hydrogen creates a way to convert renewable electricity into an energy carrier that can be stored, transported and used later."
          />
          <ProcessDiagram steps={howItWorksSteps} tone="light" numbered />
        </div>
      </Section>

      <Section id="why-manitoba" background="white">
        <div className="flex flex-col gap-14">
          <SectionHeading
            eyebrow="The Manitoba Advantage"
            title="A natural foundation for green hydrogen."
            dek="Manitoba brings together several conditions that can support the development of a regional hydrogen economy."
          />
          <CardGrid items={hydrogenAdvantagePoints} columns={5} />
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
            <ManitobaMap className="mx-auto h-auto w-full max-w-md" />
            <p className="text-sm leading-relaxed text-ink-500">
              Stylized map showing Winnipeg and general corridor connections only. This is an
              original illustration, not a technical or site-specific map, and does not disclose
              confidential site information or overstate access to infrastructure.
            </p>
          </div>
        </div>
      </Section>

      <Section id="applications" background="grey">
        <div className="flex flex-col gap-14">
          <SectionHeading
            eyebrow="Hydrogen Applications"
            title="Where hydrogen could provide practical value."
            dek="Hydrogen is not the answer for every energy use. Its strongest potential is in applications where direct electrification is difficult, operational requirements are demanding or hydrogen is needed as a feedstock."
          />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {applicationDetails.map((app) => (
              <IconCard
                key={app.id}
                icon={app.icon}
                title={app.title}
                description={app.description}
                tone="light"
              />
            ))}
          </div>
        </div>
      </Section>

      <section id="opportunity" className="relative scroll-mt-32 overflow-hidden bg-navy-950 py-20 text-white md:py-28">
        <GridPattern className="absolute inset-0 h-full w-full text-white/15" />
        <div className="relative mx-auto flex w-full max-w-content flex-col gap-14 px-6 md:px-10">
          <SectionHeading
            light
            eyebrow="The Opportunity"
            title="Building supply and demand together."
            dek="Hydrogen markets face a connected challenge: users need confidence that supply and infrastructure will be available, while producers need confidence that demand will develop. H2MB's role is to help connect these parts of the market and support responsible growth over time."
          />
          <OpportunityDiagram />
        </div>
      </section>

      <PartnerCta
        eyebrow="Start a Conversation"
        title="Exploring hydrogen for your organization?"
        dek="Whether you are considering future supply, fleet adoption, industrial applications, energy systems or another use, H2MB would welcome the opportunity to learn more."
        ctaLabel={ctaLabels.startConversation}
      />
    </>
  );
}
