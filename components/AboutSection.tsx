"use client";

import Image from "next/image";

export function AboutSection() {
  return (
    <section className="min-h-screen bg-[#E8E8E8] text-[#0A0A0A] py-20 px-4 sm:px-6 lg:px-8 relative overflow-visible">
      <div className="max-w-7xl mx-auto h-full flex flex-col justify-start">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative">
          
          {/* Header - Brutalist Code Style - Fully visible */}
          <div className="lg:col-span-12 mb-4">
             <h2 className="font-mono text-sm sm:text-base font-bold text-[#0A0A0A] tracking-widest uppercase">
               {"// ABOUT"}
             </h2>
          </div>

          {/* Visual - Portrait */}
          <div className="lg:col-span-3 relative group lg:-ml-24 xl:-ml-32">
            <div className="relative w-full aspect-[3/4] overflow-hidden grayscale contrast-125">
               <Image
                  src="/pfp.jpg" 
                  alt="Portrait of Neev Gupta"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 25vw"
               />
            </div>
          </div>

          {/* Text Content - Full content visible on scroll */}
          <div className="lg:col-span-9 space-y-4 z-10 lg:pl-12">
            <div className="font-sans text-lg sm:text-xl leading-relaxed font-medium text-[#0A0A0A]">
              <p className="mb-4">
                I&apos;m a Computer Science student (Class of 2029) at UT Austin designing high-reliability systems. 
                My engineering work focuses creating <span className="text-[#FF5722]">failure</span> resilience—whether handling network partitions for 100k+ users at Pinpoint and verifying AI trust at D3 Lab.
              </p>
              <p>
                Outside of code, I&apos;m a competitive powerlifter with a 1,200lb total. I bring the same discipline of consistent execution under load to every system I build.
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
