"use client";

import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { ButtonLink } from "@/components/ui/Button";
import { GradientOrbs } from "./GradientOrbs";
import { FloatingCards } from "./FloatingCards";
import { HeroObject } from "./HeroObject";

const ROTATING_WORDS = ["improve", "scale", "transform", "accelerate"];

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const rotator = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduced) {
        gsap.set([".hero-line", ".hero-sub", ".hero-cta", ".hero-cue"], {
          opacity: 1,
          y: 0,
          yPercent: 0,
        });
        if (rotator.current) rotator.current.textContent = ROTATING_WORDS[0];
        return;
      }

      // Load timeline: lines rise in, then sub-lead, CTAs, scroll cue.
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.from(".hero-line", { yPercent: 115, duration: 1, stagger: 0.12 })
        .from(".hero-sub", { y: 24, opacity: 0, duration: 0.8 }, "-=0.5")
        .from(".hero-cta", { y: 20, opacity: 0, duration: 0.7, stagger: 0.1 }, "-=0.45")
        .from(".hero-cue", { opacity: 0, duration: 0.6 }, "-=0.2");

      // Rotating gradient word (starts after the headline lands).
      const rtl = gsap.timeline({ repeat: -1, delay: 1.4 });
      ROTATING_WORDS.forEach((word) => {
        rtl
          .set(rotator.current, { textContent: word })
          .fromTo(
            rotator.current,
            { yPercent: 110, opacity: 0 },
            { yPercent: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
          )
          .to(rotator.current, {
            yPercent: -110,
            opacity: 0,
            duration: 0.45,
            ease: "power3.in",
            delay: 1.5,
          });
      });

      // Scroll parallax: copy lifts + fades, visual drifts down, on hero exit.
      gsap.to(".hero-copy", {
        yPercent: -16,
        opacity: 0.25,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to(".hero-visual", {
        yPercent: 18,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });

      ScrollTrigger.refresh();
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16"
    >
      <GradientOrbs />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.25] [background-image:linear-gradient(var(--color-hairline)_1px,transparent_1px),linear-gradient(90deg,var(--color-hairline)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        {/* Copy */}
        <div className="hero-copy">
          <p className="eyebrow mb-5 flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-mint" /># Smart &amp;
            Innovative Tech Solutions
          </p>

          <h1 className="font-display text-[2.6rem] font-semibold leading-[1.04] tracking-tight sm:text-6xl lg:text-[4.25rem]">
            <span className="block overflow-hidden py-[0.12em]">
              <span className="hero-line block">Modern technology</span>
            </span>
            <span className="block overflow-hidden py-[0.12em]">
              <span className="hero-line block">
                to{" "}
                <span
                  ref={rotator}
                  className="text-gradient inline-block"
                  aria-live="polite"
                >
                  improve
                </span>
              </span>
            </span>
            <span className="block overflow-hidden py-[0.12em]">
              <span className="hero-line block">your business.</span>
            </span>
          </h1>

          <p className="hero-sub mt-6 max-w-md text-pretty text-lg text-muted">
            Explore our powerful digital solutions for the modern business world —
            web, mobile, and enterprise software built to scale.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <span className="hero-cta">
              <ButtonLink href="/contact" size="lg" withArrow>
                Start a project
              </ButtonLink>
            </span>
            <span className="hero-cta">
              <ButtonLink href="/portfolio" size="lg" variant="outline">
                See our work
              </ButtonLink>
            </span>
          </div>

          <div className="hero-cue mt-14 flex items-center gap-3 text-sm text-muted">
            <ArrowDown className="h-4 w-4 animate-bounce" />
            Scroll to explore
          </div>
        </div>

        {/* 3D particle globe + floating cards */}
        <div className="hero-visual relative h-[340px] sm:h-[440px] lg:h-[560px]">
          <HeroObject />
        </div>
      </div>

      <FloatingCards />
    </section>
  );
}
