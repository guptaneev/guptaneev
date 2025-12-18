"use client";

import { HeroSection } from "@/components/HeroSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import {
  FeaturedProjectsSection,
  SecondaryProjectsSection,
} from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { EducationSection } from "@/components/EducationSection";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col">
      {/* Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <div className="flex-grow w-full max-w-7xl mx-auto">
        {/* Experience Section - Comes first after hero */}
        <ExperienceSection />

        {/* Featured Projects */}
        <FeaturedProjectsSection />

        {/* Other Projects - Dropdown */}
        <SecondaryProjectsSection />

        {/* Skills and Education Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 px-4 sm:px-6 lg:px-8">
          <SkillsSection />
          <EducationSection />
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 py-12 px-4 sm:px-6 lg:px-8 text-center text-gray-400 text-sm border-t border-gray-800/50">
        <p>© 2025 Neev Gupta. Built with Next.js, React, and TypeScript.</p>
      </footer>
    </div>
  );
}
