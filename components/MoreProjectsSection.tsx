"use client";

import { ArrowRight } from "lucide-react";

export function MoreProjectsSection() {
  return (
    <section className="bg-[#0A0A0A] text-[#F5F5F5] py-24 px-4 sm:px-6 lg:px-8 border-t border-[#333]">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-8">
        
        <div className="font-mono text-xs sm:text-sm text-[#FF5722] tracking-[0.2em] uppercase">
             [ ALL_SYSTEMS_GO ]
        </div>

        <a 
          href="https://github.com/guptaneev" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-4 sm:gap-6"
        >
            <h2 className="font-sans font-black text-4xl sm:text-6xl md:text-7xl tracking-tighter hover:text-white transition-colors">
                SEE THE REST<br className="sm:hidden"/> OF MY WORK
            </h2>
            <div className="relative overflow-hidden w-12 h-12 sm:w-20 sm:h-20 flex items-center justify-center border border-[#333] group-hover:bg-[#FF5722] group-hover:border-[#FF5722] transition-colors duration-300 rounded-none">
                <ArrowRight className="w-6 h-6 sm:w-10 sm:h-10 text-[#F5F5F5] -translate-x-[150%] group-hover:translate-x-0 transition-transform duration-300 ease-out absolute" />
                <ArrowRight className="w-6 h-6 sm:w-10 sm:h-10 text-[#F5F5F5] translate-x-0 group-hover:translate-x-[150%] transition-transform duration-300 ease-out absolute" />
            </div>
        </a>

        <div className="font-mono text-sm text-[#666]">
            {"// git repository"}
        </div>

      </div>
    </section>
  );
}
