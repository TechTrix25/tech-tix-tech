import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { StatsSection } from "@/components/sections/StatsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Explore Tech Trix's latest projects — web platforms, mobile apps, and custom software — and the results we've delivered for our clients.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Our Work | Tech Trix Technologies",
    description:
      "Explore Tech Trix's latest projects — web platforms, mobile apps, and custom software built for real client results.",
    url: "/portfolio",
    type: "website",
  },
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Projects that moved the"
        highlight="needle"
        subtitle="Explore our latest work and see how we've helped businesses achieve their digital goals."
      />

      <section className="relative z-10 py-8 sm:py-12">
        <PortfolioGrid />
      </section>

      <StatsSection />
      <TestimonialsSection />
      <CTASection
        title="Have a project in"
        highlight="mind"
        subtitle="Let's discuss how Tech Trix can help bring your vision to life."
      />
    </>
  );
}
