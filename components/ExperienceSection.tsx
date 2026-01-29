"use client";

import { motion, useScroll } from "framer-motion";
import { useRef, useState } from "react";

interface Experience {
  date: string;
  company: string;
  role: string;
  outcome: string;
  techStack?: string;
  link?: string;
}

const experiences: Experience[] = [
  {
    date: "2025–Present",
    company: "D3 Research Lab",
    role: "AI Researcher",
    outcome: "Designed trust-verification protocols for human–AI agent teams.",
    techStack: "Python, PyTorch, Multi-agent systems",
  },
  {
    date: "2025–Present",
    company: "Texas Convergent",
    role: "Software Engineer",
    outcome: "Shipped Pinpoint: <2s latency alerts for 100k+ concert attendees.",
    techStack: "React, Node.js, WebSockets, MongoDB",
    link: "https://github.com/Texas-Convergent-Emergency-Team/Pinpoint",
  },
  {
    date: "Summer 2025",
    company: "H-E-B Digital",
    role: "SWE Intern",
    outcome: "Built intranet modules serving 120k daily active employees.",
    techStack: "React, TypeScript, Azure",
  },
  {
    date: "Summer 2024",
    company: "Zonda",
    role: "SWE Intern",
    outcome: "Architected housing analytics engine for 50+ metro regions.",
    techStack: "Python, PostgreSQL, AWS",
  },
];

export function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isAnyHovered, setIsAnyHovered] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 50%"],
  });

  const handleHoverStart = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsAnyHovered(true);
  };

  const handleHoverEnd = () => {
    // Wait 3s before allowing animation to restart
    timeoutRef.current = setTimeout(() => {
      setIsAnyHovered(false);
    }, 3000);
  };

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
                isAnyHovered={isAnyHovered}
                onHoverStart={handleHoverStart}
                onHoverEnd={handleHoverEnd}
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
  isAnyHovered,
  onHoverStart,
  onHoverEnd 
}: { 
  experience: Experience;
  isAnyHovered: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative grid grid-cols-1 lg:grid-cols-2 gap-8"
      onMouseEnter={() => {
        setIsHovered(true);
        onHoverStart();
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        onHoverEnd();
      }}
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
            <h3 className={`font-sans font-bold text-2xl sm:text-3xl transition-colors inline-block ${!isAnyHovered ? 'shine-text' : 'text-foreground'} ${isHovered ? 'text-[#FF5722]' : ''}`}>
              {experience.company}
            </h3>
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
        <div className="font-serif text-lg sm:text-xl leading-relaxed text-foreground/80 mb-4">
          {experience.outcome}
        </div>

        {/* Tech Stack */}
        {experience.techStack && (
          <div className="font-mono text-sm text-foreground/60 mb-2">
            <span className="text-[#FF5722]">Stack:</span> {experience.techStack}
          </div>
        )}

        {/* Link */}
        {experience.link && (
          <a
            href={experience.link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-[#FF5722] hover:underline inline-block"
          >
            → View Project
          </a>
        )}
      </div>
    </div>
  );
}
