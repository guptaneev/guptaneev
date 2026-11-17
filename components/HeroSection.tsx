"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [lineHeight, setLineHeight] = useState("0px");

  // Smooth scroll handler
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (!element) return;

    const targetPosition = element.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1200;
    let startTime: number | null = null;

    function animation(currentTime: number) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      const ease = progress < 0.5 
        ? 2 * progress * progress 
        : -1 + (4 - 2 * progress) * progress;

      window.scrollTo(0, startPosition + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }

    requestAnimationFrame(animation);
  };

  useEffect(() => {
    setMounted(true);

    const updateLineHeight = () => {
      const portraitAnchor = document.getElementById("about-portrait-anchor");
      if (portraitAnchor) {
        const top = portraitAnchor.getBoundingClientRect().top + window.scrollY;
        setLineHeight(`${Math.max(0, Math.round(top))}px`);
      }
    };

    const frame = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(updateLineHeight);
    });
    const timeout = window.setTimeout(updateLineHeight, 600);
    window.addEventListener("resize", updateLineHeight);

    const portraitAnchor = document.getElementById("about-portrait-anchor");
    const observer = portraitAnchor ? new ResizeObserver(updateLineHeight) : null;
    observer?.observe(portraitAnchor as Element);
    document.fonts?.ready.then(updateLineHeight);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
      window.removeEventListener("resize", updateLineHeight);
      observer?.disconnect();
    };
  }, []);

  if (!mounted) {
    return (
      <section className="min-h-screen relative bg-[#E8E8E8] overflow-hidden flex flex-col justify-between">
         {/* Server-side fallback */}
      </section>
    );
  }

  return (
    <section className="min-h-[64vh] xl:h-[64vh] relative bg-[#E8E8E8] text-[#0A0A0A] font-sans selection:bg-[#FF5722] selection:text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[calc(15%_-_5rem)] top-0 z-30 hidden w-[3px] bg-[#FF5722] xl:block 2xl:left-[calc(15%_-_2rem)]"
        style={{ height: lineHeight }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[calc(15%_-_6rem)] top-0 z-30 hidden w-[3px] bg-[#FF5722] xl:block 2xl:left-[calc(15%_-_3rem)]"
        style={{ height: lineHeight }}
      />

      <div className="relative z-10 flex h-full min-w-0 w-full flex-col p-6 sm:p-8 xl:p-12">
        
        {/* Name and Tagline Container - Responsive layout */}
        <div className="pt-8 sm:pt-12 xl:pt-0 xl:absolute xl:top-[15%] xl:left-[15%] xl:right-[8%] flex flex-col xl:flex-row xl:items-start xl:justify-between gap-8 xl:gap-8">
          
          {/* Name: Two lines, left-aligned */}
          <div className="flex-shrink-0 relative pl-4 sm:pl-8 xl:pl-0">
            <h1 className="font-playfair font-black italic tracking-tighter leading-[0.85] text-[#0A0A0A]" style={{ fontSize: "clamp(3.5rem, 13.5vw, 10.8rem)" }}>
              Neev<br/>Gupta
            </h1>
          </div>

          {/* Tagline: Right on desktop, below on mobile */}
          <div className="flex-shrink-0 pt-0 xl:pt-4 flex flex-col items-start xl:items-end gap-6 xl:gap-8 pl-4 sm:pl-8 xl:pl-0">
            {/* Quick Access Links */}
            <div className="flex flex-col items-start xl:items-end gap-3 xl:-mr-8 mt-4 xl:mt-12">
              <span className="font-mono text-xs uppercase tracking-widest text-[#0A0A0A] opacity-60">Quick Access</span>
              <div className="flex flex-col items-start lg:items-end gap-3 border-2 border-[#0A0A0A] bg-[#F5F5F5] px-4 sm:px-6 py-3 sm:py-4">
                <a href="#selected-work" onClick={(e) => handleSmoothScroll(e, "selected-work")} className="font-mono text-base xl:text-lg text-[#0A0A0A] hover:text-[#FF5722] transition-colors duration-200 group">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 mr-2">→</span>
                  Selected Projects
                </a>
                <a href="#work-history" onClick={(e) => handleSmoothScroll(e, "work-history")} className="font-mono text-base xl:text-lg text-[#0A0A0A] hover:text-[#FF5722] transition-colors duration-200 group">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 mr-2">→</span>
                  Work History
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Subheader: Below name - responsive positioning */}
        <div className="mt-8 w-full min-w-0 xl:mt-0 xl:absolute xl:top-[calc(15%+clamp(10.8rem,27vw,21.6rem)+2rem)] xl:left-[15%] flex flex-col gap-3 pl-4 sm:pl-8 xl:pl-0">
          <h2 className="max-w-full break-words font-sans text-sm sm:text-base md:text-lg font-medium uppercase tracking-wider">
            AUSTIN, TX • CS @ UT AUSTIN <span className="block text-[#0A0A0A] sm:inline">• incoming @ Citadel Securities</span>
          </h2>
          <div className="grid w-[calc(100vw-4rem)] max-w-full grid-cols-1 gap-3 pt-2 sm:w-full sm:flex sm:flex-wrap">
            <a href="mailto:neevgupta@utexas.edu" className="group inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-[#0A0A0A] bg-[#F5F5F5] px-4 py-2 font-mono text-sm uppercase tracking-wider text-[#0A0A0A] shadow-[4px_4px_0_#FF5722] transition-all duration-200 hover:-translate-y-1 hover:bg-[#FF5722] hover:text-[#F5F5F5] hover:shadow-[6px_6px_0_#0A0A0A] sm:w-auto">
              <Mail className="h-4 w-4 transition-transform group-hover:rotate-12" /> Email
            </a>
            <a href="https://linkedin.com/in/neevgupta" target="_blank" rel="noopener noreferrer" className="group inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-[#0A0A0A] bg-[#F5F5F5] px-4 py-2 font-mono text-sm uppercase tracking-wider text-[#0A0A0A] shadow-[4px_4px_0_#FF5722] transition-all duration-200 hover:-translate-y-1 hover:bg-[#FF5722] hover:text-[#F5F5F5] hover:shadow-[6px_6px_0_#0A0A0A] sm:w-auto">
              <Linkedin className="h-4 w-4 transition-transform group-hover:rotate-12" /> LinkedIn
            </a>
            <a href="https://github.com/guptaneev" target="_blank" rel="noopener noreferrer" className="group inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-[#0A0A0A] bg-[#F5F5F5] px-4 py-2 font-mono text-sm uppercase tracking-wider text-[#0A0A0A] shadow-[4px_4px_0_#FF5722] transition-all duration-200 hover:-translate-y-1 hover:bg-[#FF5722] hover:text-[#F5F5F5] hover:shadow-[6px_6px_0_#0A0A0A] sm:w-auto">
              <Github className="h-4 w-4 transition-transform group-hover:rotate-12" /> GitHub
            </a>
          </div>
        </div>


      </div>
    </section>
  );
}
