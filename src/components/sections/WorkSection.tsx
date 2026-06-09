"use client";

import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/work";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { SmartImage } from "@/components/ui/SmartImage";

/**
 * Work / case-study list. Hovering a row reveals a cursor-following image
 * preview (desktop). On mobile / reduced motion the thumbnail shows inline.
 */
export function WorkSection() {
  const reduced = useReducedMotion();
  const [active, setActive] = useState<number | null>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 250, damping: 28 });
  const y = useSpring(my, { stiffness: 250, damping: 28 });

  const onMove = (e: React.MouseEvent) => {
    mx.set(e.clientX);
    my.set(e.clientY);
  };

  const activeProject = projects.find((p) => p.id === active);

  return (
    <section id="work" className="relative z-10 py-24 sm:py-32" onMouseMove={onMove}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Selected work"
            title="Outcomes we've"
            highlight="shipped"
            subtitle="Real products for real businesses — built to perform and measured by results."
          />
          <ButtonLink href="/portfolio" variant="outline" withArrow className="shrink-0">
            View all work
          </ButtonLink>
        </div>

        <div className="mt-14 border-t border-hairline">
          {projects.map((project) => (
            <a
              key={project.id}
              href="/portfolio"
              onMouseEnter={() => setActive(project.id)}
              onMouseLeave={() => setActive(null)}
              className="group grid grid-cols-1 items-center gap-4 border-b border-hairline py-7 transition-colors hover:bg-white/[0.02] sm:grid-cols-[1fr_auto] sm:py-8"
            >
              <div className="flex items-baseline gap-5">
                <span className="font-mono text-sm text-muted">
                  {String(project.id).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-2xl font-semibold text-ink transition-colors group-hover:text-amber sm:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-1 max-w-md text-sm text-muted">{project.description}</p>
                </div>
              </div>

              {/* Inline thumb on mobile */}
              <div className="relative aspect-video w-full overflow-hidden rounded-xl sm:hidden">
                <SmartImage
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>

              <div className="flex items-center justify-between gap-6 sm:justify-end">
                <div className="text-right">
                  <p className="font-display text-xl font-semibold text-ink">
                    {project.metric}
                  </p>
                  <p className="text-xs text-muted">{project.metricLabel}</p>
                </div>
                <ArrowUpRight className="h-6 w-6 text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-amber" />
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Cursor-following preview (desktop, motion-enabled only) */}
      {!reduced && (
        <AnimatePresence>
          {activeProject && (
            <motion.div
              className="pointer-events-none fixed left-0 top-0 z-30 hidden sm:block"
              style={{ x, y, translateX: "-50%", translateY: "-50%" }}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative h-52 w-80 overflow-hidden rounded-2xl border border-hairline-strong shadow-depth">
                <SmartImage
                  src={activeProject.image}
                  alt={activeProject.title}
                  fill
                  sizes="320px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base/70 to-transparent" />
                <div className="absolute bottom-3 left-4 flex flex-wrap gap-1.5">
                  {activeProject.technologies.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-base/60 px-2 py-0.5 font-mono text-[10px] text-ink backdrop-blur"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </section>
  );
}
