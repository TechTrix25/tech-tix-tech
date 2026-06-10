import { Quote } from "lucide-react";
import { testimonials } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SmartImage } from "@/components/ui/SmartImage";

export function TestimonialsSection() {
  return (
    <section className="relative z-10 overflow-hidden py-16 sm:py-32">
      {/* floating accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[8%] top-20 h-40 w-40 rounded-full bg-amber/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-16 left-[6%] h-48 w-48 rounded-full bg-iris/10 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title="Don't just take our"
          highlight="word for it"
          subtitle="What clients say after working with us."
          align="center"
        />

        <div className="mt-10 grid gap-5 sm:mt-16 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-[var(--radius-card)] border border-hairline bg-surface/50 p-7">
                <Quote className="h-8 w-8 text-iris/60" />
                <blockquote className="mt-5 flex-1 text-pretty text-base leading-relaxed text-ink/90">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-3 border-t border-hairline pt-5">
                  <SmartImage
                    src={t.avatar}
                    alt={t.author}
                    width={44}
                    height={44}
                    unoptimized
                    className="h-11 w-11 rounded-full border border-hairline object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-ink">{t.author}</p>
                    <p className="text-xs text-muted">{t.company}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
