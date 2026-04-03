"use client";

import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { useInView } from "./useInView";

interface Project {
  title: string;
  name: string;
  description: string;
  tech: string[];
  github: string;
  external?: string;
}

const projects: Project[] = [
  {
    title: "Capstone Project",
    name: "TraceRCA-OTel",
    description: "A deployable implementation of the TraceRCA root cause analysis algorithm as an observability backend integrated with OpenTelemetry.",
    tech: ["Python", "Go", "Kubernetes", "OpenTelemetry"],
    github: "https://github.com/Jared-Velasquez/TraceRCA-OTel"
  },
  {
    title: "Class Project",
    name: "Pronghorn-Incremental",
    description: "An extension of the Pronghorn serverless checkpoint orchestration system with CRIU-based incremental delta snapshots. Reduced average maximum storage and network bandwidth by 10.1% and average latency by 12.3% on key workloads.",
    tech: ["Python", "Kubernetes", "OpenFaaS"],
    github: "https://github.com/Jared-Velasquez/pronghorn-incremental",
  },
  {
    title: "Club Project",
    name: "Liwanag (v1)",
    description:
      "A Tagalog language-learning app developed by students at Pilipinos in Engineering and Science (PIES) @ UCLA. Helps learners practice conversational Tagalog through interactive and personalized question sessions and gamified features.",
    tech: ["React Native", "Java Spring", "AWS"],
    github: "https://github.com/Jared-Velasquez/liwanag-hub",
  },
  {
    title: "Hackathon Organization",
    name: "Kapwa Codefest",
    description:
      "A national hackathon that enabled students to develop projects to address real-world challenges faced by Filipino businesses. Co-organized with students from UofM Dearborn, UCLA, UCI, UCSD, BU, Vanderbilt, and Wayne State.",
    tech: ["Next.js", "Vercel", "Supabase"],
    github: "https://github.com/Jared-Velasquez/kapwa-codefest-website",
    external: "https://kapwacodefest.com",
  },
  {
    title: "Personal Project",
    name: "Leetcode Scheduler",
    description:
      "Track your LeetCode progress via the SM-2 Spaced Repetition algorithm. Acts as a personal notebook for repeating solves for LeetCode problems.",
    tech: ["Next.js", "TypeScript", "Vercel", "Supabase"],
    github: "https://github.com/Jared-Velasquez/leetcode-scheduler",
    external: "https://leetcodescheduler.com/",
  },
  {
    title: "Research Project",
    name: "3D Manhattan World Simulator",
    description: "A simulator for the generation of random single and multi-robot range-aided 3D SLAM experiments. Supports the generation of random Manhattan worlds and controlled experiments with parameterized robot navigation and map feature placement.",
    tech: ["Python", "RA-SLAM"],
    github: "https://github.com/adthoms/manhattan-world-sim",
  }
];

export function Projects() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="projects"
      ref={ref}
      className="py-32 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-4 mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-cream">
            My Projects
          </h2>
          <div className="h-px flex-1 bg-coffee-700 max-w-xs"></div>
        </div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * index, duration: 0.5 }}
            >
              <div className="border border-coffee-700 rounded-xl p-8 hover:border-latte/30 transition-colors duration-300">
                <p className="text-latte text-xs tracking-widest uppercase mb-3">
                  {project.title}
                </p>
                <h3 className="font-serif text-2xl text-cream mb-4">
                  {project.name}
                </h3>

                <p className="font-sans text-coffee-200 leading-relaxed mb-6 max-w-2xl">
                  {project.description}
                </p>

                <div className="flex items-center justify-between flex-wrap gap-4">
                  <ul className="flex gap-3 text-xs text-coffee-300 flex-wrap">
                    {project.tech.map((tech) => (
                      <li
                        key={tech}
                        className="px-3 py-1 rounded-full border border-coffee-700 text-coffee-200"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-mocha hover:text-latte transition-colors cursor-pointer"
                      aria-label={`${project.name} GitHub`}
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    {project.external && (
                      <a
                        href={project.external}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-mocha hover:text-latte transition-colors cursor-pointer"
                        aria-label={`${project.name} live site`}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
