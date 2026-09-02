import Image from "next/image";
import { ecosystemCategories, ecosystemPartners } from "@/content/ecosystem";

export function EcosystemDisplay() {
  const approved = ecosystemPartners.filter((p) => p.approved);

  if (approved.length > 0) {
    return (
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6">
        {approved.map((partner) => (
          <div
            key={partner.name}
            className="flex aspect-[3/2] items-center justify-center rounded-xl border border-linegrey bg-white p-4"
          >
            <Image
              src={partner.logo.src}
              alt={partner.logo.alt}
              width={140}
              height={70}
              className="max-h-12 w-auto object-contain grayscale"
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-center gap-x-3 gap-y-3 border-y border-linegrey py-8 text-center">
      {ecosystemCategories.map((category, i) => (
        <span key={category} className="flex items-center gap-3">
          <span className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-navy-950">
            {category}
          </span>
          {i < ecosystemCategories.length - 1 && (
            <span className="text-h2green-600" aria-hidden="true">
              &bull;
            </span>
          )}
        </span>
      ))}
    </div>
  );
}
