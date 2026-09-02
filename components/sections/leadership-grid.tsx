import Image from "next/image";
import { OutboundLink } from "@/components/ui/outbound-link";
import { AvatarPlaceholder } from "@/components/ui/avatar-placeholder";
import { leadership } from "@/content/leadership";

export function LeadershipGrid() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {leadership.map((person) => (
        <div key={person.slug} className="flex flex-col gap-4 border border-linegrey bg-white">
          {person.headshot.isPlaceholder ? (
            <AvatarPlaceholder name={person.name} />
          ) : (
            <div className="relative aspect-square w-full">
              <Image
                src={person.headshot.src}
                alt={person.headshot.alt}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
          )}
          <div className="flex flex-col gap-2 p-6 pt-0">
            <p className="font-display text-lg font-semibold text-navy-950">{person.name}</p>
            <p className="text-sm font-medium uppercase tracking-wide text-h2green-600">
              {person.title}
            </p>
            <p className="text-sm leading-relaxed text-ink-700">{person.bio}</p>
            {person.linkedinUrl && (
              <OutboundLink
                href={person.linkedinUrl}
                label={`Leadership LinkedIn — ${person.name}`}
                className="mt-1 text-sm font-semibold text-navy-950 underline underline-offset-4"
              >
                LinkedIn &rarr;
              </OutboundLink>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
