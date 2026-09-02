import { cn } from "@/lib/cn";

/**
 * Visible "Conceptual rendering" label required on any future-facility
 * visual (brief Section 4). Place inside a `relative` positioned wrapper.
 */
export function ConceptualRenderingLabel({
  className,
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <span
      className={cn(
        "absolute left-4 top-4 inline-flex items-center gap-1.5 border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide backdrop-blur-sm",
        light
          ? "border-white/30 bg-navy-950/70 text-white"
          : "border-navy-950/20 bg-white/85 text-navy-950",
        className,
      )}
    >
      Conceptual rendering
    </span>
  );
}
