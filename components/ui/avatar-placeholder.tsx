import { cn } from "@/lib/cn";

function initials(name: string) {
  const cleaned = name.replace(/[[\]]/g, "");
  const parts = cleaned.split(" ").filter((p) => p && p !== "Pending" && p !== "Approval");
  const letters = parts
    .filter((p) => /^[A-Za-z]/.test(p))
    .slice(0, 2)
    .map((p) => p[0]!.toUpperCase());
  return letters.join("") || "H2";
}

export function AvatarPlaceholder({ name, className }: { name: string; className?: string }) {
  return (
    <div
      className={cn(
        "flex aspect-square w-full items-center justify-center bg-navy-900 text-white",
        className,
      )}
      aria-hidden="true"
    >
      <span className="font-display text-3xl font-semibold tracking-wide text-white/80">
        {initials(name)}
      </span>
    </div>
  );
}
