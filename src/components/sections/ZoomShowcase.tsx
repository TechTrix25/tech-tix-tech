"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { SmartImage } from "@/components/ui/SmartImage";

/**
 * Pinned scroll-zoom showcase. A framed image zooms from a rounded card to
 * full-bleed as the viewer scrolls through the pinned section, while a headline
 * reveals over it. Under reduced motion it renders as a static full-bleed banner.
 */
export function ZoomShowcase() {
  const root = useRef<HTMLDivElement>(null);
  const frame = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);
  const copy = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) {
        gsap.set(frame.current, { scale: 1, borderRadius: 0 });
        gsap.set(inner.current, { scale: 1 });
        gsap.set(copy.current, { opacity: 1, y: 0 });
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "+=130%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.fromTo(
        frame.current,
        { scale: 0.8, borderRadius: 28 },
        { scale: 1, borderRadius: 0, ease: "none" },
        0
      )
        .fromTo(inner.current, { scale: 1.35 }, { scale: 1, ease: "none" }, 0)
        .fromTo(
          copy.current,
          { opacity: 0, yPercent: 30 },
          { opacity: 1, yPercent: 0, ease: "power2.out", duration: 0.4 },
          0.35
        );

      ScrollTrigger.refresh();
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      className="relative z-10 grid h-[100svh] place-items-center overflow-hidden px-4"
    >
      <div
        ref={frame}
        className="relative h-full max-h-[88svh] w-full max-w-7xl overflow-hidden will-change-transform"
      >
        <div ref={inner} className="absolute inset-0 will-change-transform">
          <SmartImage
            src="/img/showcase.jpg"
            alt="Earth at night from orbit, city lights connected across the globe"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
        {/* legibility scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-base via-base/55 to-base/30" />

        <div
          ref={copy}
          className="absolute inset-0 grid place-items-center px-6 text-center"
        >
          <div className="max-w-3xl">
            <p className="eyebrow mb-5">Engineered to scale</p>
            <h2 className="text-balance font-display text-4xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
              When you embrace change, the{" "}
              <span className="text-gradient">possibilities are endless</span>.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-lg text-muted">
              We architect resilient systems that grow with you — from first
              prototype to enterprise scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
