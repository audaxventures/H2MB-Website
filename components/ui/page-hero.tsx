import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section-heading";

export function PageHero({
  eyebrow,
  title,
  dek,
  background = "navy",
  art,
  children,
}: {
  eyebrow: string;
  title: string;
  dek?: string;
  background?: "navy" | "warm";
  art?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28",
        background === "navy" ? "bg-navy-950 text-white" : "bg-warmwhite text-navy-950",
      )}
    >
      {art && <div className="absolute inset-0" aria-hidden="true">{art}</div>}
      <Container className="relative">
        <div className="max-w-3xl">
          <Eyebrow light={background === "navy"} className="mb-5">
            {eyebrow}
          </Eyebrow>
          <h1
            className={cn(
              "font-display text-4xl sm:text-5xl md:text-6xl font-semibold uppercase leading-[1.05] tracking-tight text-balance",
              background === "navy" ? "text-white" : "text-navy-950",
            )}
          >
            {title}
          </h1>
          {dek && (
            <p
              className={cn(
                "mt-6 max-w-xl text-base md:text-lg leading-relaxed",
                background === "navy" ? "text-white/75" : "text-ink-700",
              )}
            >
              {dek}
            </p>
          )}
          {children && <div className="mt-9 flex flex-wrap gap-4">{children}</div>}
        </div>
      </Container>
    </section>
  );
}
