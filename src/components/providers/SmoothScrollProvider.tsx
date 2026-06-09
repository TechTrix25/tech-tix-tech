"use client";

/**
 * Wires Lenis smooth/inertia scrolling to GSAP's ScrollTrigger so both share a
 * single source of truth for scroll position. Disabled (native scroll) when the
 * user prefers reduced motion. Exposes the Lenis instance via context for
 * programmatic scrolling (e.g. anchor links).
 */

import { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const LenisContext = createContext<Lenis | null>(null);

export function useLenis() {
  return useContext(LenisContext);
}

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const reduced = usePrefersReducedMotion();
  const pathname = usePathname();
  const [lenis, setLenis] = useState<Lenis | null>(null);

  // On client navigation: jump to top and recalc all ScrollTrigger positions so
  // every page's scroll-driven animations start from a clean state.
  useEffect(() => {
    if (lenis) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
    const id = window.setTimeout(() => ScrollTrigger.refresh(), 200);
    return () => window.clearTimeout(id);
  }, [pathname, lenis]);

  useEffect(() => {
    if (reduced) {
      // Respect reduced motion: native scroll, no Lenis loop.
      ScrollTrigger.refresh();
      return;
    }

    const instance = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    // Drive Lenis from GSAP's ticker and keep ScrollTrigger in sync.
    instance.on("scroll", ScrollTrigger.update);

    const update = (time: number) => instance.raf(time * 1000);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    setLenis(instance);
    ScrollTrigger.refresh();

    return () => {
      gsap.ticker.remove(update);
      instance.destroy();
      setLenis(null);
    };
  }, [reduced]);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}
