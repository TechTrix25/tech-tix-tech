"use client";

import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { services } from "@/data/services";
import { icons } from "@/lib/icons";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Services gallery with scroll-driven horizontal travel. As the user scrolls
 * down, the section pins and vertical scroll is converted into horizontal
 * movement across the cards (start → end); once the last card is reached the
 * pin releases and the page continues normally into the next section. Each
 * card's content drifts at a slightly different rate for a parallax depth feel.
 * Under reduced motion it degrades to a plain horizontal swipe-scroll — all
 * GPU-friendly (transform only).
 */
export function ServicesSection() {
  const root = useRef<HTMLDivElement>(null);
  const viewport = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = track.current!;
      const vp = viewport.current!;

      // Reduced motion: no pin/scrub — let users swipe the row themselves.
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        vp.style.overflowX = "auto";
        return;
      }

      // How far the track must travel left to reveal the last card.
      const distance = () => Math.max(0, el.scrollWidth - vp.clientWidth);

      const tween = gsap.to(el, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: () => "+=" + distance(),
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Per-card parallax: content drifts as each card crosses the viewport,
      // driven by the horizontal track tween (containerAnimation).
      gsap.utils.toArray<HTMLElement>(".service-card").forEach((card) => {
        const inner = card.querySelector(".service-card__inner");
        if (!inner) return;
        gsap.fromTo(
          inner,
          { xPercent: -4 },
          {
            xPercent: 4,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              containerAnimation: tween,
              start: "left right",
              end: "right left",
              scrub: true,
            },
          }
        );
      });

      ScrollTrigger.refresh();
    },
    { scope: root }
  );

  return (
    <section id="services" className="relative z-10 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="What we do"
          title="Comprehensive solutions for your"
          highlight="digital needs"
          subtitle="From first line of code to launch and beyond — six core practices that cover the full product lifecycle."
        />
      </div>

      <div ref={root} className="mt-10 flex min-h-[100svh] items-center sm:mt-16">
        <div
          ref={viewport}
          className="w-full overflow-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <div
            ref={track}
            className="flex w-max gap-4 px-5 py-2 sm:gap-5 sm:px-6 lg:[padding-inline-start:max(1.5rem,calc((100vw-80rem)/2+1.5rem))]"
          >
            {services.map((service) => {
              const Icon = icons[service.icon] ?? icons.Globe;
              return (
                <article
                  key={service.id}
                  className="service-card group relative w-[82vw] max-w-[360px] flex-none overflow-hidden rounded-[var(--radius-card)] border border-hairline bg-surface/50 p-6 transition-[transform,border-color] duration-300 hover:-translate-y-1.5 hover:border-iris/40 sm:w-[340px] sm:p-7"
                >
                  {/* hover glow */}
                  <div className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100 [background:radial-gradient(400px_circle_at_50%_0%,rgba(123,108,246,0.12),transparent)]" />

                  <div className="service-card__inner relative will-change-transform">
                    <div className="flex items-start justify-between">
                      <div className="grid h-12 w-12 place-items-center rounded-2xl border border-hairline bg-base/60 text-iris">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="font-mono text-sm text-muted">
                        {service.number}
                      </span>
                    </div>

                    <h3 className="mt-6 text-xl font-semibold text-ink">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {service.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-hairline px-2.5 py-1 font-mono text-xs text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <ArrowUpRight className="mt-6 h-5 w-5 text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-amber" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
