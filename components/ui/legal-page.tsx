import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section-heading";
import { contactConfig } from "@/content/config";

export function LegalPage({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32">
      <Container className="max-w-3xl">
        <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-navy-950">{title}</h1>
        <p className="mt-4 text-sm text-ink-500">Last updated: {updated}</p>

        <div className="mt-8 border border-dashed border-navy-950/25 bg-coolgrey p-5 text-sm leading-relaxed text-ink-700">
          <strong className="font-semibold text-navy-950">Placeholder document.</strong> This page
          is a structural placeholder only. It must be reviewed and finalized by H2MB with
          appropriate legal/privacy counsel before launch (see brief Section 14: &ldquo;Confirm
          privacy policy, terms and consent language with appropriate legal/privacy
          review&rdquo;). Nothing on this page should be treated as final legal copy.
        </div>

        <div className="prose-legal mt-10 flex flex-col gap-6 text-base leading-relaxed text-ink-700">
          {children}
        </div>

        <p className="mt-10 text-sm text-ink-500">
          Questions about this document can be sent to{" "}
          <a href={`mailto:${contactConfig.email}`} className="underline underline-offset-2">
            {contactConfig.email}
          </a>
          .
        </p>
      </Container>
    </div>
  );
}
