import { motion } from "framer-motion";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  bullets: string[];
}

const experiences: ExperienceItem[] = [
  {
    company:
      "D3 (Data, Discovery, Decision) Research Lab @ The University of Texas at Austin",
    role: "AI Researcher",
    period: "December 2025 - Present",
    bullets: [
      "Incoming Winter 2026",
      "Tackling how trust affects AI / Human collaborative reasoning",
    ],
  },
  {
    company: "Texas Convergent @ The University of Texas at Austin",
    role: "Software Engineer",
    period: "August 2025 - Present",
    bullets: [
      "Developed Pinpoint, a concert safety platform, combining live crowd visibility with direct communication to on-site medical teams for events of 100,000+",
      "Worked on the backend systems that power real-time crowd heatmaps and instant (<2 second) alerts to EMS",
    ],
  },
  {
    company: "H-E-B Digital",
    role: "Software Engineering Intern",
    period: "June 2025 - August 2025",
    bullets: [
      "Built modular React components integrated with Salesforce Apex, improving UI reuse across H-E-B's 120k-user PartnerNet intranet",
      "Designed and launched a centralized patch notes interface using TypeScript and internal tools, streamlining QA and engineering workflows",
    ],
  },
  {
    company: "Zonda",
    role: "Software Engineering Intern",
    period: "June 2024 - August 2024",
    bullets: [
      "Architected Adoore, a full-stack housing analytics platform consuming NewHomeSource REST APIs with dynamic Angular components and Java backend",
      "Spearheaded creation of Zonda's 2025 Internship Program roadmap",
    ],
  },
];

export function ExperienceSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-24 px-4 sm:px-6 lg:px-8"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold mb-12 text-white"
      >
        Experience
      </motion.h2>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={`${exp.company}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative pl-6 sm:pl-8"
          >
            {/* Vertical line connector */}
            <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-blue-500/50 to-transparent" />

            {/* Dot on timeline */}
            <div className="absolute left-[-7px] top-1.5 w-3 h-3 rounded-full bg-blue-400 border-2 border-gray-900" />

            {/* Content */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                <span className="text-sm text-gray-400">{exp.period}</span>
              </div>
              <p className="label mb-4">{exp.company}</p>
              <ul className="space-y-3">
                {exp.bullets.map((bullet, bulletIdx) => (
                  <li
                    key={bulletIdx}
                    className="text-gray-300 text-base leading-relaxed"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
