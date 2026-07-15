import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { HeroSection } from "@/components/sections/hero-section";
import { WhatWeDoSection } from "@/components/sections/what-we-do-section";
import { ProblemSection } from "@/components/sections/problem-section";
import { BuddhiSection } from "@/components/sections/buddhi-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { IndustriesSection } from "@/components/sections/industries-section";
import { WhyUsSection } from "@/components/sections/why-us-section";
import { TeamExpertiseSection } from "@/components/sections/team-expertise-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
        <HeroSection />
        <WhatWeDoSection />
        <ProblemSection />
        <BuddhiSection />
        <HowItWorksSection />
        <IndustriesSection />
        <WhyUsSection />
        <TeamExpertiseSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
