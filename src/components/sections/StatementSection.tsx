"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, SplitText, useGSAP } from "@/lib/gsap";

/**
 * Big editorial statement with a line-by-line reveal driven by scroll
 * (Accenture-style). Each line rises into view; one phrase carries the gradient.
 * Falls back to a static block under reduced motion.
 */
export function StatementSection() {
  const root = useRef<HTMLDivElement>(null);
  const heading = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const split = new SplitText(heading.current, { type: "words" });

      if (reduced) {
        gsap.set(split.words, { opacity: 1 });
        return () => split.revert();
      }

      // Scroll-scrubbed reveal: words brighten from dim to full as the section
      // passes through the viewport. Animates both directions with scroll.
      gsap.set(split.words, { opacity: 0.16 });
      gsap.to(split.words, {
        opacity: 1,
        ease: "none",
        stagger: 0.4,
        scrollTrigger: {
          trigger: root.current,
          start: "top 78%",
          end: "center 42%",
          scrub: true,
        },
      });

      ScrollTrigger.refresh();
      return () => split.revert();
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative z-10 px-6 py-20 sm:py-40">
      <div className="mx-auto max-w-5xl">
        <p className="eyebrow mb-8">Our philosophy</p>
        <h2
          ref={heading}
          className="text-balance font-display text-3xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-[3.4rem]"
        >
          We don&apos;t just write code — we build the digital foundations that
          let businesses <span className="text-amber">move faster</span>, reach
          further, and grow without limits.
        </h2>
      </div>
    </section>
  );
}
