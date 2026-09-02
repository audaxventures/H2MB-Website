import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/container";

const backgrounds = {
  white: "bg-white",
  grey: "bg-coolgrey",
  navy: "bg-navy-950 text-white",
  warm: "bg-warmwhite",
};

export function Section({
  id,
  background = "white",
  className,
  containerClassName,
  children,
}: {
  id?: string;
  background?: keyof typeof backgrounds;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("scroll-mt-32 py-20 md:py-28", backgrounds[background], className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
