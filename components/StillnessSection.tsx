"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function StillnessSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Reveal animations
  const opacity1 = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);
  const opacity2 = useTransform(scrollYProgress, [0.35, 0.45], [0, 1]);
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);

  return (
    <section ref={containerRef} className="py-32 px-4 sm:px-6 lg:px-8 border-b border-border min-h-[50vh] flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-serif text-2xl sm:text-3xl mb-12 text-foreground">
          I optimize for:
        </p>
        <ul className="font-serif text-2xl sm:text-4xl space-y-8 text-foreground font-bold">
          <motion.li style={{ opacity: opacity1 }} className="tracking-tight">
            Failure over success
          </motion.li>
          <motion.li style={{ opacity: opacity2 }} className="tracking-tight text-primary">
            Latency over aesthetics
          </motion.li>
          <motion.li style={{ opacity: opacity3 }} className="tracking-tight">
            Constraints over features
          </motion.li>
        </ul>
      </div>
    </section>
  );
}
