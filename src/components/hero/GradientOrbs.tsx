"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

/**
 * Slow-drifting amber / iris / mint blobs at very low opacity for ambient depth.
 * Pure transform/opacity loops; paused entirely under reduced motion.
 */
export function GradientOrbs() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const orbs = gsap.utils.toArray<HTMLElement>(".orb");
      orbs.forEach((orb, i) => {
        gsap.to(orb, {
          x: `random(-80, 80)`,
          y: `random(-60, 60)`,
          scale: `random(0.9, 1.2)`,
          duration: 12 + i * 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    },
    { scope: root }
  );

  return (
    <div ref={root} aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="orb absolute -left-24 top-10 h-[34rem] w-[34rem] rounded-full bg-iris/20 blur-[120px]" />
      <div className="orb absolute -right-20 top-40 h-[28rem] w-[28rem] rounded-full bg-amber/15 blur-[120px]" />
      <div className="orb absolute bottom-0 left-1/3 h-[26rem] w-[26rem] rounded-full bg-mint/10 blur-[120px]" />
    </div>
  );
}
