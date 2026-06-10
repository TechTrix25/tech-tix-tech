import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/ui/Reveal";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web development, mobile apps, enterprise software, ERP & CRM, progressive web apps, and IT consulting — a comprehensive range of technology services from Tech Trix.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | Tech Trix Technologies",
    description:
      "Web, mobile, enterprise software, ERP & CRM, PWAs, and IT consulting — comprehensive technology services from Tech Trix.",
    url: "/services",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we offer"
        title="Technology services that help your business"
        highlight="thrive"
        subtitle="A comprehensive range of digital solutions, delivered end-to-end by a team that cares about outcomes."
      />

      <ServicesSection />

      {/* Detailed breakdown */}
      <section className="relative z-10 py-8 sm:py-16">
        <div className="mx-auto max-w-7xl space-y-12 px-6 sm:space-y-20">
          {services.map((service, i) => {
            const flip = i % 2 === 1;
            return (
              <div
                key={service.id}
                id={service.id}
                className="grid items-center gap-10 lg:grid-cols-2"
              >
                <Reveal className={cn(flip && "lg:order-2")}>
                  <div className="relative aspect-video overflow-hidden rounded-[var(--radius-card)] border border-hairline">
                    <ParallaxImage
                      src={service.image}
                      alt={service.title}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="absolute inset-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-base/60 to-transparent" />
                  </div>
                </Reveal>

                <Reveal delay={0.08} className={cn(flip && "lg:order-1")}>
                  <div>
                    <p className="eyebrow mb-3">{service.number}</p>
                    <h3 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-pretty text-muted">{service.description}</p>
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm text-ink/90">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-mint" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {service.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-hairline px-3 py-1 font-mono text-xs text-muted"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </section>

      <ProcessSection />
      <CTASection
        title="Ready to start your"
        highlight="project"
        subtitle="Contact us today to discuss how we can help bring your vision to life."
      />
    </>
  );
}
