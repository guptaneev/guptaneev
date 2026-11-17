"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, LucideIcon } from "lucide-react";
import { useInteraction } from "@/contexts/InteractionContext";
import { useEffect, useRef } from "react";
import { Spotlight } from "@/components/ui/Spotlight";

interface LinkItem {
  url: string;
  icon?: LucideIcon;
}

interface CaseStudy {
  id: string;
  anchorId: string;
  title: string;
  thesis: string;
  constraints: string[];
  outcome: string;
  metric?: string;
  imageSrc?: string;
  images?: string[];
  imageAlt: string;
  links?: {
    github?: string | LinkItem;
    demo?: string | LinkItem;
    blog?: string | LinkItem;
    kaggle?: string | LinkItem;
    [key: string]: string | LinkItem | undefined;
  };
}

const caseStudies: CaseStudy[] = [
  {
    id: "clue-benchmark",
    anchorId: "clue-benchmark",
    title: "Clue Benchmark",
    thesis:
      "Synthetic logic puzzles for studying reasoning, uncertainty, and evidence sharing - evaluating whether an agent is supported, not merely lucky.",
    constraints: ["Python", "Synthetic Data", "Agent Evaluation"],
    outcome:
      "Generate a case, certify what the evidence supports, and score correctness, evidential support, abstention, and protocol failures separately. Runs offline without an API key or paid calls.",
    metric: "REASONING · UNCERTAINTY · EVIDENCE SHARING",
    imageSrc: "/clue-benchmark-site.png",
    imageAlt: "Clue Benchmark evidence certification workflow",
    links: {
      demo: "https://trustprism.github.io/clue-benchmark/",
      github: "https://github.com/TrustPrism/clue-benchmark",
    },
  },
  {
    id: "strength-atlas",
    anchorId: "strength-atlas",
    title: "Strength Atlas",
    thesis:
      "Web truth engine for strength training: crawl, verify, and rank evidence with a fine-tuned reranker in sub-200ms.",
    constraints: ["Python", "FastAPI", "PostgreSQL"],
    outcome:
      "Indexed 175+ programs and 476 claims across 83 sources with schema validation and URL quality scoring, sustaining 99% crawl success; validated reliability through a 120-test CI suite with 95% coverage.",
    metric: "175+ PROGRAMS · 476 CLAIMS · SUB-200MS",
    imageSrc: "/atlas.png",
    imageAlt: "Strength Atlas application interface",
    links: {
      demo: "https://strength-atlas-5bejgqq6uq-uc.a.run.app/app",
      github: "https://github.com/guptaneev/strength-atlas",
    },
  },
];

export function CaseStudiesSection() {
  const { activeProject, setActiveProject, projectThemes } = useInteraction();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = Array.from(section.querySelectorAll<HTMLElement>("[data-project-id]"));
    const intersections = new Map<Element, IntersectionObserverEntry>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => intersections.set(entry.target, entry));

        const visible = Array.from(intersections.values())
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActiveProject(visible.target.getAttribute("data-project-id"));
        }
      },
      { rootMargin: "-20% 0px -20% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [setActiveProject]);
  
  // Tagline follows the card currently entering the viewport as the user scrolls.
  const sectionTitle = activeProject
    ? projectThemes[activeProject]?.tagline || "Selected Projects"
    : "Selected Projects";

  return (
    <section ref={sectionRef} className="relative py-32 px-4 sm:px-6 lg:px-8">
      {/* Sticky Header - Responsive sizing */}
      <div className="project-title-scroll-follow z-40 -mx-4 sm:-mx-6 lg:-mx-8 mb-8 sm:mb-16 lg:mb-24 bg-background px-4 py-4 sm:px-6 lg:px-8 pointer-events-none">
        <motion.h2
          key={sectionTitle} // Trigger animation on change
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="font-sans font-black text-3xl sm:text-5xl lg:text-7xl tracking-tighter text-white mix-blend-difference bg-[#FF5722]/80 px-4 sm:px-6 py-2 sm:py-3 inline-block"
        >
          {sectionTitle}
        </motion.h2>
      </div>

      <div className="max-w-6xl mx-auto space-y-24 sm:space-y-32 lg:space-y-48">
        {caseStudies.map((study, index) => (
          <CaseStudyCard
            key={study.id}
            study={study}
            isReversed={index % 2 === 1}
          />
        ))}
      </div>
    </section>
  );
}

function CaseStudyCard({
  study,
  isReversed,
}: {
  study: CaseStudy;
  isReversed: boolean;
}) {
  const ref = useRef(null);
  
  // Parallax Effect
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]); // Image moves opposite to scroll
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.article
      ref={ref}
      style={{ opacity }}
      data-project-id={study.id}
      id={study.anchorId}
      className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center z-10 ${
        isReversed ? "lg:grid-flow-dense" : ""
      }`}
    >
      {/* Visual with Spotlight & Parallax */}
      <div className={`${isReversed ? "lg:col-start-2" : ""} relative`}>
        <Spotlight className="rounded-xl">
            <motion.div style={{ y }} className="relative z-10 p-4">
            {study.images ? (
                <div className="grid grid-cols-2 gap-4"> 
                {study.images.map((img, idx) => (
                    <div key={idx} className="relative aspect-[9/16] overflow-hidden bg-muted group rounded-sm">
                    <Image
                        src={img}
                        alt={`${study.imageAlt} ${idx + 1}`}
                        fill
                        className="object-contain transition-transform duration-700"
                    />
                    </div>
                ))}
                </div>
            ) : study.imageSrc ? (
                 <div className="relative aspect-[16/9] overflow-hidden bg-muted group rounded-sm">
                    <Image
                        src={study.imageSrc}
                        alt={study.imageAlt}
                        fill
                        className="object-cover transition-transform duration-700"
                    />
                </div>
            ) : (
              <div className="flex aspect-[16/9] items-end border-2 border-[#FF5722] bg-[#0A0A0A] p-6 font-mono text-sm uppercase tracking-widest text-[#F5F5F5]">
                <span><span className="text-[#FF5722]">01 //</span> evidence in, support out</span>
              </div>
            )}
            </motion.div>
        </Spotlight>
      </div>

      {/* Content */}
      <div className={`${isReversed ? "lg:col-start-1 lg:row-start-1" : ""} space-y-8`}>
        <div>
          <h3 className="font-sans font-black text-4xl sm:text-5xl text-foreground mb-4">
            {study.title}
          </h3>
          <p className="font-serif text-xl sm:text-2xl leading-relaxed text-foreground/80">
            {study.thesis}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {study.constraints.map((c) => (
            <span key={c} className="px-3 py-1 border border-foreground/20 text-sm font-mono text-foreground/60 uppercase tracking-widest">
              {c}
            </span>
          ))}
        </div>

        {study.metric && (
          <div className="font-mono text-xs uppercase tracking-widest text-foreground/60">
            {study.metric}
          </div>
        )}

        <div className="flex gap-4 pt-4">
          {study.links && Object.entries(study.links).map(([key, value]) => {
            if (!value) return null;
            
            const url = typeof value === 'string' ? value : value.url;
            const IconComponent = typeof value === 'string' 
              ? (key === 'github' ? Github : ExternalLink)
              : (value.icon || ExternalLink);
            
            return (
              <a 
                key={key}
                href={url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-foreground hover:text-primary transition-colors"
              >
                <IconComponent className="w-6 h-6" />
              </a>
            );
          })}
        </div>
      </div>
    </motion.article>
  );
}
