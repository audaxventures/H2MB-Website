import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { GridPattern } from "@/components/art/grid-pattern";
import { ctaLabels } from "@/content/config";

export function PartnerCta({
  eyebrow = "Partner With H2MB",
  title = "Let's Build What's Next.",
  dek = "H2MB welcomes conversations with organizations exploring hydrogen supply, transportation and industrial applications, strategic collaboration, investment and project development.",
  ctaLabel = ctaLabels.partner,
  href = "/contact#partner",
}: {
  eyebrow?: string;
  title?: string;
  dek?: string;
  ctaLabel?: string;
  href?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-20 md:py-28">
      <GridPattern className="absolute inset-0 h-full w-full text-white/20" />
      <Container className="relative flex flex-col items-center gap-6 text-center">
        <Eyebrow light>{eyebrow}</Eyebrow>
        <h2 className="max-w-3xl font-display text-3xl sm:text-4xl md:text-5xl font-semibold uppercase leading-[1.08] tracking-tight text-white text-balance">
          {title}
        </h2>
        <p className="max-w-2xl text-base md:text-lg leading-relaxed text-white/75">{dek}</p>
        <Button href={href} variant="primary" className="mt-2" analyticsLabel={ctaLabel}>
          {ctaLabel}
        </Button>
      </Container>
    </section>
  );
}
