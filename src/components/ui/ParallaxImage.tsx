"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { SmartImage } from "@/components/ui/SmartImage";
import { cn } from "@/lib/utils";

/**
 * Image with a scroll-driven parallax drift + subtle zoom-out. The inner image
 * is oversized and translated/scaled on a ScrollTrigger scrub so it moves at a
 * different rate than the page — GPU-friendly (transform only). Static under
 * reduced motion.
 */
export function ParallaxImage({
  src,
  alt,
  className,
  sizes = "100vw",
  intensity = 16,
  unoptimized,
  priority,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  /** parallax travel in % of element height */
  intensity?: number;
  unoptimized?: boolean;
  priority?: boolean;
}) {
  const wrap = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.fromTo(
        inner.current,
        { yPercent: -intensity, scale: 1.18 },
        {
          yPercent: intensity,
          scale: 1.04,
          ease: "none",
          scrollTrigger: {
            trigger: wrap.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    },
    { scope: wrap }
  );

  return (
    <div ref={wrap} className={cn("relative overflow-hidden", className)}>
      <div ref={inner} className="absolute inset-[-12%] will-change-transform">
        <SmartImage
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          unoptimized={unoptimized}
          priority={priority}
          className="object-cover"
        />
      </div>
    </div>
  );
}
