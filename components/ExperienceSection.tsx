"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

export function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 50%"],
  });

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-background" ref={containerRef}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4 relative">
                 <h2 className="font-sans font-bold text-foreground text-4xl tracking-tighter sticky top-32">
                    History
                </h2>
            </div>
            
            <div className="lg:col-span-8 relative space-y-24 pl-8 lg:pl-0">
                 {/* Animated Line */}
                 <motion.div 
                    style={{ scaleY: scrollYProgress }}
                    className="absolute left-0 lg:-left-8 top-2 bottom-0 w-0.5 bg-primary origin-top"
                 />
                 
                 <ExperienceItem 
                    date="2025–Present"
                    company="D3 Research Lab"
                    role="AI Researcher"
                    outcome="Designed trust-verification protocols for human–AI agent teams."
                 />
                 <ExperienceItem 
                    date="2025–Present"
                    company="Texas Convergent"
                    role="Software Engineer"
                    outcome="Shipped Pinpoint: <2s latency alerts for 100k+ concert attendees."
                 />
                 <ExperienceItem 
                    date="Summer 2025"
                    company="H-E-B Digital"
                    role="SWE Intern"
                    outcome="Built intranet modules serving 120k daily active employees."
                 />
                  <ExperienceItem 
                    date="Summer 2024"
                    company="Zonda"
                    role="SWE Intern"
                    outcome="Architected housing analytics engine for 50+ metro regions."
                 />
            </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({ date, company, role, outcome }: { date: string, company: string, role: string, outcome: string }) {
    return (
        <div className="group relative">
             {/* Dot indicator */}
            <div className="absolute -left-[33px] lg:-left-[41px] top-2.5 w-3 h-3 rounded-full bg-background border-2 border-primary group-hover:bg-primary transition-colors duration-300" />
            
            <div className="border-b border-border pb-8 hover:border-foreground transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-4">
                    <h3 className="font-sans font-bold text-2xl group-hover:text-primary transition-colors">{company}</h3>
                    <span className="font-mono text-sm text-foreground/50">{date}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                    <div className="sm:col-span-4 font-mono text-sm uppercase tracking-widest pt-1">{role}</div>
                    <div className="sm:col-span-8 font-serif text-xl leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                        {outcome}
                    </div>
                </div>
            </div>
        </div>
    )
}
