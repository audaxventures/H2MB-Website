import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionNav } from "@/components/ui/section-nav";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { PartnerPathwayCards } from "@/components/sections/partner-pathway-cards";
import { ContactForm } from "@/components/forms/contact-form";
import { OutboundLink } from "@/components/ui/outbound-link";
import { PrairieHorizon } from "@/components/art/prairie-horizon";
import { contactConfig, socialLinks } from "@/content/config";

export const metadata: Metadata = {
  title: "Contact H2MB | Partner With H2MB",
  description:
    "Connect with H2MB about hydrogen supply, transportation, industrial applications, strategic partnerships, investment or general inquiries.",
  alternates: { canonical: "/contact" },
};

const sectionNavItems = [
  { id: "partner", label: "Partner With H2MB" },
  { id: "contact", label: "Contact" },
  { id: "location", label: "Location" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact H2MB"
        title="Let's build what's next."
        dek="H2MB welcomes conversations with organizations interested in hydrogen, infrastructure, partnerships and Manitoba's emerging hydrogen economy."
        art={<PrairieHorizon className="h-full w-full opacity-50" />}
      />
      <SectionNav items={sectionNavItems} />

      <Section id="partner" background="white">
        <div className="flex flex-col gap-14">
          <SectionHeading
            eyebrow="Partner With H2MB"
            title="Building a hydrogen economy takes more than hydrogen. It takes partners."
            dek="H2MB is engaging across the market to understand future demand, develop infrastructure and identify practical opportunities for collaboration."
          />
          <PartnerPathwayCards />
        </div>
      </Section>

      <Section id="contact" background="grey">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading
            eyebrow="Contact"
            title="Start a conversation."
            dek="Tell us a little about your organization, your area of interest and how we can help direct your inquiry."
          />
          <div className="border border-linegrey bg-white p-6 md:p-10">
            <Suspense fallback={null}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </Section>

      <Section id="location" background="white">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <SectionHeading eyebrow="Location" title="H2MB Inc." />
          <div className="flex flex-col gap-2 text-base leading-relaxed text-ink-700">
            <p>{contactConfig.city}</p>
            <p>{contactConfig.country}</p>
            <div className="mt-4 flex flex-col gap-1">
              <a href={`mailto:${contactConfig.email}`} className="font-medium text-navy-950 underline underline-offset-4">
                {contactConfig.email}
              </a>
              {contactConfig.phone && (
                <a href={`tel:${contactConfig.phone}`} className="font-medium text-navy-950 underline underline-offset-4">
                  {contactConfig.phone}
                </a>
              )}
              <OutboundLink
                href={socialLinks.linkedin}
                label="Contact page — LinkedIn"
                className="font-medium text-navy-950 underline underline-offset-4"
              >
                LinkedIn &rarr;
              </OutboundLink>
            </div>
          </div>
        </div>
      </Section>

      <section className="bg-navy-950 py-24 md:py-32">
        <Container>
          <p className="text-center font-display text-3xl sm:text-4xl md:text-5xl font-semibold uppercase leading-tight text-white text-balance">
            Building Manitoba&rsquo;s Green Hydrogen Future.
          </p>
        </Container>
      </section>
    </>
  );
}
