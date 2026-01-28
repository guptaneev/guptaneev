"use client";

import Image from "next/image";

export function AboutSection() {
  // Since HeroSection is h-[200vh], this section just renders below naturally.
  // The transition effect in Hero handles the reveal.
  
  return (
    <section className="min-h-screen bg-[#E8E8E8] text-[#0A0A0A] py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto h-full flex flex-col justify-center">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative">
          
          {/* Header - Brutalist Code Style */}
          <div className="lg:col-span-12 mb-8">
             <h2 className="font-mono text-sm sm:text-base font-bold text-[#0A0A0A] tracking-widest uppercase">
               {"// ABOUT"}
             </h2>
          </div>

          {/* Visual - Portrait - Bleed Left Strategy */}
          <div className="lg:col-span-5 relative group lg:-ml-24 xl:-ml-32">
            <div className="relative aspect-[3/4] overflow-hidden grayscale contrast-125 hover:contrast-100 transition-all duration-700 ease-out w-full max-w-md mx-auto shadow-2xl shadow-black/10">
               <Image
                  src="/me.jpg" 
                  alt="Portrait of Neev Gupta"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
               />
               {/* Overlay Noise or Glitch could go here */}
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-7 space-y-8 z-10 pt-4 lg:pl-12">
            
            <div className="font-sans text-xl sm:text-2xl md:text-3xl leading-relaxed font-medium text-[#0A0A0A]">
              <p className="mb-8">
                I’m a Computer Science student (Class of 2029) at UT Austin designing high-reliability systems. 
                My engineering work focuses creating <span className="text-[#FF5722]">failure</span> resilience—whether handling network partitions for 100k+ users at Pinpoint and verifying AI trust at D3 Lab.
              </p>
              <p>
                Outside of code, I’m a competitive powerlifter with a 1,200lb total. I bring the same discipline of consistent execution under load to every system I build.
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
