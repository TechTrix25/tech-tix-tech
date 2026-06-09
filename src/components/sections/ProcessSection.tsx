"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { processPhases } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Process timeline with a connecting line that draws on scroll (ScrollTrigger
 * scrub) and phase nodes that light up as the line reaches them.
 */
export function ProcessSection() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const line = root.current?.querySelector<SVGPathElement>(".process-line");
      const nodes = gsap.utils.toArray<HTMLElement>(".process-node");

      if (line) {
        const length = line.getTotalLength();
        gsap.set(line, { strokeDasharray: length, strokeDashoffset: length });

        if (reduced) {
          gsap.set(line, { strokeDashoffset: 0 });
          gsap.set(nodes, { opacity: 1 });
        } else {
          gsap.to(line, {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: {
              trigger: root.current,
              start: "top 70%",
              end: "bottom 75%",
              scrub: 0.8,
            },
          });
          nodes.forEach((node) => {
            gsap.from(node, {
              opacity: 0,
              y: 24,
              duration: 0.6,
              scrollTrigger: { trigger: node, start: "top 85%" },
            });
          });
        }
      }
      ScrollTrigger.refresh();
    },
    { scope: root }
  );

  return (
    <section id="process" className="relative z-10 py-24 sm:py-32">
      <div ref={root} className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="How we work"
          title="A proven path from"
          highlight="idea to launch"
          subtitle="A clear, collaborative methodology that keeps every project on time and on target."
          align="center"
        />

        <div className="relative mt-20">
          {/* Connecting line (horizontal on lg, hidden on small where cards stack) */}
          <svg
            className="absolute left-0 top-7 hidden h-2 w-full lg:block"
            viewBox="0 0 1000 8"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              className="process-line"
              d="M 0 4 L 1000 4"
              fill="none"
              stroke="url(#process-grad)"
              strokeWidth="2"
            />
            <defs>
              <linearGradient id="process-grad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#FFB23E" />
                <stop offset="100%" stopColor="#7B6CF6" />
              </linearGradient>
            </defs>
          </svg>

          <ol className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {processPhases.map((phase) => (
              <li key={phase.step} className="process-node relative">
                <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl border border-hairline bg-surface font-display text-lg font-semibold text-amber">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-ink">{phase.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {phase.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
