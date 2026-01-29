"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { useInteraction } from "@/contexts/InteractionContext";
import { useRef } from "react";
import { Spotlight } from "@/components/ui/Spotlight";

interface CaseStudy {
  id: string;
  anchorId: string;
  title: string;
  thesis: string;
  constraints: string[];
  outcome: string;
  imageSrc?: string;
  images?: string[];
  imageAlt: string;
  links?: {
    github?: string;
    demo?: string;
    blog?: string;
    kaggle?: string;
  };
}

const caseStudies: CaseStudy[] = [
  {
    id: "pinpoint",
    anchorId: "emergency-response",
    title: "Pinpoint",
    thesis:
      "Concert safety can't wait. Alerts delivered to EMS in <2 seconds.",
    constraints: ["Real-time latency", "Crowd density", "Network partitions"],
    outcome: "Live heatmaps + instant alerts for 100,000+ attendees",
    images: ["/pinpoint1.png", "/pinpoint2.png"],
    imageAlt: "Pinpoint concert safety platform screenshots",
    links: {
      github: "https://github.com/Texas-Convergent-Emergency-Team/Pinpoint",
    },
  },
  {
    id: "d3",
    anchorId: "constraint-solver",
    title: "D3 AI Trust",
    thesis:
      "When to trust AI? A multi-agent system for studying human–AI dynamics.",
    constraints: ["Procedural generation", "Difficulty scaling", "Validity"],
    outcome: "Backend logic for large-scale trust experiments",
    imageSrc: "/d3-research.jpg",
    imageAlt: "AI trust research visualization",
    links: {},
  },
  {
    id: "peco",
    anchorId: "peco-fitness",
    title: "PeCo",
    thesis:
      "Personalized training at scale. RAG-powered AI coach using ChromaDB.",
    constraints: ["Context retrieval", "Personalization", "Coherence"],
    outcome: "Gen AI Intensive capstone with search grounding",
    imageSrc: "/peco.jpg",
    imageAlt: "PeCo AI fitness coach interface",
    links: {
      demo: "https://www.youtube.com/watch?v=FMurg0jzzXQ",
      blog: "https://www.linkedin.com/pulse/how-can-we-use-generative-ai-gym-neev-gupta-iurnc/",
      kaggle: "https://www.kaggle.com/code/guptaneev/peco-gen-ai-intensive-course-capstone",
    },
  },
];

export function CaseStudiesSection() {
  const { activeProject, projectThemes } = useInteraction();
  
  // Tagline depends on hover state
  const sectionTitle = activeProject
    ? projectThemes[activeProject]?.tagline || "Selected Works"
    : "Selected Works";

  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8">
      {/* Sticky Header - Crucial for Visibility */}
      <div className="sticky top-8 z-40 mb-24 pointer-events-none">
        <motion.h2
          key={sectionTitle} // Trigger animation on change
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="font-sans font-black text-5xl sm:text-7xl tracking-tighter text-white mix-blend-difference bg-[#FF5722]/80 px-6 py-3 inline-block"
        >
          {sectionTitle}
        </motion.h2>
      </div>

      <div className="max-w-6xl mx-auto space-y-48">
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
  const { setActiveProject } = useInteraction();
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
      onMouseEnter={() => setActiveProject(study.id)}
      onMouseLeave={() => setActiveProject(null)}
      id={study.anchorId}
      className={`relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10 ${
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
                    <div key={idx} className="relative aspect-[4/3] overflow-hidden bg-muted group rounded-sm">
                    <Image
                        src={img}
                        alt={`${study.imageAlt} ${idx + 1}`}
                        fill
                        className="object-cover transition-transform duration-700"
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
            ) : null}
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

        <div className="flex gap-4 pt-4">
          {study.links?.github && (
            <a href={study.links.github} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </a>
          )}
          {(study.links?.demo || study.links?.blog) && (
             <a href={study.links.demo || study.links.blog} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
              <ExternalLink className="w-6 h-6" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
