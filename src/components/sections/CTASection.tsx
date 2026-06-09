import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/data/site";

export function CTASection({
  title = "Ready to transform your",
  highlight = "digital presence",
  subtitle = "Let's collaborate to create innovative solutions that drive your business forward.",
}: {
  title?: string;
  highlight?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative z-10 px-6 py-24 sm:py-32">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[28px] border border-hairline bg-surface/60 px-8 py-16 text-center sm:px-16">
        {/* layered glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_140%_at_50%_-10%,rgba(123,108,246,0.22),transparent),radial-gradient(60%_120%_at_50%_120%,rgba(255,178,62,0.18),transparent)]"
        />
        <div className="relative">
          <Reveal>
            <h2 className="text-balance font-display text-3xl font-semibold leading-tight sm:text-5xl">
              {title} <span className="text-gradient">{highlight}</span>?
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-lg text-muted">
              {subtitle}
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <ButtonLink href="/contact" size="lg" withArrow>
                Get a quote
              </ButtonLink>
              <ButtonLink href={`mailto:${site.contact.email}`} size="lg" variant="outline">
                Email us
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
