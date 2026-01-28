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
    <section className="min-h-screen relative bg-[#E8E8E8] text-[#0A0A0A] overflow-hidden font-sans selection:bg-[#FF5722] selection:text-white">
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

      {/* Live Metrics - Top Right */}
      <div className="absolute top-8 right-[92px] sm:right-[124px] text-right font-mono text-xs sm:text-sm z-20">
        <div className="flex flex-col gap-1">
          <span>Systems live: <span className="text-[#FF5722]">3</span></span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 w-full h-full min-h-screen flex flex-col p-6 sm:p-12">
        
        {/* Name Area with Weaving Line */}
        <div 
          className="absolute top-[8%] left-[8%] sm:left-[10%] w-[110%] overflow-visible pointer-events-none flex items-center"
          style={{ height: "clamp(4rem, 12vw, 12rem)" }}
        >
          {/* Horizontal Strikethrough - SVG now inside same stacking context */}
          <svg className="absolute inset-x-0 w-full h-full pointer-events-none overflow-visible" style={{ zIndex: 20 }}>
            <line 
              x1="-10%" y1="50%" 
              x2="110%" y2="50%" 
              stroke="#FF5722" 
              strokeWidth="3"
            />
          </svg>

          <h1 
            className="font-playfair font-black italic tracking-tighter leading-[0.85] text-[#0A0A0A] whitespace-nowrap flex relative"
            style={{ fontSize: "clamp(4rem, 12vw, 12rem)" }}
          >
            {"Neev Gupta".split("").map((char, i) => {
              // Custom weaving pattern: [behind, front, front, behind, front, behind, front, behind, behind, front]
              // Creates irregular rhythm: N(behind), e(front), e(front), v(behind), space(front), G(behind), u(front), p(behind), t(behind), a(front)
              const weavePattern = [10, 30, 30, 10, 30, 10, 30, 10, 10, 30];
              const zIndex = weavePattern[i] || 20;
              
              return (
                <span 
                  key={i} 
                  className="relative block mix-blend-multiply"
                  style={{ 
                    marginRight: char === " " ? "0.25em" : "-0.02em",
                    zIndex: zIndex
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              );
            })}
          </h1>
        </div>

        {/* Subheader: Small caps, offset */}
        <div className="absolute top-[calc(8%+clamp(4rem,12vw,12rem))] left-[10%] mt-4 sm:mt-8">
            <h2 className="font-sans text-xs sm:text-sm font-bold uppercase tracking-wider relative top-[2px] z-30">
                AUSTIN, TX • COMPUTER SCIENCE @ UT AUSTIN • LONGHORN POWERLIFTING • <a href="https://linkedin.com/in/neevgupta" target="_blank" rel="noopener noreferrer" className="inline-block border border-[#0A0A0A] px-1 mx-1 hover:bg-[#FF5722] hover:text-[#F5F5F5] hover:border-[#FF5722] transition-colors duration-200">LINKEDIN</a> • <a href="https://github.com/guptaneev" target="_blank" rel="noopener noreferrer" className="inline-block border border-[#0A0A0A] px-1 mx-1 hover:bg-[#FF5722] hover:text-[#F5F5F5] hover:border-[#FF5722] transition-colors duration-200">GITHUB</a>
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
            <NavigationLink href="#selected-work" text="./selected_work" />
            <NavigationLink href="#technical-arsenal" text="./technical_arsenal" />
            <div className="flex items-center">
              <NavigationLink href="#work-history" text="./work_history" />
              <span className="font-mono text-sm sm:text-base text-[#0A0A0A] ml-1 animate-blink">_</span>
            </div>
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
      className={`group relative inline-block font-mono text-sm sm:text-base text-[#0A0A0A] transition-colors duration-200 ${className}`}
    >
      <span className="relative">
        <span className="opacity-100 group-hover:opacity-100 transition-opacity duration-200">
          [<span className="opacity-0 group-hover:opacity-100 text-[#FF5722] transition-opacity duration-200">&gt; </span>{text}]
        </span>
      </span>
    </a>
  );
}
