import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/legal-page";
import { contactConfig } from "@/content/config";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms governing use of the H2MB website.",
  alternates: { canonical: "/terms" },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <LegalPage eyebrow="Legal" title="Terms of Use" updated="Placeholder — not yet finalized">
      <h2 className="font-display text-xl font-semibold text-navy-950">Overview</h2>
      <p>
        These placeholder Terms of Use outline the general structure a finalized terms document is
        expected to follow for the H2MB Inc. (&ldquo;H2MB&rdquo;) website. By using this website,
        visitors are expected to agree to the final version of these terms once confirmed by H2MB.
      </p>

      <h2 className="font-display text-xl font-semibold text-navy-950">Website content</h2>
      <p>
        Content on this website describes H2MB&rsquo;s proposed Phase 1 green hydrogen facility and
        broader development strategy at a development stage. Nothing on this website should be
        interpreted as a guarantee of future performance, capacity, timing or commercial terms.
      </p>

      <h2 className="font-display text-xl font-semibold text-navy-950">Intellectual property</h2>
      <p>
        Unless otherwise noted, the text, graphics, diagrams and other content on this website are
        the property of H2MB and may not be reproduced without permission, subject to the final
        version of these terms.
      </p>

      <h2 className="font-display text-xl font-semibold text-navy-950">No warranty</h2>
      <p>
        This website and its content are provided on an &ldquo;as is&rdquo; basis. A finalized
        limitation of liability and disclaimer will be confirmed with H2MB&rsquo;s legal counsel
        before launch.
      </p>

      <h2 className="font-display text-xl font-semibold text-navy-950">Contact</h2>
      <p>
        Questions about these placeholder terms can be directed to{" "}
        <a href={`mailto:${contactConfig.email}`} className="underline underline-offset-2">
          {contactConfig.email}
        </a>
        .
      </p>
    </LegalPage>
  );
}
