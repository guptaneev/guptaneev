"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { InfoCard } from "@/components/InfoCard";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <HeroSection />

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto pt-12 px-4 sm:px-6 lg:px-8">
        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Skills
          </h2>
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-300 mb-3">
                    Frontend:
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 px-4 py-1.5 text-base">
                      React
                    </Badge>
                    <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 px-4 py-1.5 text-base">
                      Angular
                    </Badge>
                    <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 px-4 py-1.5 text-base">
                      JavaScript (ES6+)
                    </Badge>
                    <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 px-4 py-1.5 text-base">
                      TypeScript
                    </Badge>
                    <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 px-4 py-1.5 text-base">
                      HTML/CSS
                    </Badge>
                    <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 px-4 py-1.5 text-base">
                      Swift
                    </Badge>
                    <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 px-4 py-1.5 text-base">
                      Xcode
                    </Badge>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-300 mb-3">
                    Backend:
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 px-4 py-1.5 text-base">
                      Python
                    </Badge>
                    <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 px-4 py-1.5 text-base">
                      Node.js
                    </Badge>
                    <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 px-4 py-1.5 text-base">
                      Java (Jakarta EE)
                    </Badge>
                    <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 px-4 py-1.5 text-base">
                      REST APIs
                    </Badge>
                    <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 px-4 py-1.5 text-base">
                      Firebase
                    </Badge>
                    <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 px-4 py-1.5 text-base">
                      Salesforce Apex
                    </Badge>
                    <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 px-4 py-1.5 text-base">
                      Gradle
                    </Badge>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-300 mb-3">
                    Data & Tools:
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 px-4 py-1.5 text-base">
                      PostgreSQL
                    </Badge>
                    <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 px-4 py-1.5 text-base">
                      SQL
                    </Badge>
                    <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 px-4 py-1.5 text-base">
                      Tableau
                    </Badge>
                    <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 px-4 py-1.5 text-base">
                      Git
                    </Badge>
                    <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 px-4 py-1.5 text-base">
                      NPM
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InfoCard
              title="Software Engineering Intern"
              description="Zonda Home | June 2024 - August 2024"
              content={
                <ul className="list-disc list-inside text-gray-300">
                  <li>
                    Developed Adoore, a full-stack housing analytics platform
                    consuming NewHomeSource REST APIs, by architecting dynamic
                    Angular components and building data-processing logic with
                    Java + Jakarta EE
                  </li>
                  <li>
                    Spearheaded creation of Zonda&apos;s 2025 Internship Program
                  </li>
                </ul>
              }
              className="bg-gray-800/50 border-gray-700"
            />
            <InfoCard
              title="Software Engineering Intern"
              description="H-E-B | June 2025 - Present"
              content={
                <ul className="list-disc list-inside text-gray-300">
                  <li>
                    Engineered modular React components integrated with
                    Salesforce Apex to enhance UI performance and reusability
                    across H-E-B&apos;s 120K-user PartnerNet intranet
                  </li>
                  <li>
                    Designed and launched a centralized patch notes interface
                    using TypeScript and internal tools, streamlining QA and
                    engineering workflows
                  </li>
                </ul>
              }
              className="bg-gray-800/50 border-gray-700"
            />
          </div>
        </motion.section>

        {/* Projects Section */}
        <ProjectsSection />

        {/* Education Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Education
          </h2>
          <div className="grid grid-cols-1 gap-6">
            <InfoCard
              title="The University of Texas at Austin"
              description="Bachelor of Science in Computer Science"
              content={
                <ul className="list-disc list-inside text-gray-300">
                  <li>
                    Relevant Coursework: Data Structures & Algorithms, Discrete
                    Math
                  </li>
                </ul>
              }
              className="bg-gray-800/50 border-gray-700"
            />
          </div>
        </motion.section>
      </div>
    </div>
  );
}
