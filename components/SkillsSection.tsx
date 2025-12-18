import { motion } from "framer-motion";

const skillBands = [
  {
    title: "Core Stack",
    description: "What I ship with",
    skills: [
      { name: "TypeScript", bold: false },
      { name: "React", bold: false },
      { name: "JavaScript (ES6+)", bold: false },
      { name: "Python", bold: false },
      { name: "Node.js", bold: false },
      { name: "SQL", bold: false },
      { name: "HTML/CSS", bold: false },
    ],
  },
  {
    title: "Platforms & Frameworks",
    description: "Where I've built",
    skills: [
      { name: "Angular", bold: false },
      { name: "Swift", bold: false },
      { name: "React Native", bold: false },
      { name: "Firebase", bold: false },
      { name: "REST APIs", bold: false },
      { name: "Salesforce Apex", bold: false },
    ],
  },
  {
    title: "Tools & Practices",
    description: "How I work",
    skills: [
      { name: "Git", bold: false },
      { name: "Docker", bold: false },
      { name: "CI/CD", bold: false },
      { name: "Agile / Scrum", bold: false },
      { name: "NPM", bold: false },
      { name: "Gradle", bold: false },
      { name: "Tableau", bold: false },
      { name: "PostgreSQL", bold: false },
    ],
  },
];

export function SkillsSection() {
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
        Skills
      </motion.h2>

      <div className="space-y-10 max-w-3xl">
        {skillBands.map((band, idx) => (
          <motion.div
            key={band.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">
              <h3 className="label">{band.title}</h3>
              <p className="text-xs text-gray-500">{band.description}</p>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              {band.skills.map((skill, skillIdx) => (
                <span key={skill.name}>
                  {skill.bold ? (
                    <span className="font-semibold text-gray-100">
                      {skill.name}
                    </span>
                  ) : (
                    skill.name
                  )}
                  {skillIdx < band.skills.length - 1 ? " · " : ""}
                </span>
              ))}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
