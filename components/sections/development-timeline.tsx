import { Check } from "lucide-react";
import type { DevelopmentStage } from "@/content/types";
import { cn } from "@/lib/cn";

const statusLabel: Record<DevelopmentStage["status"], string> = {
  complete: "Complete",
  active: "In progress",
  upcoming: "Upcoming",
};

export function DevelopmentTimeline({
  stages,
  tone = "light",
}: {
  stages: DevelopmentStage[];
  tone?: "light" | "dark";
}) {
  const statusStyles: Record<DevelopmentStage["status"], string> =
    tone === "light"
      ? {
          complete: "border-h2green-600 bg-h2green-600 text-white",
          active: "border-h2green-600 bg-white text-h2green-600",
          upcoming: "border-linegrey bg-white text-ink-500",
        }
      : {
          complete: "border-h2green-500 bg-h2green-500 text-white",
          active: "border-h2green-400 bg-navy-950 text-h2green-400",
          upcoming: "border-white/25 bg-navy-950 text-white/50",
        };

  return (
    <ol className="grid grid-cols-1 gap-6 md:grid-cols-5 md:gap-4">
      {stages.map((stage, i) => (
        <li key={stage.id} className="relative flex flex-col gap-4">
          <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-4">
            <div
              className={cn(
                "flex size-10 shrink-0 items-center justify-center rounded-full border-2 font-display text-sm font-semibold",
                statusStyles[stage.status],
              )}
              aria-hidden="true"
            >
              {stage.status === "complete" ? <Check className="size-4" /> : stage.index}
            </div>
            {i < stages.length - 1 && (
              <div
                className={cn("hidden h-0.5 flex-1 md:block", tone === "light" ? "bg-linegrey" : "bg-white/15")}
                aria-hidden="true"
              />
            )}
          </div>
          <div>
            <p
              className={cn(
                "mb-1 text-[11px] font-semibold uppercase tracking-wide",
                stage.status === "upcoming"
                  ? tone === "light"
                    ? "text-ink-700"
                    : "text-white/60"
                  : tone === "light"
                    ? "text-h2green-600"
                    : "text-h2green-400",
              )}
            >
              {statusLabel[stage.status]}
            </p>
            <h3 className={cn("font-display text-base font-semibold", tone === "light" ? "text-navy-950" : "text-white")}>
              {stage.label}
            </h3>
            <p className={cn("mt-2 text-sm leading-relaxed", tone === "light" ? "text-ink-700" : "text-white/70")}>
              {stage.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
