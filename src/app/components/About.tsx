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
      className="py-32 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-cream">
            About Me
          </h2>
          <div className="h-px flex-1 bg-coffee-700 max-w-xs"></div>
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-3 space-y-5">
            <p className="font-sans text-coffee-200 leading-relaxed text-lg">
              Hello! I&apos;m Jared, a M.S. CS student at UCLA &apos;26. I&apos;ve had the opportunity to
              work across cloud infrastructure, robotics research, and full-stack development.
              My current focus is in the fields of microservices, reliability, and root cause localization.
              <br />
              <br />
              Here are some technologies I&apos;ve built with:
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-3 py-1.5 text-sm text-coffee-200 border border-coffee-700 rounded-full"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.05 * index, duration: 0.3 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
