"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { trackEvent, type AnalyticsEvent } from "@/lib/analytics";

type Variant = "primary" | "secondary" | "ghost-light" | "ghost-dark";

interface BaseProps {
  variant?: Variant;
  className?: string;
  showArrow?: boolean;
  children: React.ReactNode;
  /** Label recorded with the cta_click analytics event. Defaults to the visible text when it's a plain string. */
  analyticsLabel?: string;
  /** Override the default cta_click event entirely (e.g. partnership_pathway_selected). */
  analyticsEvent?: AnalyticsEvent;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-h2green-600 text-white hover:bg-h2green-700 focus-visible:outline-white",
  secondary:
    "bg-transparent text-navy-950 border border-navy-950/30 hover:border-navy-950 hover:bg-navy-950/5",
  "ghost-light":
    "bg-transparent text-white border border-white/40 hover:border-white hover:bg-white/10",
  "ghost-dark":
    "bg-transparent text-navy-950 border border-navy-950/30 hover:border-navy-950 hover:bg-navy-950/5",
};

const base =
  "inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold tracking-wide uppercase transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2";

type LinkProps = BaseProps &
  Omit<ComponentProps<typeof Link>, "className" | "children" | "onClick">;

export function Button({
  variant = "primary",
  className,
  showArrow = true,
  children,
  href,
  analyticsLabel,
  analyticsEvent,
  ...props
}: LinkProps) {
  return (
    <Link
      href={href}
      className={cn(base, variantStyles[variant], className)}
      onClick={() =>
        trackEvent(
          analyticsEvent ?? {
            name: "cta_click",
            label: analyticsLabel ?? (typeof children === "string" ? children : String(href)),
            href: typeof href === "string" ? href : undefined,
          },
        )
      }
      {...props}
    >
      {children}
      {showArrow && <ArrowUpRight className="size-4" aria-hidden="true" />}
    </Link>
  );
}

export function ButtonEl({
  variant = "primary",
  className,
  showArrow = false,
  children,
  ...props
}: BaseProps & Omit<ComponentProps<"button">, "className" | "children">) {
  return (
    <button className={cn(base, variantStyles[variant], className)} {...props}>
      {children}
      {showArrow && <ArrowUpRight className="size-4" aria-hidden="true" />}
    </button>
  );
}
