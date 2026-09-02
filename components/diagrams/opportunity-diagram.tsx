import { ArrowLeftRight } from "lucide-react";

const nodes = ["Production", "Infrastructure", "Demand"];

/** Visual for the brief's "PRODUCTION ↔ INFRASTRUCTURE ↔ DEMAND" relationship (Section 9). */
export function OpportunityDiagram() {
  return (
    <div className="flex flex-col items-stretch gap-0 md:flex-row md:items-center">
      {nodes.map((node, i) => (
        <div key={node} className="flex flex-1 flex-col items-center md:flex-row">
          <div className="flex w-full flex-1 flex-col items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-6 py-8 text-center">
            <p className="font-display text-lg md:text-xl font-semibold uppercase tracking-wide text-white">
              {node}
            </p>
          </div>
          {i < nodes.length - 1 && (
            <div className="flex shrink-0 items-center justify-center py-2 text-h2green-400 md:px-3 md:py-0">
              <ArrowLeftRight className="size-5 rotate-90 md:rotate-0" aria-hidden="true" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
