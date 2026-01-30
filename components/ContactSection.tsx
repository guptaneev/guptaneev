"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

export function ContactSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-32 px-4 sm:px-6 lg:px-8 border-t border-border"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="font-sans font-bold text-foreground mb-8">
          Get in touch
        </h2>

        <p className="font-serif text-lg sm:text-xl leading-relaxed text-foreground/90 mb-12 max-w-2xl">
          Reach out to build, connect, or just learn more about me! 
        </p>

        {/* Contact Links */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="mailto:neevgupta@utexas.edu"
            className="inline-flex items-center gap-3 px-6 py-3 border border-foreground text-foreground font-sans font-semibold hover:bg-foreground hover:text-background transition-smooth"
          >
            <Mail className="w-5 h-5" />
            Email
          </a>

          <a
            href="https://linkedin.com/in/neevgupta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 border border-foreground text-foreground font-sans font-semibold hover:bg-foreground hover:text-background transition-smooth"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>

          <a
            href="https://github.com/guptaneev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 border border-foreground text-foreground font-sans font-semibold hover:bg-foreground hover:text-background transition-smooth"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>
        </div>
      </div>
    </motion.section>
  );
}
