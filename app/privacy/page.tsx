import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/legal-page";
import { ContactEmailLink } from "@/components/ui/contact-email-link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How H2MB collects, uses and protects information submitted through this website.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalPage eyebrow="Legal" title="Privacy Policy" updated="Placeholder — not yet finalized">
      <h2 className="font-display text-xl font-semibold text-navy-950">Overview</h2>
      <p>
        H2MB Inc. (&ldquo;H2MB,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;) respects the privacy of
        visitors to this website. This placeholder Privacy Policy outlines the general structure a
        finalized policy is expected to follow. It does not yet reflect legal advice specific to
        H2MB&rsquo;s operations and must not be relied on as a complete or accurate statement of
        H2MB&rsquo;s actual privacy practices.
      </p>

      <h2 className="font-display text-xl font-semibold text-navy-950">Information we may collect</h2>
      <p>
        Information submitted voluntarily through the contact form on this website, such as name,
        company or organization, email address, phone number and the content of your message.
      </p>
      <p>
        Standard technical information collected automatically by website analytics, such as pages
        visited and general usage patterns, once an analytics provider is confirmed and configured.
      </p>

      <h2 className="font-display text-xl font-semibold text-navy-950">How information may be used</h2>
      <p>
        To respond to inquiries submitted through the contact form and to direct inquiries to the
        appropriate contact at H2MB.
      </p>
      <p>To understand general website usage and improve the website over time.</p>

      <h2 className="font-display text-xl font-semibold text-navy-950">Consent</h2>
      <p>
        Where the contact form requires consent, submitting the form indicates consent to H2MB
        collecting and using the information provided for the purpose of responding to that
        inquiry, subject to the final version of this policy.
      </p>

      <h2 className="font-display text-xl font-semibold text-navy-950">Contact</h2>
      <p>
        Questions about this placeholder policy, or about information submitted through this
        website, can be directed to{" "}
        <ContactEmailLink className="underline underline-offset-2" />.
      </p>
    </LegalPage>
  );
}
