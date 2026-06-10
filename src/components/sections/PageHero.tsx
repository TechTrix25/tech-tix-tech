import { Reveal } from "@/components/ui/Reveal";

/** Compact hero used at the top of inner pages. */
export function PageHero({
  eyebrow,
  title,
  highlight,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  highlight: string;
  subtitle: string;
}) {
  return (
    <section className="relative overflow-hidden px-6 pt-32 pb-12 text-center sm:pt-40 sm:pb-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_90%_at_50%_-10%,rgba(123,108,246,0.18),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-amber/10 blur-[100px]"
      />
      <div className="relative mx-auto max-w-3xl">
        <Reveal>
          <p className="eyebrow mb-5">{eyebrow}</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="text-balance font-display text-4xl font-semibold leading-[1.05] sm:text-6xl">
            {title} <span className="text-gradient">{highlight}</span>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg text-muted">
            {subtitle}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
