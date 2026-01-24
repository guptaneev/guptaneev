import { motion } from "framer-motion";
import { InfoCard } from "./InfoCard";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

// Featured projects (1–2 max)
const featuredProjects = [
  {
    title: "Pinpoint",
    description: "Concert safety platform for large live events",
    content: (
      <>
        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl group mb-4">
          <div className="absolute inset-0 flex">
            <div className="relative w-1/2 h-full bg-[#232d3f] overflow-hidden">
              <Image
                src="/pinpoint1.png"
                alt="Pinpoint Screenshot 1"
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={false}
                quality={90}
              />
            </div>
            <div className="relative w-1/2 h-full bg-[#1a2230] border-l border-[#005b41]/40 overflow-hidden">
              <Image
                src="/pinpoint2.png"
                alt="Pinpoint Screenshot 2"
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={false}
                quality={90}
              />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#008170]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <p className="text-[#e8edf3]">
          Concert safety platform combining live crowd visibility with direct
          communication to on-site medical teams. Powers real-time heatmaps and
          enables attendees to notify EMS in under 2 seconds across events with
          100,000+ attendees.
        </p>
      </>
    ),
    tags: ["TypeScript", "React", "Node.js", "Docker"],
    githubLink: "https://github.com/Texas-Convergent-Emergency-Team/Pinpoint",
  },
  {
    title: "PeCo - Generative AI in the Gym",
    description: "Gen AI Intensive Course Capstone Project",
    imageSrc: "/peco.jpg",
    imageAlt: "PeCo Project Screenshot",
    content: (
      <>
        <p className="text-[#e8edf3] mb-4">
          Conversational personal fitness coach using advanced AI techniques:
          prompt engineering, embeddings, RAG, and search grounding. Tackles
          barriers to gym access by delivering personalized coaching at scale.
        </p>
      </>
    ),
    tags: ["Python", "LangChain", "RAG", "ChromaDB"],
    links: [
      {
        href: "https://www.youtube.com/watch?v=FMurg0jzzXQ",
        label: "Demo",
        kind: "external" as const,
      },
      {
        href: "https://www.linkedin.com/pulse/how-can-we-use-generative-ai-gym-neev-gupta-iurnc/?trackingId=NTVZZCONS2eOJiMeSGJSww%3D%3D",
        label: "Blogpost",
        kind: "external" as const,
      },
      {
        href: "https://www.kaggle.com/code/guptaneev/peco-gen-ai-intensive-course-capstone",
        label: "Kaggle Notebook",
        kind: "external" as const,
      },
    ],
  },
];

// Secondary projects (smaller grid, less prominence)
const secondaryProjects = [
  {
    title: "Redact",
    description: "4th place — AkashML Hackathon",
    imageSrc: "/redact.png",
    imageAlt: "Redact scam detection platform",
    content: (
      <p className="text-[#cfd8e3] text-sm">
        AI-powered scam detection platform that analyzes text and images using
        LLMs and OCR to flag phishing and fraud.
      </p>
    ),
    tags: ["Akash API", "Akash Console", "OCR"],
    githubLink: "https://github.com/ChetanGorantla/redact",
  },
  {
    title: "Endure",
    description: "Fitness app for new gym-goers",
    imageSrc: "/endure.png",
    imageAlt: "Endure App Screenshot",
    content: (
      <p className="text-[#cfd8e3] text-sm">
        Fitness app with personalized workouts and progress tracking. Attracted
        ~600 installs.
      </p>
    ),
    tags: ["Swift", "SwiftUI", "iOS"],
  },
  {
    title: "Adoore",
    description: "City comparison tool for housing analytics",
    imageSrc: "/adoore.png",
    imageAlt: "Adoore City Comparison Tool Screenshot",
    content: (
      <p className="text-[#cfd8e3] text-sm">
        Full-stack housing analytics platform for cross-city comparison.
      </p>
    ),
    tags: ["Angular", "Java", "REST APIs"],
    githubLink: "https://github.com/guptaneev/adoore",
  },
  {
    title: "Mood-Based Playlist Generator",
    description: "Mood analysis for personalized playlists",
    imageSrc: "/csia.png",
    imageAlt: "Mood-Based Playlist Generator Screenshot",
    content: (
      <p className="text-[#cfd8e3] text-sm">
        Interactive mood analysis system for personalized playlist generation.
      </p>
    ),
    tags: ["Python", "REST APIs"],
    githubLink: "https://github.com/guptaneev/mood-based_playlist_generator",
  },
];

export function FeaturedProjectsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-24 px-4 sm:px-6 lg:px-8"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold mb-12 text-[#f3f6fb]"
      >
        Featured Work
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="w-full group"
          >
            <InfoCard
              {...project}
              className="bg-transparent border border-[#005b41]/50 hover:border-[#008170]/80 rounded-xl p-6 h-full transition-all duration-300"
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export function SecondaryProjectsSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mb-16 px-4 sm:px-6 lg:px-8">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between p-5 rounded-lg bg-[#1a2230] hover:bg-[#232d3f] border border-[#005b41]/60 hover:border-[#008170] transition-all duration-200"
        aria-expanded={expanded}
      >
        <span className="text-xl font-bold text-[#f3f6fb]">Other Projects</span>
        <ChevronDown
          className={`w-6 h-6 text-[#008170] transition-transform duration-300 ${
            expanded ? "rotate-180" : ""
          }`}
        />
      </button>

      <motion.div
        initial={false}
        animate={{
          opacity: expanded ? 1 : 0,
          height: expanded ? "auto" : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secondaryProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full group"
              >
                <InfoCard
                  {...project}
                  className="bg-transparent border border-[#005b41]/50 hover:border-[#008170]/80 rounded-xl p-6 h-full transition-all duration-300"
                  smallImage={true}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
