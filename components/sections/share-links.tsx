"use client";

import { useState } from "react";
import { Link2, Check } from "lucide-react";
import { LinkedinIcon } from "@/components/ui/linkedin-icon";
import { trackEvent } from "@/lib/analytics";

export function ShareLinks({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);

  const linkedInHref = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;

  return (
    <div className="flex items-center gap-3">
      <span className="text-xs font-semibold uppercase tracking-wide text-ink-500">Share</span>
      <a
        href={linkedInHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Share "${title}" on LinkedIn`}
        onClick={() => trackEvent({ name: "outbound_link_click", label: `Share — ${title}`, href: linkedInHref })}
        className="flex size-9 items-center justify-center border border-linegrey text-navy-950 transition-colors hover:border-navy-950"
      >
        <LinkedinIcon className="size-4" />
      </a>
      <button
        type="button"
        aria-label="Copy article link"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          } catch {
            // Clipboard API unavailable — no-op; link remains visible in the address bar.
          }
        }}
        className="flex size-9 items-center justify-center border border-linegrey text-navy-950 transition-colors hover:border-navy-950"
      >
        {copied ? <Check className="size-4" aria-hidden="true" /> : <Link2 className="size-4" aria-hidden="true" />}
        <span className="sr-only">{copied ? "Link copied" : "Copy link"}</span>
      </button>
    </div>
  );
}
