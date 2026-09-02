import Link from "next/link";
import { navLinks, footerNav, footerLegal, siteConfig, contactConfig } from "@/content/config";
import { Container } from "@/components/ui/container";
import { OutboundLink } from "@/components/ui/outbound-link";

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string; external?: boolean }[];
}) {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
        {title}
      </p>
      <ul className="flex flex-col gap-3">
        {links.map((link) =>
          link.external ? (
            <li key={link.label}>
              <OutboundLink
                href={link.href}
                label={`Footer — ${link.label}`}
                className="text-sm text-white/80 transition-colors hover:text-white"
              >
                {link.label}
              </OutboundLink>
            </li>
          ) : (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-sm text-white/80 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ),
        )}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <Container className="flex flex-col gap-16 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <p className="font-display text-2xl font-bold tracking-tight">H2MB</p>
            <p className="font-display text-lg font-semibold uppercase leading-snug">
              Building Manitoba&rsquo;s Green Hydrogen Future.
            </p>
            <p className="max-w-sm text-sm leading-relaxed text-white/70">
              H2MB is a Manitoba-based energy company developing green hydrogen
              production and distribution infrastructure, beginning with its
              proposed Phase 1 facility in Winnipeg.
            </p>
          </div>
          <FooterColumn title="Company" links={footerNav.company} />
          <FooterColumn title="Hydrogen" links={footerNav.hydrogen} />
          <FooterColumn title="Connect" links={footerNav.connect} />
        </div>

        <nav aria-label="Footer primary" className="sr-only">
          <ul>
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {footerLegal.year} {siteConfig.legalName}. All rights reserved.{" "}
            <Link href="/privacy" className="underline hover:text-white">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link href="/terms" className="underline hover:text-white">
              Terms of Use
            </Link>
          </p>
          <p>
            {contactConfig.city}, {contactConfig.country}
          </p>
        </div>
      </Container>
    </footer>
  );
}
