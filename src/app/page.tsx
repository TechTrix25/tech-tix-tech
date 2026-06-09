import { Hero } from "@/components/hero/Hero";
import { TrustMarquee } from "@/components/sections/TrustMarquee";
import { StatementSection } from "@/components/sections/StatementSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ZoomShowcase } from "@/components/sections/ZoomShowcase";
import { WorkSection } from "@/components/sections/WorkSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustMarquee />
      <StatementSection />
      <ServicesSection />
      <ZoomShowcase />
      <WorkSection />
      <ProcessSection />
      <StatsSection />
      <TechStackSection />
      <TeamSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
