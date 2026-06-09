"use client";

import { useRef } from "react";
import Image from "next/image";
import { CheckCircle2, TrendingUp } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";

/**
 * Hero floating glass cards: "project shipped" chip, a metric card, a stack
 * snippet, and an avatar stack. Each sits at a different z-depth, drifts gently
 * (GSAP loops) and parallaxes toward the cursor (≤12px). Reduced-motion-safe.
 */
export function FloatingCards() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const cards = gsap.utils.toArray<HTMLElement>(".f-card");

      // Entrance (driven by the hero timeline label below — set initial state here).
      gsap.set(cards, { opacity: 0, y: 30, scale: 0.96 });
      gsap.to(cards, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.9,
        ease: "expo.out",
        stagger: 0.12,
        delay: 0.7,
      });

      if (reduced) return;

      // Gentle idle drift per card.
      cards.forEach((card, i) => {
        gsap.to(card, {
          y: `+=${12 + i * 4}`,
          duration: 3 + i * 0.6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 1 + i * 0.2,
        });
      });

      // Cursor parallax (≤12px), depth-scaled per card.
      const depths = [0.6, 1, 0.8, 1.2];
      const onMove = (e: MouseEvent) => {
        const cx = (e.clientX / window.innerWidth - 0.5) * 2;
        const cy = (e.clientY / window.innerHeight - 0.5) * 2;
        cards.forEach((card, i) => {
          gsap.to(card, {
            x: cx * 12 * (depths[i] ?? 1),
            rotateX: -cy * 4,
            rotateY: cx * 4,
            duration: 0.6,
            ease: "power2.out",
          });
        });
      };
      window.addEventListener("mousemove", onMove);
      return () => window.removeEventListener("mousemove", onMove);
    },
    { scope: root }
  );

  return (
    <div
      ref={root}
      aria-hidden
      className="pointer-events-none absolute inset-0 hidden [perspective:1200px] lg:block"
    >
      {/* Project shipped chip — top-left of the globe */}
      <div className="f-card glass shadow-depth absolute left-[46%] top-[6%] flex items-center gap-2 rounded-2xl px-4 py-3">
        <CheckCircle2 className="h-5 w-5 text-mint" />
        <div>
          <p className="text-sm font-medium text-ink">Project shipped</p>
          <p className="text-xs text-muted">CRM v2 · on time</p>
        </div>
      </div>

      {/* Metric card — top-right */}
      <div className="f-card glass glow-iris absolute right-[1%] top-[20%] rounded-2xl px-5 py-4">
        <p className="eyebrow mb-1">Conversion</p>
        <p className="font-display text-3xl font-semibold text-ink">
          +38<span className="text-amber">%</span>
        </p>
        <div className="mt-2 flex items-center gap-1 text-xs text-mint">
          <TrendingUp className="h-3.5 w-3.5" /> uplift
        </div>
      </div>

      {/* Stack snippet — bottom-left of the globe */}
      <div className="f-card glass shadow-depth absolute bottom-[10%] left-[44%] rounded-2xl p-4 font-mono text-xs">
        <p className="text-muted">
          <span className="text-iris">const</span>{" "}
          <span className="text-ink">stack</span> = [
        </p>
        <p className="pl-3 text-amber">&apos;Laravel&apos;, &apos;React&apos;,</p>
        <p className="pl-3 text-amber">&apos;Vue.js&apos;, &apos;AWS&apos;</p>
        <p className="text-muted">]</p>
      </div>

      {/* Avatar stack — bottom-right */}
      <div className="f-card glass shadow-depth absolute bottom-[22%] right-[5%] flex items-center gap-3 rounded-2xl px-4 py-3">
        <div className="flex -space-x-2">
          {[5, 8, 12].map((n) => (
            <Image
              key={n}
              src={`https://i.pravatar.cc/64?img=${n}`}
              alt=""
              width={28}
              height={28}
              className="h-7 w-7 rounded-full border border-hairline-strong"
              unoptimized
            />
          ))}
        </div>
        <p className="text-xs text-muted">
          <span className="text-ink">18+</span> happy clients
        </p>
      </div>
    </div>
  );
}
