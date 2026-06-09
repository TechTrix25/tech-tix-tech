import { team } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SmartImage } from "@/components/ui/SmartImage";

/** Team portrait cards with a hover reveal of role + name. */
export function TeamSection() {
  return (
    <section className="relative z-10 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="The people"
          title="A small team with"
          highlight="big range"
          subtitle="Passionate technologists who design, build, and ship — close to every project."
        />

        <div className="mt-14 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {team.map((member, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="group relative aspect-[3/4] overflow-hidden rounded-[var(--radius-card)] border border-hairline">
                <SmartImage
                  src={member.avatar}
                  alt={member.name.startsWith("TODO") ? "Team member portrait" : member.name}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  unoptimized
                  className="object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base via-base/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 translate-y-2 p-5 opacity-90 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="eyebrow">{member.role}</p>
                  <p className="mt-1 text-lg font-semibold text-ink">{member.name}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
