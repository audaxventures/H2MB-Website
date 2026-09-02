import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

export function IconCard({
  icon: Icon,
  title,
  description,
  tone = "light",
  className,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex h-full flex-col gap-4 rounded-xl border p-6 shadow-[0_1px_3px_rgba(4,13,32,0.04)] md:p-7",
        tone === "light"
          ? "border-linegrey bg-white"
          : "border-white/10 bg-white/[0.04]",
        className,
      )}
    >
      <div
        className={cn(
          "flex size-11 items-center justify-center rounded-full",
          tone === "light" ? "bg-h2green-50 text-h2green-600" : "bg-white/10 text-h2green-400",
        )}
      >
        <Icon className="size-5" aria-hidden="true" />
      </div>
      <h3
        className={cn(
          "font-display text-lg font-semibold",
          tone === "light" ? "text-navy-950" : "text-white",
        )}
      >
        {title}
      </h3>
      <p className={cn("text-sm leading-relaxed", tone === "light" ? "text-ink-700" : "text-white/70")}>
        {description}
      </p>
    </div>
  );
}
