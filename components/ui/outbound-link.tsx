"use client";

import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/cn";

export function OutboundLink({
  href,
  label,
  className,
  children,
}: {
  href: string;
  label: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(className)}
      onClick={() => trackEvent({ name: "outbound_link_click", label, href })}
    >
      {children}
    </a>
  );
}
