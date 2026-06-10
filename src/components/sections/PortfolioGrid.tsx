"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { projects, workCategories } from "@/data/work";
import { SmartImage } from "@/components/ui/SmartImage";
import { cn } from "@/lib/utils";

export function PortfolioGrid() {
  const [filter, setFilter] = useState<string>("all");

  const visible = projects.filter(
    (p) => filter === "all" || p.category === filter
  );

  return (
    <div className="mx-auto max-w-7xl px-6">
      {/* Filter pills */}
      <div className="mb-8 flex flex-wrap justify-center gap-2 sm:mb-12">
        {workCategories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setFilter(cat.id)}
            className={cn(
              "rounded-full px-5 py-2.5 text-sm font-medium transition-all",
              filter === cat.id
                ? "bg-white/10 text-ink shadow-[0_0_0_1px_var(--color-hairline-strong)]"
                : "text-muted hover:bg-white/5 hover:text-ink"
            )}
            aria-pressed={filter === cat.id}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="group overflow-hidden rounded-[var(--radius-card)] border border-hairline bg-surface/50"
            >
              <div className="relative aspect-video overflow-hidden">
                <SmartImage
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base/80 via-base/10 to-transparent" />
                <div className="absolute right-3 top-3 rounded-full bg-base/60 px-3 py-1 font-mono text-xs text-ink backdrop-blur">
                  {project.categoryLabel}
                </div>
                <div className="absolute bottom-3 left-4">
                  <p className="font-display text-2xl font-semibold text-ink">
                    {project.metric}
                  </p>
                  <p className="text-xs text-muted">{project.metricLabel}</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-ink">{project.title}</h3>
                <p className="mt-2 text-sm text-muted">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-hairline px-2 py-1 font-mono text-[11px] text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
