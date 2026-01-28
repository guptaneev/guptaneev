"use client";

import { useEffect, useState } from "react";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [showScrollPulse, setShowScrollPulse] = useState(false);

  useEffect(() => {
    setMounted(true);

    let idleTimer: NodeJS.Timeout;
    let animationTimer: NodeJS.Timeout;
    let isAnimating = false;

    const resetIdleTimer = () => {
      clearTimeout(idleTimer);
      clearTimeout(animationTimer);
      
      setShowScrollPulse(false);
      isAnimating = false;

      idleTimer = setTimeout(() => {
        startAnimationSequence();
      }, 4000);
    };

    const startAnimationSequence = () => {
      if (isAnimating) return;
      isAnimating = true;

      const runSequence = () => {
        // SCROLL CYCLE: Start immediately
        setShowScrollPulse(true);
        setTimeout(() => setShowScrollPulse(false), 3500);

        // Loop continuously at 5s
        animationTimer = setTimeout(() => {
          if (isAnimating) {
            runSequence();
          }
        }, 5000);
      };

      runSequence();
    };

    const handleActivity = () => {
      resetIdleTimer();
    };

    window.addEventListener('click', handleActivity);
    window.addEventListener('scroll', handleActivity);

    resetIdleTimer();

    return () => {
      clearTimeout(idleTimer);
      clearTimeout(animationTimer);
      window.removeEventListener('click', handleActivity);
      window.removeEventListener('scroll', handleActivity);
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
    <section className="h-screen relative bg-[#E8E8E8] text-[#0A0A0A] overflow-hidden font-sans selection:bg-[#FF5722] selection:text-white">
      
      <div className="relative z-10 w-full h-full min-h-screen flex flex-col p-6 sm:p-12">
        
        {/* Name and Tagline Container */}
        <div className="absolute top-[15%] left-[15%] right-[15%] flex items-start justify-between gap-8">
          
          {/* Name: Two lines, left-aligned */}
          <div className="flex-shrink-0">
            <h1 className="font-playfair font-black italic tracking-tighter leading-[0.85] text-[#0A0A0A]" style={{ fontSize: "clamp(4rem, 10vw, 8rem)" }}>
              Neev<br/>Gupta
            </h1>
          </div>

          {/* Tagline: Right side */}
          <div className="flex-shrink-0 pt-4">
            <p className="font-sans text-xl sm:text-2xl md:text-3xl font-medium text-right max-w-md leading-tight">
              I build AI systems that scale under <span className="text-[#FF5722]">pressure</span>
            </p>
          </div>
        </div>

        {/* Subheader: Below name, larger */}
        <div className="absolute top-[calc(15%+clamp(8rem,20vw,16rem)+2rem)] left-[15%]">
          <h2 className="font-sans text-base sm:text-lg md:text-xl font-bold uppercase tracking-wider">
            AUSTIN, TX • COMPUTER SCIENCE @ UT AUSTIN • LONGHORN POWERLIFTING • <a href="https://linkedin.com/in/neevgupta" target="_blank" rel="noopener noreferrer" className="inline-block border border-[#0A0A0A] px-1 mx-1 hover:bg-[#FF5722] hover:text-[#F5F5F5] hover:border-[#FF5722] transition-colors duration-200">LINKEDIN</a> • <a href="https://github.com/guptaneev" target="_blank" rel="noopener noreferrer" className="inline-block border border-[#0A0A0A] px-1 mx-1 hover:bg-[#FF5722] hover:text-[#F5F5F5] hover:border-[#FF5722] transition-colors duration-200">GITHUB</a>
          </h2>
        </div>

        {/* Navigation: Command Links */}
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 sm:gap-8 z-30">
          <div className="relative flex items-center justify-center">
            {showScrollPulse && (
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
                <div className="w-[12px] h-[12px] rounded-full bg-[#FF5722] animate-pulseStatic" style={{ willChange: 'transform, opacity', animationDelay: '0ms' }} />
              </div>
            )}
            <NavigationLink href="#selected-work" text="./selected_work" />
          </div>
          
          <div className="relative flex items-center justify-center">
            {showScrollPulse && (
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
                <div className="w-[12px] h-[12px] rounded-full bg-[#FF5722] animate-pulseStatic" style={{ willChange: 'transform, opacity', animationDelay: '200ms' }} />
              </div>
            )}
            <NavigationLink href="#technical-arsenal" text="./technical_arsenal" />
          </div>
          
          <div className="flex items-center">
            <div className="relative flex items-center justify-center">
              {showScrollPulse && (
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
                  <div className="w-[12px] h-[12px] rounded-full bg-[#FF5722] animate-pulseStatic" style={{ willChange: 'transform, opacity', animationDelay: '400ms' }} />
                </div>
              )}
              <NavigationLink href="#work-history" text="./work_history" />
            </div>
            <span className="font-mono text-sm sm:text-base text-[#0A0A0A] ml-1 animate-blink">_</span>
          </div>
        </div>

        {/* Scroll Indicator with Pulse */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="relative flex items-center justify-center w-[40px] h-[40px]">
            {showScrollPulse && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[18px] h-[18px] rounded-full bg-[#FF5722] animate-scrollPulse" style={{ willChange: 'transform, opacity' }} />
              </div>
            )}
            <div className="text-[#FF5722] text-2xl font-bold z-10">
              ↓
            </div>
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
