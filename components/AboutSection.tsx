"use client";

import Image from "next/image";

export function AboutSection() {
  return (
    <section className="min-h-[72vh] bg-[#E8E8E8] text-[#0A0A0A] py-14 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-visible">
      <div className="max-w-7xl mx-auto h-full flex flex-col justify-start">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start lg:items-center relative">
          
          {/* Header - Brutalist Code Style - Fully visible */}
          <div className="lg:col-span-12 mb-4 ml-0 sm:ml-8 lg:ml-[104px]">
             <h2 className="font-mono text-sm sm:text-base font-bold text-[#0A0A0A] tracking-widest uppercase">
               {"// ABOUT"}
             </h2>
          </div>

          {/* Visual - Portrait */}
          <div id="about-portrait-anchor" className="lg:col-span-3 relative group">
            <div className="relative w-full aspect-[3/4] overflow-hidden">
               <Image
                  id="about-portrait"
                  src="/pfp.jpg" 
                  alt="Portrait of Neev Gupta"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 25vw"
               />
            </div>
            {/* Orange corner borders - outside overflow container */}
            <div className="absolute -top-1 -right-1 w-8 h-8 border-t-2 border-r-2 border-[#FF5722]" />
            <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-2 border-l-2 border-[#FF5722]" />
          </div>

          {/* Text Content - Full content visible on scroll */}
          <div className="lg:col-span-9 space-y-6 z-10 lg:pl-12">
            <div className="font-sans text-lg sm:text-xl leading-relaxed font-medium text-[#0A0A0A]">
              <p className="mb-6">
                Hey, I&apos;m Neev.
              </p>
              <p className="mb-6">
                Software/ML engineer and powerlifter at UT Austin.
              </p>
              <p className="mb-6">
                I&apos;m interested in AI agent evaluations, human-AI trust, and search and retrieval systems.
              </p>
              <p>
                <a className="text-[#FF5722] underline decoration-2 underline-offset-4" href="https://www.instagram.com/nevlifts" target="_blank" rel="noreferrer">@nevlifts</a> on Instagram
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
