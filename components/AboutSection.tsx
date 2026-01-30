"use client";

import Image from "next/image";

export function AboutSection() {
  return (
    <section className="min-h-screen bg-[#E8E8E8] text-[#0A0A0A] py-20 px-4 sm:px-6 lg:px-8 relative overflow-visible">
      <div className="max-w-7xl mx-auto h-full flex flex-col justify-start">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start lg:items-center relative">
          
          {/* Header - Brutalist Code Style - Fully visible */}
          <div className="lg:col-span-12 mb-4 ml-0 sm:ml-8 lg:ml-[104px]">
             <h2 className="font-mono text-sm sm:text-base font-bold text-[#0A0A0A] tracking-widest uppercase">
               {"// ABOUT"}
             </h2>
          </div>

          {/* Visual - Portrait */}
          <div className="lg:col-span-3 relative group ml-0 lg:-ml-16 xl:-ml-24">
            <div className="relative w-full aspect-[3/4] overflow-hidden">
               <Image
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
                Hey! I&apos;m a computer science student at UT Austin. 🤘
              </p>
              <p className="mb-6">
                I work primarily with full-stack applications and operate with AI/ML systems.
              </p>
              <p className="mb-6">
                Outside of code, I&apos;m a national-level powerlifter on <span className="text-[#FF5722]">Longhorn Powerlifting</span> (check out my Instagram @nevlifts!)
              </p>
              <p className="mb-6">
                I&apos;ve completed multiple software engineering internships working with production-level code.
              </p>
              <p className="mb-6">
                A lot of my work centers on areas where reliability matters more than polish: health, fitness, and emergency response.
              </p>
              <p className="mb-3">
                <span className="text-[#FF5722]">Currently</span>: SWE @ Convergent, AI Research @ D3 Lab (UT Austin)
              </p>
              <p>
                <span className="text-[#FF5722]">Previously</span>: SWE Intern @ H-E-B, Zonda
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Absolute Labels - Corners */}
      <div className="absolute bottom-8 left-8 font-mono text-xs text-[#0A0A0A] uppercase tracking-widest opacity-60">
        Fig 1.0
      </div>
      <div className="absolute bottom-8 right-8 font-mono text-xs text-[#0A0A0A] uppercase tracking-widest opacity-60 text-right">
        System Administrator<br/>
        Auth: N. Gupta
      </div>
    </section>
  );
}
