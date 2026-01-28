"use client";

import { motion, useScroll } from "framer-motion";
import { useRef, useState } from "react";

interface Experience {
  date: string;
  company: string;
  role: string;
  outcome: string;
  techStack?: string;
  teamSize?: string;
  link?: string;
}

const experiences: Experience[] = [
  {
    date: "2025–Present",
    company: "D3 Research Lab",
    role: "AI Researcher",
    outcome: "Designed trust-verification protocols for human–AI agent teams.",
    techStack: "Python, PyTorch, Multi-agent systems",
    teamSize: "4 researchers",
  },
  {
    date: "2025–Present",
    company: "Texas Convergent",
    role: "Software Engineer",
    outcome: "Shipped Pinpoint: <2s latency alerts for 100k+ concert attendees.",
    techStack: "React, Node.js, WebSockets, MongoDB",
    teamSize: "5 engineers",
    link: "https://github.com/Texas-Convergent-Emergency-Team/Pinpoint",
  },
  {
    date: "Summer 2025",
    company: "H-E-B Digital",
    role: "SWE Intern",
    outcome: "Built intranet modules serving 120k daily active employees.",
    techStack: "React, TypeScript, Azure",
    teamSize: "8 engineers",
  },
  {
    date: "Summer 2024",
    company: "Zonda",
    role: "SWE Intern",
    outcome: "Architected housing analytics engine for 50+ metro regions.",
    techStack: "Python, PostgreSQL, AWS",
    teamSize: "6 engineers",
  },
];

export function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 50%"],
  });

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-background" ref={containerRef}>
      <div className="max-w-6xl mx-auto">
        {/* Brutalist Header */}
        <div className="mb-16">
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

          {/* Experience Items with uniform 225px spacing */}
          <div className="space-y-[225px]">
            {experiences.map((exp, index) => (
              <ExperienceItem key={index} experience={exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({ experience }: { experience: Experience }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative pl-16"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Circle pinned to line - line passes through center */}
      <div className="absolute left-0 top-0">
        <div className="relative w-[32px] h-[32px]">
          <div className="absolute inset-0 rounded-full bg-[#FF5722] border-2 border-background group-hover:scale-125 transition-transform duration-300" />
          
          {/* Hover info popup */}
          {isHovered && (experience.techStack || experience.teamSize || experience.link) && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="absolute left-12 top-0 bg-[#0A0A0A] text-[#F5F5F5] p-3 rounded-none border border-[#FF5722] whitespace-nowrap z-50 min-w-[200px]"
            >
              {experience.techStack && (
                <div className="font-mono text-xs mb-2">
                  <span className="text-[#FF5722]">Stack:</span> {experience.techStack}
                </div>
              )}
              {experience.teamSize && (
                <div className="font-mono text-xs mb-2">
                  <span className="text-[#FF5722]">Team:</span> {experience.teamSize}
                </div>
              )}
              {experience.link && (
                <a
                  href={experience.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-[#FF5722] hover:underline block"
                >
                  → View Project
                </a>
              )}
            </motion.div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="border-b border-border pb-8 group-hover:border-[#FF5722] transition-colors duration-300">
        <div className="mb-4">
          <h3 className="font-sans font-bold text-2xl sm:text-3xl text-foreground group-hover:text-[#FF5722] transition-colors">
            {experience.company}
          </h3>
          <div className="font-mono text-xs text-foreground/50 mt-1 uppercase tracking-wider">
            {experience.date}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
          <div className="sm:col-span-4 font-mono text-sm uppercase tracking-widest text-foreground/70">
            {experience.role}
          </div>
          <div className="sm:col-span-8 font-serif text-lg sm:text-xl leading-relaxed text-foreground/80 group-hover:text-foreground transition-opacity">
            {experience.outcome}
          </div>
        </div>
      </div>
    </div>
  );
}
