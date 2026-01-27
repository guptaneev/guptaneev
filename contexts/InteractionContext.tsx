"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface InteractionContextType {
  activeProject: string | null;
  setActiveProject: (project: string | null) => void;
  projectThemes: {
    [key: string]: {
      bg: string;
      tagline: string;
    };
  };
}

const InteractionContext = createContext<InteractionContextType | undefined>(
  undefined,
);

export function InteractionProvider({ children }: { children: ReactNode }) {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  console.log("Current active project:", activeProject);

  const projectThemes = {
    pinpoint: {
      bg: "rgba(255, 87, 34, 0.05)", // Warm orange tint
      tagline: "Concert safety at scale",
    },
    d3: {
      bg: "hsl(0, 0%, 88%)", // Darker neutral
      tagline: "Trust in human–AI collaboration",
    },
    peco: {
      bg: "hsl(0, 0%, 100%)", // Lighter neutral
      tagline: "Personalized training at scale",
    },
  };

  return (
    <InteractionContext.Provider
      value={{ activeProject, setActiveProject, projectThemes }}
    >
      {children}
    </InteractionContext.Provider>
  );
}

export function useInteraction() {
  const context = useContext(InteractionContext);
  if (context === undefined) {
    throw new Error("useInteraction must be used within InteractionProvider");
  }
  return context;
}
