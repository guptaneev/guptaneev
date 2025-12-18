import { Github, Linkedin, Mail, MapPin, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden pt-20 pb-24"
    >
      {/* Animated gradient background elements - subtle */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-blob animation-delay-2000" />
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
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-70 animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-50" />
            <div className="relative w-48 h-48 lg:w-56 lg:h-56 rounded-full border-4 border-blue-400/50 overflow-hidden">
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
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-2xl opacity-60 -z-10" />
              <h1 className="text-5xl sm:text-6xl lg:text-5xl font-bold text-white tracking-tight relative">
                Neev Gupta
              </h1>
              <p className="text-2xl sm:text-3xl lg:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 relative">
                Full-Stack AI Developer
              </p>
            </motion.div>

            {/* Location and education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-col lg:flex-row gap-6 text-gray-300 text-sm sm:text-base"
            >
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span className="label text-gray-300">Austin, TX</span>
              </div>
              <div className="hidden lg:block text-gray-600">•</div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <GraduationCap className="w-4 h-4 text-purple-400" />
                <span className="label text-gray-300">CS @ UT Austin</span>
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
                className="p-3 rounded-full border border-gray-600 hover:border-blue-400 hover:bg-blue-500/10 transition-all duration-300 group"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </a>
              <a
                href="https://github.com/guptaneev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-gray-600 hover:border-blue-400 hover:bg-blue-500/10 transition-all duration-300 group"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </a>
              <a
                href="https://linkedin.com/in/neevgupta"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-gray-600 hover:border-blue-400 hover:bg-blue-500/10 transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </a>
            </motion.div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="label text-gray-400 space-y-1.5"
            >
              <p>
                <span className="text-blue-400 font-semibold">Currently:</span>{" "}
                SWE @ Convergent, AI @ D3 Research Lab
              </p>
              <p>
                <span className="text-purple-400 font-semibold">
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
