"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

export interface SectionNavItem {
  id: string;
  label: string;
}

export function SectionNav({ items }: { items: SectionNavItem[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  const handleClick = (id: string) => (e: React.MouseEvent) => {
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    const headerOffset = 88;
    const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top, behavior: "smooth" });
    setActiveId(id);
  };

  return (
    <nav
      ref={navRef}
      aria-label="Page sections"
      className="sticky top-[65px] z-30 border-b border-linegrey bg-warmwhite/95 backdrop-blur"
    >
      <div className="mx-auto flex max-w-content gap-1 overflow-x-auto px-6 py-1 md:px-10 [scrollbar-width:none]">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={handleClick(item.id)}
            aria-current={activeId === item.id ? "true" : undefined}
            className={cn(
              "shrink-0 whitespace-nowrap border-b-2 px-4 py-3 text-xs font-semibold uppercase tracking-wide transition-colors",
              activeId === item.id
                ? "border-h2green-600 text-navy-950"
                : "border-transparent text-ink-500 hover:text-navy-950",
            )}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
