import { contactConfig } from "@/content/config";

/**
 * Renders the configured contact email as a real mailto: link once H2MB
 * supplies one; while it's still the bracketed placeholder, renders plain
 * text instead of a non-functional mailto: link.
 */
export function ContactEmailLink({ className }: { className?: string }) {
  const isPlaceholder = contactConfig.email.startsWith("[");
  if (isPlaceholder) {
    return <span className={className}>{contactConfig.email}</span>;
  }
  return (
    <a href={`mailto:${contactConfig.email}`} className={className}>
      {contactConfig.email}
    </a>
  );
}
