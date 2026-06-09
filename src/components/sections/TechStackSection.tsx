"use client";

import { motion } from "motion/react";
import { techStack } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** Tech-stack chip cloud with hover lift + border glow. */
export function TechStackSection() {
  return (
    <section className="relative z-10 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <SectionHeading
          eyebrow="Our toolkit"
          title="The stack behind every"
          highlight="build"
          align="center"
        />

        <motion.div
          className="mt-14 flex flex-wrap justify-center gap-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ show: { transition: { staggerChildren: 0.03 } } }}
        >
          {techStack.map((tech) => (
            <motion.span
              key={tech}
              variants={{
                hidden: { opacity: 0, y: 14 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -4 }}
              className="cursor-default rounded-full border border-hairline bg-surface/50 px-5 py-2.5 font-mono text-sm text-muted transition-colors hover:border-iris/50 hover:text-ink"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
