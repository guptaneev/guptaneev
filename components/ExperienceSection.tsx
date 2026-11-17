"use client";

import { motion, useScroll } from "framer-motion";
import { useRef, useState } from "react";

interface Experience {
  date: string;
  company: string;
  companyUrl?: string;
  role: string;
  outcome: string | string[];
  techStack?: string;
  descriptionLink?: { label: string; url: string };
  links?: { label: string; url: string }[];
}

const experiences: Experience[] = [
  {
    date: "Summer 2027",
    company: "Citadel Securities",
    role: "Software Engineering Intern",
    outcome: "Incoming software engineering intern",
  },
  {
    date: "Dec 2025–Present",
    company: "UT Austin: Trust Prism",
    companyUrl: "https://trustprism.tacc.utexas.edu/",
    role: "Undergraduate Research Assistant",
    outcome:
      "LLM benchmarking & CSP solver",
    descriptionLink: {
      label: "https://trustprism.github.io/clue-benchmark/",
      url: "https://trustprism.github.io/clue-benchmark/",
    },
    techStack: "Python, PyTorch, Multi-agent systems",
  },
  {
    date: "Jun 2026–Aug 2026",
    company: "State Farm",
    role: "Software Engineering Intern - Data & AI",
    outcome: "Multi-agent evals & LLM-as-a-judge",
    techStack: "Data Engineering, AI/ML, Python, LLM Evaluation",
  },
  {
    date: "Jun 2025–Aug 2025",
    company: "H-E-B Digital",
    role: "Software Engineering Intern",
    outcome: "PartnerNet intranet",
    techStack: "React, TypeScript, Salesforce Apex",
  },
];

export function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 50%"],
  });

  return (
    <section className="experience-section py-32 px-4 sm:px-6 lg:px-8 bg-background" ref={containerRef}>
      <div className="max-w-6xl mx-auto">
        {/* Brutalist Header */}
        <div className="mb-8 sm:mb-12 lg:mb-16 ml-0 sm:ml-8 lg:ml-[104px]">
          <h2 className="font-mono text-xs sm:text-sm uppercase tracking-widest text-foreground/60">
            {"// HISTORY"}
          </h2>
        </div>

        <div className="relative">
          {/* Orange Timeline - Consistent 2px width */}
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-[15px] top-0 bottom-0 w-[2px] bg-[#FF5722] origin-top"
          />

          {/* Experience Items with responsive spacing */}
          <div className="space-y-16 sm:space-y-24 lg:space-y-[225px]">
            {experiences.map((exp, index) => (
              <ExperienceItem 
                key={index} 
                experience={exp} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({ 
  experience, 
}: { 
  experience: Experience;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative grid grid-cols-1 lg:grid-cols-2 gap-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Left Column - Always Visible */}
      <div className="relative pl-16">
        {/* Circle pinned to line */}
        <div className="absolute left-0 top-0">
          <div className="relative w-[32px] h-[32px]">
            <div className="absolute inset-0 rounded-full bg-[#FF5722] border-2 border-background group-hover:scale-125 transition-transform duration-300" />
          </div>
        </div>

        {/* Company, Date, Role */}
        <div className="border-b border-border pb-8 group-hover:border-[#FF5722] transition-colors duration-300">
          <div className="mb-4">
            {experience.companyUrl ? (
              <a
                href={experience.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-sans font-bold text-2xl sm:text-3xl transition-colors inline-block text-foreground hover:text-[#FF5722] hover:underline underline-offset-4 ${isHovered ? 'text-[#FF5722]' : ''}`}
              >
                {experience.company}
              </a>
            ) : (
              <h3 className={`font-sans font-bold text-2xl sm:text-3xl transition-colors inline-block text-foreground ${isHovered ? 'text-[#FF5722]' : ''}`}>
                {experience.company}
              </h3>
            )}
            <div className="font-mono text-xs text-foreground/50 mt-1 uppercase tracking-wider">
              {experience.date}
            </div>
          </div>

          <div className="font-mono text-sm uppercase tracking-widest text-foreground/70">
            {experience.role}
          </div>
        </div>
      </div>

      {/* Right Column - Always visible on mobile via CSS, animated on desktop */}
      <div
        className="relative pl-16 lg:pl-0 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 lg:translate-x-0 lg:group-hover:translate-x-0 transition-all duration-400 lg:-translate-x-5"
      >
        {/* Description */}
        {experience.outcome &&
          (Array.isArray(experience.outcome) ? (
            <div className="space-y-3 mb-4">
              {experience.outcome.map((line) => (
                <div
                  key={line}
                  className="font-serif text-lg sm:text-xl leading-relaxed text-foreground/80"
                >
                  {line}
                </div>
              ))}
            </div>
          ) : (
            <div className="font-serif text-lg sm:text-xl leading-relaxed text-foreground/80 mb-4">
              {experience.outcome}
            </div>
          ))}

        {experience.descriptionLink && (
          <a
            href={experience.descriptionLink.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-4 block font-serif text-lg sm:text-xl leading-relaxed text-[#FF5722] underline decoration-1 underline-offset-4"
          >
            {experience.descriptionLink.label}
          </a>
        )}

        {/* Tech Stack */}
        {experience.techStack && (
          <div className="font-mono text-sm text-foreground/60 mb-2">
            <span className="text-[#FF5722]">Stack:</span> {experience.techStack}
          </div>
        )}

        {/* Links */}
        {experience.links && experience.links.length > 0 && (
          <div className="flex flex-col items-start gap-1">
            {experience.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-[#FF5722] hover:underline inline-block"
              >
                → {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
