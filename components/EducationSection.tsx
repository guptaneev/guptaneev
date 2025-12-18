import { motion } from "framer-motion";

export function EducationSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold mb-12 text-white"
      >
        Education
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="border-l-2 border-blue-500/30 pl-6 sm:pl-8">
          <h3 className="text-xl font-bold text-white mb-2">
            The University of Texas at Austin
          </h3>
          <p className="label mb-3">Bachelor of Science in Computer Science</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
