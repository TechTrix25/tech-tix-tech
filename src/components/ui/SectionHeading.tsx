"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

/** Word-by-word rise-in reveal, triggered once on scroll into view. */
function AnimatedWords({
  text,
  className,
  gradient = false,
  delay = 0,
}: {
  text: string;
  className?: string;
  gradient?: boolean;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  const words = text.split(" ");

  return (
    <span className={cn(gradient && "text-gradient", className)}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: reduced ? 0 : "110%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.7,
              delay: delay + i * 0.05,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && " "}
        </span>
      ))}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  /** Optional trailing fragment rendered with the gradient treatment. */
  highlight?: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <p className="eyebrow mb-4">{eyebrow}</p>
        </Reveal>
      )}
      <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl md:text-5xl">
        <AnimatedWords text={title} />
        {highlight && (
          <>
            {" "}
            <AnimatedWords text={highlight} gradient delay={title.split(" ").length * 0.05} />
          </>
        )}
      </h2>
      {subtitle && (
        <Reveal delay={0.1}>
          <p className="mt-5 text-pretty text-lg text-muted">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
