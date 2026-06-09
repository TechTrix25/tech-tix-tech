import { techStack } from "@/data/content";

/**
 * Infinite trust/tech marquee. Pauses on hover. The track is duplicated so the
 * -50% keyframe loops seamlessly. CSS-only (transform), disabled under
 * reduced motion via the global stylesheet.
 */
export function TrustMarquee() {
  const items = [...techStack, "MySQL", "Stripe", "Figma"];
  const track = [...items, ...items];

  return (
    <section className="relative z-10 border-y border-hairline bg-surface/30 py-8">
      <div className="mb-6 text-center">
        <p className="eyebrow">Tools &amp; technologies we build with</p>
      </div>
      <div className="marquee-pause relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <div
          className="animate-marquee flex w-max items-center gap-12 whitespace-nowrap"
          style={{ "--marquee-duration": "40s" } as React.CSSProperties}
        >
          {track.map((label, i) => (
            <span
              key={`${label}-${i}`}
              className="font-mono text-lg font-medium tracking-tight text-muted transition-colors hover:text-ink"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
