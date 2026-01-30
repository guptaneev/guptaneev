"use client";

import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { CaseStudiesSection } from "@/components/ProjectsSection";
import { SignatureSection } from "@/components/SignatureSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ContactSection } from "@/components/ContactSection";
import { ScrollProgress } from "@/components/ScrollProgress";
import { InteractionProvider, useInteraction } from "@/contexts/InteractionContext";
import { MoreProjectsSection } from "@/components/MoreProjectsSection";

function PortfolioContent() {
  const { activeProject, projectThemes } = useInteraction();

  const backgroundColor = activeProject
    ? projectThemes[activeProject]?.bg || "hsl(var(--background))"
    : "hsl(var(--background))";

  return (
    <div
      className="min-h-screen text-foreground transition-colors duration-500 ease-out"
      style={{ backgroundColor }}
    >
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Hero */}
      <HeroSection />

      {/* About - Condensed */}
      <AboutSection />

      {/* Case Studies */}
      <div id="selected-work">
        <CaseStudiesSection />
      </div>

      {/* More Projects - Brutalist Link */}
      <MoreProjectsSection />

      {/* Signature Section - Technical Skills */}
      <div id="technical-arsenal">
        <SignatureSection />
      </div>

      {/* Experience */}
      <div id="work-history">
        <ExperienceSection />
      </div>

      {/* Contact */}
      <ContactSection />
    </div>
  );
}

export default function Portfolio() {
  return (
    <InteractionProvider>
      <PortfolioContent />
    </InteractionProvider>
  );
}
