"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/data/site";
import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "@/components/brand/Logo";
import { cn } from "@/lib/utils";

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Portal target is only available after mount (no SSR document).
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close drawer on route change.
  useEffect(() => setOpen(false), [pathname]);

  // Lock body scroll while drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (path: string) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "glass border-b border-hairline py-3"
          : "border-b border-transparent py-5"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Logo />

        {/* Desktop */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={cn(
                "relative px-4 py-2 text-sm font-medium transition-colors",
                isActive(link.path) ? "text-ink" : "text-muted hover:text-ink"
              )}
            >
              {link.name}
              {isActive(link.path) && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-x-3 -bottom-0.5 h-px bg-[linear-gradient(90deg,var(--color-amber),var(--color-iris))]"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <ButtonLink href="/contact" size="md" withArrow>
            Get a quote
          </ButtonLink>
        </div>

        {/* Mobile trigger */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="rounded-full p-2 text-ink md:hidden"
          aria-label="Open menu"
          aria-expanded={open}
        >
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      {/* Mobile drawer — portaled to <body> so the header's backdrop-filter
          (added on scroll) can't trap these fixed elements in its containing
          block, which would otherwise collapse the overlay and panel. */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <div className="md:hidden">
                <motion.div
                  className="fixed inset-0 z-60 bg-black/60 backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setOpen(false)}
                />
                <motion.aside
                  className="fixed inset-y-0 right-0 z-70 flex h-dvh w-[82%] max-w-sm flex-col gap-2 overflow-y-auto border-l border-hairline bg-surface p-6"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", stiffness: 360, damping: 38 }}
                  role="dialog"
                  aria-modal="true"
                  aria-label="Site menu"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <span className="eyebrow">Menu</span>
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="rounded-full p-2 text-ink"
                      aria-label="Close menu"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.path}
                      className={cn(
                        "rounded-xl px-4 py-3 text-lg font-medium transition-colors",
                        isActive(link.path)
                          ? "bg-white/5 text-ink"
                          : "text-muted hover:bg-white/5 hover:text-ink"
                      )}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <ButtonLink
                    href="/contact"
                    size="lg"
                    withArrow
                    className="mt-4 w-full"
                  >
                    Get a quote
                  </ButtonLink>
                  <p className="mt-auto pt-6 text-sm text-muted">
                    {site.contact.email}
                  </p>
                </motion.aside>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </header>
  );
}
