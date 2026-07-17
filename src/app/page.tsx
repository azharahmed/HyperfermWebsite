import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { HeroSection } from "@/components/sections/hero-section";
import { WhatWeDoSection } from "@/components/sections/what-we-do-section";
import { WhyUsSection } from "@/components/sections/why-us-section";
import { IndustriesSection } from "@/components/sections/industries-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { TeamExpertiseSection } from "@/components/sections/team-expertise-section";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
        <HeroSection />
        <WhatWeDoSection />
        <WhyUsSection />
        <IndustriesSection />
        <HowItWorksSection />
        <TeamExpertiseSection />
      </main>
      <SiteFooter />
    </>
  );
}
