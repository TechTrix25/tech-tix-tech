import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { TeamSection } from "@/components/sections/TeamSection";
import { CTASection } from "@/components/sections/CTASection";
import { aboutStory, values, whyChooseUs } from "@/data/content";
import { icons } from "@/lib/icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "Tech Trix Technologies is a team of passionate technologists delivering innovative web, mobile, and enterprise software solutions since 2025.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Who we are"
        title="We turn ambitious ideas into"
        highlight="working software"
        subtitle="A team of passionate technologists committed to delivering solutions that empower businesses to reach their full potential."
      />

      {/* Our story */}
      <section className="relative z-10 py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Our story" title="Built on a simple" highlight="mission" />
            <div className="mt-6 space-y-4 text-pretty text-muted">
              {aboutStory.map((p, i) => (
                <Reveal key={i} delay={i * 0.05} as="div">
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] border border-hairline">
              <ParallaxImage
                src="/img/about.jpeg"
                alt="The Tech Trix team collaborating"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-base/40 to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="relative z-10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="What we stand for"
            title="Principles that guide"
            highlight="everything we do"
            align="center"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, i) => {
              const Icon = icons[value.icon] ?? icons.Star;
              return (
                <Reveal key={value.title} delay={i * 0.05}>
                  <div className="h-full rounded-[var(--radius-card)] border border-hairline bg-surface/50 p-7 transition-colors hover:border-iris/40">
                    <div className="grid h-11 w-11 place-items-center rounded-xl border border-hairline bg-base/60 text-amber">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-ink">{value.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {value.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="relative z-10 py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Why Tech Trix"
            title="Innovative, tech-driven"
            highlight="results"
            subtitle="We pair deep technical expertise with a client-focused approach — and a commitment to shipping."
          />
          <ul className="space-y-4">
            {whyChooseUs.map((item, i) => (
              <Reveal as="li" key={i} delay={i * 0.05}>
                <div className="flex items-start gap-3 rounded-2xl border border-hairline bg-surface/40 px-5 py-4">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-mint/15 text-mint">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-ink/90">{item}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <TeamSection />
      <CTASection
        title="Want to build something"
        highlight="together"
        subtitle="Tell us about your project and we'll show you how we can help."
      />
    </>
  );
}
