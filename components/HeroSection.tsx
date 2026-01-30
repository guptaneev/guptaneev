"use client";

import { useEffect, useState } from "react";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [lineHeight, setLineHeight] = useState("150vh");
  const [nameOffset, setNameOffset] = useState(0);

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
    
    // Calculate the height from page top to AboutSection image and name offset
    const calculateLineHeight = () => {
      const nameElement = document.querySelector('.font-playfair');
      const aboutImage = document.querySelector('[alt="Portrait of Neev Gupta"]');
      
      if (nameElement && aboutImage) {
        const nameTop = nameElement.getBoundingClientRect().top + window.scrollY;
        const imageTop = aboutImage.getBoundingClientRect().top + window.scrollY;
        setNameOffset(nameTop);
        setLineHeight(`${imageTop}px`);
      }
    };

    // Wait for images to load before calculating
    setTimeout(calculateLineHeight, 100);
    window.addEventListener('resize', calculateLineHeight);
    
    return () => window.removeEventListener('resize', calculateLineHeight);
  }, []);

  if (!mounted) {
    return (
      <section className="min-h-screen relative bg-[#E8E8E8] overflow-hidden flex flex-col justify-between">
         {/* Server-side fallback */}
      </section>
    );
  }

  return (
    <section className="min-h-[70vh] lg:h-[70vh] relative bg-[#E8E8E8] text-[#0A0A0A] font-sans selection:bg-[#FF5722] selection:text-white">
      
      <div className="relative z-10 w-full h-full flex flex-col p-6 sm:p-8 lg:p-12">
        
        {/* Name and Tagline Container - Responsive layout */}
        <div className="pt-8 sm:pt-12 lg:pt-0 lg:absolute lg:top-[15%] lg:left-[15%] lg:right-[8%] flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-8">
          
          {/* Name: Two lines, left-aligned */}
          <div className="flex-shrink-0 relative pl-4 sm:pl-8 lg:pl-0">
            {/* Decorative orange vertical lines - hidden on mobile, extend from page top to image */}
            <div 
              className="hidden lg:block absolute -left-8 w-[3px] bg-[#FF5722]"
              style={{ top: `-${nameOffset}px`, height: lineHeight }}
            ></div>
            <div 
              className="hidden lg:block absolute -left-12 w-[3px] bg-[#FF5722]"
              style={{ top: `-${nameOffset}px`, height: lineHeight }}
            ></div>
            
            <h1 className="font-playfair font-black italic tracking-tighter leading-[0.85] text-[#0A0A0A]" style={{ fontSize: "clamp(3.5rem, 13.5vw, 10.8rem)" }}>
              Neev<br/>Gupta
            </h1>
          </div>

          {/* Tagline: Right on desktop, below on mobile */}
          <div className="flex-shrink-0 pt-0 lg:pt-4 flex flex-col items-start lg:items-end gap-6 lg:gap-8 pl-4 sm:pl-8 lg:pl-0">
            <p className="font-mono text-base sm:text-lg lg:text-xl text-[#0A0A0A] tracking-wide leading-relaxed max-w-md lg:max-w-lg text-right">
              I build <span className="text-[#FF5722]">full-stack</span> applications and research <span className="text-[#FF5722]">ML systems</span>.
            </p>
            
            {/* Quick Access Links */}
            <div className="flex flex-col items-start lg:items-end gap-3 lg:-mr-8 mt-4 lg:mt-12">
              <span className="font-mono text-xs uppercase tracking-widest text-[#0A0A0A] opacity-60">Quick Access</span>
              <div className="flex flex-col items-start lg:items-end gap-3 border-2 border-[#0A0A0A] bg-[#F5F5F5] px-4 sm:px-6 py-3 sm:py-4">
                <a href="#selected-work" onClick={(e) => handleSmoothScroll(e, "selected-work")} className="font-mono text-base lg:text-lg text-[#0A0A0A] hover:text-[#FF5722] transition-colors duration-200 group">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 mr-2">→</span>
                  Selected Work
                </a>
                <a href="#technical-arsenal" onClick={(e) => handleSmoothScroll(e, "technical-arsenal")} className="font-mono text-base lg:text-lg text-[#0A0A0A] hover:text-[#FF5722] transition-colors duration-200 group">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 mr-2">→</span>
                  Technical Skills
                </a>
                <a href="#work-history" onClick={(e) => handleSmoothScroll(e, "work-history")} className="font-mono text-base lg:text-lg text-[#0A0A0A] hover:text-[#FF5722] transition-colors duration-200 group">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 mr-2">→</span>
                  Work History
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Subheader: Below name - responsive positioning */}
        <div className="mt-8 lg:mt-0 lg:absolute lg:top-[calc(15%+clamp(10.8rem,27vw,21.6rem)+2rem)] lg:left-[15%] flex flex-col gap-3 pl-4 sm:pl-8 lg:pl-0">
          <h2 className="font-sans text-sm sm:text-base md:text-lg font-medium uppercase tracking-wider">
            AUSTIN, TX • CS @ UT AUSTIN
          </h2>
          {/* Social links below - less dominant */}
          <div className="flex gap-3">
            <a href="https://linkedin.com/in/neevgupta" target="_blank" rel="noopener noreferrer" className="font-sans text-xs sm:text-sm font-normal border-2 border-[#0A0A0A] px-2 py-1 hover:bg-[#FF5722] hover:text-[#F5F5F5] hover:border-[#FF5722] transition-colors duration-200">LinkedIn</a>
            <a href="https://github.com/guptaneev" target="_blank" rel="noopener noreferrer" className="font-sans text-xs sm:text-sm font-normal border-2 border-[#0A0A0A] px-2 py-1 hover:bg-[#FF5722] hover:text-[#F5F5F5] hover:border-[#FF5722] transition-colors duration-200">GitHub</a>
          </div>
        </div>


      </div>
    </section>
  );
}

