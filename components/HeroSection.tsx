import { Github, Linkedin, Mail, MapPin, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export function HeroSection() {
  const [gradientAngle, setGradientAngle] = useState(120);

  const handleGradientMove = (
    event: React.MouseEvent<HTMLParagraphElement>,
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - (rect.left + rect.width / 2);
    const y = event.clientY - (rect.top + rect.height / 2);
    const angle = Math.atan2(y, x) * (180 / Math.PI) + 180;
    setGradientAngle(angle);
  };

  const resetGradient = () => setGradientAngle(120);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden pt-20 pb-24"
    >
      {/* Animated gradient background elements - subtle */}
      <div className="absolute inset-0 overflow-hidden opacity-50">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#008170]/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#005b41]/24 rounded-full blur-3xl animate-blob animation-delay-2000" />
      </div>

      {/* Main content - side-by-side layout */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          {/* Avatar with ring - Left side */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="relative flex-shrink-0"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#008170] via-[#0f0f0f] to-[#005b41] rounded-full blur-2xl opacity-70 animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f0f] to-[#008170] rounded-full blur-3xl opacity-45" />
            <div className="relative w-48 h-48 lg:w-56 lg:h-56 rounded-full border-4 border-[#008170]/60 overflow-hidden">
              <Image
                src="/pfp.jpg"
                alt="Neev Gupta"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Content - Right side */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-5">
            {/* Name and title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative space-y-3"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#008170]/25 to-[#005b41]/25 rounded-2xl blur-2xl opacity-70 -z-10" />
              <h1 className="text-5xl sm:text-6xl lg:text-5xl font-bold text-[#f3f6fb] tracking-tight relative">
                Neev Gupta
              </h1>
              <p
                onMouseMove={handleGradientMove}
                onMouseLeave={resetGradient}
                className="text-2xl sm:text-3xl lg:text-2xl font-semibold bg-clip-text text-transparent relative cursor-default"
                style={{
                  backgroundImage: `linear-gradient(${gradientAngle}deg, rgba(0,129,112,0.95), rgba(0,91,65,0.85), rgba(0,129,112,0.95))`,
                  transition: "background-image 120ms ease-out",
                }}
              >
                Full-Stack AI Developer
              </p>
            </motion.div>

            {/* Location and education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-col lg:flex-row gap-6 text-[#cfd8e3] text-sm sm:text-base"
            >
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <MapPin className="w-4 h-4 text-[#008170]" />
                <span className="label text-[#cfd8e3]">Austin, TX</span>
              </div>
              <div className="hidden lg:block text-[#008170]">•</div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <GraduationCap className="w-4 h-4 text-[#008170]" />
                <span className="label text-[#cfd8e3]">CS @ UT Austin</span>
              </div>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              <a
                href="mailto:neevgupta@utexas.edu"
                className="p-3 rounded-full border border-[#008170]/60 hover:border-[#008170] hover:bg-[#008170]/15 transition-all duration-300 group"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-[#e8edf3] group-hover:text-[#008170] transition-colors" />
              </a>
              <a
                href="https://github.com/guptaneev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-[#008170]/60 hover:border-[#008170] hover:bg-[#008170]/15 transition-all duration-300 group"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-[#e8edf3] group-hover:text-[#008170] transition-colors" />
              </a>
              <a
                href="https://linkedin.com/in/neevgupta"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-[#008170]/60 hover:border-[#008170] hover:bg-[#008170]/15 transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-[#e8edf3] group-hover:text-[#008170] transition-colors" />
              </a>
            </motion.div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="label text-[#cfd8e3] space-y-1.5"
            >
              <p>
                <span className="text-[#008170] font-semibold">Currently:</span>{" "}
                SWE @ Convergent, AI @ D3 Research Lab
              </p>
              <p>
                <span className="text-[#008170] font-semibold">
                  Previously:
                </span>{" "}
                SWE @ H-E-B Digital & Zonda
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
