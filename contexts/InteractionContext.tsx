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
    "strength-atlas": {
      bg: "hsl(0, 0%, 95%)",
      tagline: "Evidence for strength training",
    },
    pinpoint: {
      bg: "rgba(255, 87, 34, 0.05)", // Warm orange tint
      tagline: "Concert safety at scale",
    },
    "stormops-console": {
      bg: "hsl(0, 0%, 95%)",
      tagline: "Operational intelligence for the grid",
    },
    nudge: {
      bg: "rgba(255, 87, 34, 0.05)",
      tagline: "Pressure monitoring for wheelchair users",
    },
    peco: {
      bg: "hsl(0, 0%, 95%)", // Light neutral to match others
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
