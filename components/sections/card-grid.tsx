import type { LucideIcon } from "lucide-react";
import { IconCard } from "@/components/ui/icon-card";
import { cn } from "@/lib/cn";

const colsClass: Record<3 | 4 | 5, string> = {
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
};

export function CardGrid({
  items,
  tone = "light",
  columns = 4,
}: {
  items: { icon: LucideIcon; title: string; description: string }[];
  tone?: "light" | "dark";
  columns?: 3 | 4 | 5;
}) {
  return (
    <div className={cn("grid grid-cols-1 gap-4 sm:grid-cols-2", colsClass[columns])}>
      {items.map((item) => (
        <IconCard
          key={item.title}
          icon={item.icon}
          title={item.title}
          description={item.description}
          tone={tone}
        />
      ))}
    </div>
  );
}
