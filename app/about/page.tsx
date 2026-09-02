import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { SectionNav } from "@/components/ui/section-nav";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { LeadershipGrid } from "@/components/sections/leadership-grid";
import { EcosystemDisplay } from "@/components/sections/ecosystem-section";
import { PartnerCta } from "@/components/sections/partner-cta";
import { PrairieHorizon } from "@/components/art/prairie-horizon";
import { ctaLabels } from "@/content/config";

export const metadata: Metadata = {
  title: "About H2MB | Manitoba Green Hydrogen Infrastructure",
  description:
    "Learn about H2MB, our Manitoba roots, our mission and our vision for a growing green hydrogen economy.",
  alternates: { canonical: "/about" },
};

const sectionNavItems = [
  { id: "our-company", label: "Our Company" },
  { id: "mission-vision", label: "Mission & Vision" },
  { id: "why-manitoba", label: "Why Manitoba" },
  { id: "leadership", label: "Leadership" },
  { id: "ecosystem", label: "Ecosystem" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About H2MB"
        title="Building a new energy future from Manitoba."
        dek="H2MB is a Manitoba-based energy company developing green hydrogen infrastructure to support the province's evolving energy, transportation and industrial needs."
        art={<PrairieHorizon className="h-full w-full opacity-60" />}
      />
      <SectionNav items={sectionNavItems} />

      <Section id="our-company" background="white">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,340px)_1fr] md:gap-16">
          <SectionHeading eyebrow="Our Company" title="Built in Manitoba. Focused on what comes next." />
          <div className="flex max-w-2xl flex-col gap-5 text-base leading-relaxed text-ink-700">
            <p>
              H2MB was founded with the belief that Manitoba can play a meaningful role in the
              transition toward lower-carbon, more resilient energy systems. The province has
              renewable electricity, a central transportation network and a strong base of
              industries that could benefit from practical hydrogen solutions.
            </p>
            <p>
              H2MB is working to turn that opportunity into infrastructure. Beginning with a
              proposed Phase 1 facility in Winnipeg, our focus is to develop the production,
              storage, distribution and refuelling capabilities needed to connect green hydrogen
              supply with emerging regional demand.
            </p>
            <p>
              We are taking a long-term approach. Phase 1 is intended to establish a foundation
              that can grow as customer needs, technology and the market evolve.
            </p>
          </div>
        </div>
      </Section>

      <Section id="mission-vision" background="grey">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-4 rounded-xl border border-linegrey bg-white p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-h2green-600">
              Our Mission
            </p>
            <p className="font-display text-xl md:text-2xl font-semibold leading-snug text-navy-950">
              To develop the infrastructure needed to make green hydrogen a practical part of
              Manitoba&rsquo;s energy future.
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-xl border border-linegrey bg-white p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-h2green-600">
              Our Vision
            </p>
            <p className="font-display text-xl md:text-2xl font-semibold leading-snug text-navy-950">
              A growing hydrogen economy that strengthens Manitoba&rsquo;s energy security,
              economic competitiveness and ability to decarbonize.
            </p>
          </div>
        </div>
      </Section>

      <Section id="why-manitoba" background="white">
        <div className="flex flex-col items-start gap-8 md:flex-row md:justify-between">
          <div className="flex max-w-2xl flex-col gap-6">
            <SectionHeading eyebrow="Why Manitoba" title="Our home. Our opportunity." />
            <div className="flex flex-col gap-5 text-base leading-relaxed text-ink-700">
              <p>
                H2MB was created in Manitoba to help build energy opportunity in Manitoba.
                Winnipeg provides a strategic starting point at the centre of major transportation
                corridors and within a province powered predominantly by renewable electricity.
              </p>
              <p>
                By developing supply and infrastructure locally, H2MB aims to support new energy
                choices for Manitoba organizations while contributing to investment, innovation
                and economic development at home.
              </p>
            </div>
          </div>
          <Button
            href="/hydrogen#why-manitoba"
            variant="secondary"
            analyticsLabel={ctaLabels.discoverManitobaAdvantage}
            className="shrink-0"
          >
            {ctaLabels.discoverManitobaAdvantage}
          </Button>
        </div>
      </Section>

      <Section id="leadership" background="grey">
        <div className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Leadership"
            title="Business leadership and technical experience, united by a long-term vision."
            dek="H2MB brings together entrepreneurial, commercial and technical perspectives to advance green hydrogen infrastructure responsibly."
          />
          <p className="border border-dashed border-navy-950/25 bg-white p-5 text-sm leading-relaxed text-ink-700">
            <strong className="font-semibold text-navy-950">Content confirmation required:</strong>{" "}
            The profiles below are placeholders pending H2MB-approved headshots, full names,
            titles, biographies and LinkedIn links. Nothing shown here should be treated as a
            confirmed credential.
          </p>
          <LeadershipGrid />
        </div>
      </Section>

      <Section id="ecosystem" background="white">
        <div className="flex flex-col gap-10">
          <SectionHeading
            align="center"
            eyebrow="Collaboration"
            title="Infrastructure is built through collaboration."
            dek="H2MB's development depends on constructive collaboration across transportation, industry, government, academia, engineering, technology and capital. We engage with organizations across this ecosystem to understand demand, advance project development and help create the conditions for a viable regional hydrogen market."
          />
          <EcosystemDisplay />
        </div>
      </Section>

      <PartnerCta
        eyebrow="Partner"
        title="Building Manitoba's hydrogen future takes collaboration."
        dek="If your organization is exploring hydrogen, infrastructure, project development or strategic collaboration, we would welcome the conversation."
      />
    </>
  );
}
