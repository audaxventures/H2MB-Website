import { partnerPathways } from "@/content/contact";
import { Button } from "@/components/ui/button";

export function PartnerPathwayCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {partnerPathways.map((pathway) => (
        <div
          key={pathway.id}
          className="flex h-full flex-col justify-between gap-6 border border-linegrey bg-white p-6 md:p-7"
        >
          <div className="flex flex-col gap-3">
            <h3 className="font-display text-lg font-semibold text-navy-950">{pathway.title}</h3>
            <p className="text-sm leading-relaxed text-ink-700">{pathway.description}</p>
          </div>
          <Button
            href={`/contact?topic=${encodeURIComponent(pathway.presetTopic)}#contact`}
            variant="secondary"
            showArrow={false}
            className="w-full justify-center text-xs"
            analyticsEvent={{ name: "partnership_pathway_selected", pathway: pathway.id }}
          >
            {pathway.ctaLabel}
          </Button>
        </div>
      ))}
    </div>
  );
}
