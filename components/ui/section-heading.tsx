import { cn } from "@/lib/cn";

export function Eyebrow({
  children,
  className,
  light,
}: {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <p
      className={cn(
        "font-display text-xs md:text-sm font-semibold uppercase tracking-[0.18em]",
        light ? "text-h2green-400" : "text-h2green-600",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  dek,
  align = "left",
  light,
  as: Heading = "h2",
  className,
}: {
  eyebrow?: string;
  title: string;
  dek?: string;
  align?: "left" | "center";
  light?: boolean;
  as?: "h1" | "h2";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <Heading
        className={cn(
          "font-display text-3xl sm:text-4xl md:text-5xl font-semibold uppercase leading-[1.08] tracking-tight text-balance",
          light ? "text-white" : "text-navy-950",
        )}
      >
        {title}
      </Heading>
      {dek && (
        <p
          className={cn(
            "max-w-2xl text-base md:text-lg leading-relaxed",
            light ? "text-white/75" : "text-ink-700",
            align === "center" && "mx-auto",
          )}
        >
          {dek}
        </p>
      )}
    </div>
  );
}
