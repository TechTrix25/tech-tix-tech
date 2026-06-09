import { stats } from "@/data/content";
import { CountUp } from "@/components/ui/CountUp";
import { Reveal } from "@/components/ui/Reveal";

export function StatsSection() {
  return (
    <section className="relative z-10 overflow-hidden py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_120%_at_50%_0%,rgba(123,108,246,0.12),transparent)]"
      />
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-12 px-6 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.06} className="text-center">
            <p className="font-display text-5xl font-semibold text-ink sm:text-6xl">
              <span className="text-gradient">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </span>
            </p>
            <p className="mt-3 text-sm text-muted">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
