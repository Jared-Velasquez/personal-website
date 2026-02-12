"use client";

import { motion } from "motion/react";
import { useInView } from "./useInView";

export function About() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const skills = [
    "Java",
    "Spring",
    "Python",
    "TypeScript",
    "Go",
    "AWS",
    "Azure",
    "GCP",
    "Terraform",
    "OpenTelemetry",
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen flex items-center px-6 md:px-20 lg:px-32 py-20"
    >
      <div className="max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-accent">
              About Me
            </h2>
            <div className="h-px flex-1 bg-secondary/30 max-w-xs"></div>
          </div>

          <div className="grid md:grid-cols-5 gap-10">
            <div className="md:col-span-3 space-y-4 text-secondary">
              <p>Hello! I'm Jared, a passionate software engineer...</p>

              <p>
                Here are a few technologies I've been working with recently:
              </p>

              <ul className="grid grid-cols-2 gap-2 mt-4">
                {skills.map((skill, index) => (
                  <motion.li
                    key={skill}
                    className="flex items-center gap-2 text-sm"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                  >
                    <span className="text-primary">▹</span>
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="relative group">
                <div className="absolute -inset-2 rounded border-2 border-primary translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
                <div className="relative overflow-hidden rounded bg-primary/10">
                  <img
                    src="/images/intro.jpg"
                    alt="Profile"
                    className="w-full aspect-square object-cover transition-all"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
