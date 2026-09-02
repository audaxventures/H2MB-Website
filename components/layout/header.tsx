"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navLinks, headerCta } from "@/content/config";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const transparent = isHome && !scrolled && !menuOpen;

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full">
      <div
        className={cn(
          "transition-colors duration-300",
          transparent ? "bg-transparent" : "bg-navy-950/97 backdrop-blur",
          !transparent && "shadow-[0_1px_0_0_rgba(255,255,255,0.08)]",
        )}
      >
        <div className="mx-auto flex w-full max-w-content items-center justify-between px-6 py-4 md:px-10">
          <Link href="/" className="font-display text-xl font-bold tracking-tight text-white">
            H2MB
          </Link>

          <nav aria-label="Primary" className="hidden lg:flex lg:items-center lg:gap-8">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "text-sm font-medium uppercase tracking-wide text-white/80 transition-colors hover:text-white",
                    active && "text-white",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Button href={headerCta.href} variant="primary" showArrow={false} className="px-5 py-3 text-xs">
              {headerCta.label}
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center p-2 text-white lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "fixed inset-x-0 top-[65px] bottom-0 z-40 bg-navy-950 lg:hidden",
          menuOpen ? "block" : "hidden",
        )}
      >
        <nav aria-label="Mobile" className="flex h-full flex-col gap-1 px-6 py-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="border-b border-white/10 py-4 font-display text-2xl font-medium uppercase text-white"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-8">
            <Button href={headerCta.href} variant="primary" showArrow={false} className="w-full justify-center">
              {headerCta.label}
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
