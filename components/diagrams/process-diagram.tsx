"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { cn } from "@/lib/cn";

export interface ProcessStep {
  label: string;
  description?: string;
}

/**
 * Responsive, original line-drawing process diagram. Horizontal with arrow
 * connectors on desktop; collapses to a vertical sequence on mobile
 * (brief Section 3 "Motion", Section 13 responsive rules).
 *
 * Content is always rendered fully visible (never opacity: 0) so it never
 * depends on JavaScript or an intersection trigger to be readable — the
 * reveal is a purely decorative, non-blocking upward shift, and is skipped
 * entirely under prefers-reduced-motion.
 */
export function ProcessDiagram({
  steps,
  tone = "light",
  numbered = false,
}: {
  steps: ProcessStep[];
  tone?: "light" | "dark";
  numbered?: boolean;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className={cn(
        "flex flex-col gap-0 md:flex-row md:items-stretch md:gap-0",
      )}
    >
      {steps.map((step, i) => (
        <div key={step.label} className="flex flex-1 flex-col md:flex-row md:items-center">
          <motion.div
            initial={{ y: 0 }}
            whileInView={reduceMotion ? undefined : { y: [10, 0] }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className={cn(
              "flex flex-1 flex-col items-start gap-3 rounded-xl border p-6",
              tone === "light" ? "border-linegrey bg-white" : "border-white/10 bg-white/[0.04]",
            )}
          >
            {numbered ? (
              <span
                className={cn(
                  "font-display text-sm font-semibold",
                  tone === "light" ? "text-h2green-600" : "text-h2green-400",
                )}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
            ) : (
              <span
                className={cn(
                  "size-2.5 rounded-full",
                  tone === "light" ? "bg-h2green-600" : "bg-h2green-400",
                )}
                aria-hidden="true"
              />
            )}
            <p
              className={cn(
                "font-display text-sm md:text-base font-semibold leading-snug",
                tone === "light" ? "text-navy-950" : "text-white",
              )}
            >
              {step.label}
            </p>
            {step.description && (
              <p className={cn("text-sm leading-relaxed", tone === "light" ? "text-ink-700" : "text-white/70")}>
                {step.description}
              </p>
            )}
          </motion.div>
          {i < steps.length - 1 && (
            <div
              className={cn(
                "flex shrink-0 items-center justify-center py-1 md:px-1 md:py-0",
                tone === "light" ? "text-h2green-600" : "text-h2green-400",
              )}
              aria-hidden="true"
            >
              <ArrowDown className="size-5 md:hidden" />
              <ArrowRight className="hidden size-5 md:block" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
