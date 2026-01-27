"use client";

import { useEffect, useState } from "react";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="min-h-screen relative bg-[#F5F5F5] overflow-hidden flex flex-col justify-between">
         {/* Server-side fallback / Loading state */}
      </section>
    );
  }

  return (
    <section className="min-h-screen relative bg-[#F5F5F5] text-[#0A0A0A] overflow-hidden font-sans selection:bg-[#FF5722] selection:text-white">
      {/* Diagonal Line - Static 23deg */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: "linear-gradient(23deg, transparent 49.9%, #FF5722 50%, transparent 50.1%)",
          opacity: 0.9
        }}
      />

      {/* ASCII Borders */}
      <div className="absolute top-4 left-4 text-[#999999] font-mono leading-none select-none z-10 hidden sm:block">
        ╔═══╗<br/>║   ║<br/>╚═══╝
      </div>
      <div className="absolute top-4 right-4 text-[#999999] font-mono leading-none select-none z-10 hidden sm:block">
        ╔═══╗<br/>║   ║<br/>╚═══╝
      </div>
      <div className="absolute bottom-4 left-4 text-[#999999] font-mono leading-none select-none z-10 hidden sm:block">
        ╔═══╗<br/>║   ║<br/>╚═══╝
      </div>
      <div className="absolute bottom-4 right-4 text-[#999999] font-mono leading-none select-none z-10 hidden sm:block">
        ╔═══╗<br/>║   ║<br/>╚═══╝
      </div>

      {/* Live Metrics - Top Right - Moved left by 60px relative to original right-8/16 */}
      {/* Original was right-8 (32px). Adding 60px -> right-[92px]. sm:right-16 (64px) + 60px -> sm:right-[124px] */}
      <div className="absolute top-8 right-[92px] sm:right-[124px] text-right font-mono text-xs sm:text-sm z-20">
        <div className="flex flex-col gap-1">
          <span>Systems live: <span className="text-[#FF5722]">3</span></span>
          {/* Users served line removed */}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 w-full h-full min-h-screen flex flex-col p-6 sm:p-12">
        
        {/* Name: Massive, Clamp, Cutoff */}
        <div className="absolute top-[10%] left-[8%] sm:left-[10%] mix-blend-multiply w-[110%] overflow-hidden pointer-events-none">
          <h1 
            className="font-playfair font-black italic tracking-tighter leading-[0.85] text-[#0A0A0A] whitespace-nowrap"
            style={{ fontSize: "clamp(4rem, 12vw, 12rem)" }}
          >
            Neev Gupta
          </h1>
        </div>

        {/* Subheader: Small caps, offset */}
        <div className="absolute top-[calc(10%+clamp(4rem,12vw,12rem))] left-[10%] mt-4 sm:mt-8">
            <h2 className="font-sans text-xs sm:text-sm font-bold uppercase tracking-wider relative top-[2px]">
                AUSTIN, TX • CS @ UT AUSTIN • LONGHORN POWERLIFTING
            </h2>
        </div>

        {/* Tagline: Centered Vertically */}
        <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-center items-center px-4 pointer-events-none">
            <p className="font-sans text-xl sm:text-3xl md:text-5xl font-medium text-center max-w-4xl leading-tight">
                I build AI systems that scale under <span className="text-[#FF5722]">pressure</span>
            </p>
        </div>

        {/* Tech Stack: Bottom Left, Rotated */}
        {/* Moved up by 40px. Original bottom-12 (3rem/48px). New: bottom-[88px] */}
        <div className="absolute bottom-[88px] left-8 sm:left-12 origin-bottom-left -rotate-[1.2deg]">
            <p className="text-sm font-sans font-bold opacity-80 text-[#0A0A0A]">
                React • Node • PyTorch • MongoDB
            </p>
        </div>

        {/* Navigation: Command Links */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 sm:gap-8 z-30">
            <NavigationLink href="#emergency-response" text="./emergency_response" />
            <NavigationLink href="#constraint-solver" text="./constraint_solver" className="-ml-[3px]" />
            <NavigationLink href="#peco-fitness" text="./peco_fitness" />
        </div>
      </div>
    </section>
  );
}

function NavigationLink({ href, text, className = "" }: { href: string; text: string; className?: string }) {
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (!element) return;

    const targetPosition = element.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    // const distance = targetPosition - startPosition; // This distance can be negative
    const distance = targetPosition - startPosition;
    const duration = 1200;
    let startTime: number | null = null;

    function animation(currentTime: number) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      // Ease-in-out function
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

  return (
    <a 
      href={href}
      onClick={handleClick}
      className={`group relative inline-block font-mono text-sm sm:text-base text-[#0A0A0A] hover:text-[#FF5722] transition-colors duration-75 ${className}`}
    >
      <span className="relative z-10 group-hover:block hidden absolute inset-0 bg-[#0A0A0A] text-[#F5F5F5] px-1 -mx-1 animate-pulse">
        {text}
      </span>
      <span className="relative z-0 group-hover:opacity-0 transition-opacity">
        {text}
      </span>
      <span className="absolute left-0 bottom-0 w-full h-[1px] bg-[#FF5722] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-150" />
    </a>
  );
}
