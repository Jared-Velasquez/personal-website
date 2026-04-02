"use client";

import { motion } from "motion/react";
import { useInView } from "./useInView";

const experiences = [
  // {
  //   company: "SoCal Filipinos",
  //   position: "Product Manager",
  //   period: "Nov 2025 - Present",
  //   responsibilities: [
  //     "Lead product development and software architecture for social networking mobile app serving SoCal Filipino community, managing team of 5 developers and architecting scalable backend services in Java Spring.",
  //     "Deploy containerized infrastructure on AWS ECS using Terraform IaC templates with automated CI/CD pipelines, implementing resilient design patterns to ensure system reliability at scale.",
  //     "Implement event-driven data architecture using AWS EventBridge to emit events for data analytics pipelines, enabling real-time data processing and visualization capabilities while maintaining system scalability.",
  //   ],
  // },
  {
    company: "AEG Worldwide",
    position: "Associate Software Engineer",
    period: "Feb. 2026 - Present"
  },
  {
    company: "AEG Worldwide",
    position: "Software Engineer Intern",
    period: "Feb 2025 - Sep 2025",
    responsibilities: [
      "Migrated legacy financial data platform to a cloud-native, event-driven Azure TypeScript backend, eliminating recurring outages from VM-specific configurations saving 5+ engineering hours per week.",
      "Reduced command-query latency by 75%+ through Redis caching and architectural improvements, directly improving analyst productivity and enabling faster business decisions for vendor negotiations.",
      "Improved developer productivity and code quality by 50%+ through refactoring of legacy services, implementing peer-reviewed unit tests, automated CI/CD pipelines and Infrastructure as Code standards.",
      "Designed fault-tolerant distributed systems using Azure Service Bus and serverless functions, implementing monitoring and telemetry to perform root cause analysis and ensure system reliability under failure scenarios.",
    ],
  },
  {
    company: "UCLA Sensing & Robotics Lab",
    position: "Undergraduate Research Assistant",
    period: "Jan 2024 - Jan 2025",
    responsibilities: [
      "Produced 110+ synthetic datasets through an automated pipeline, directly supporting experiments published in ICRA 2025 and reducing reliance on costly field data collection.",
      "Enhanced research reproducibility by extending SLAM simulator to generate 3D range-aided datasets and validating accuracy with 60+ automated tests.",
    ],
  },
  {
    company: "UCLA eHealth Research Lab",
    position: "Full-Stack Developer",
    period: "Jul 2023 - Jan 2024",
    responsibilities: [
      "Architected secure data access layer for health and wellness mobile app, migrating Firebase operations to Google Cloud serverless Python backend with enforced authorization controls to ensure HIPAA-compliant data security.",
      "Collaborated with 10+ stakeholders and developers in Agile design and debugging cycles to translate requirements into cloud-deployed features with a strong focus on data privacy and reliability.",
    ],
  },
];

export function Experience() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="experience"
      ref={ref}
      className="py-32 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-4 mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-cream">
            Experience
          </h2>
          <div className="h-px flex-1 bg-coffee-700 max-w-xs"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-coffee-700 hidden md:block"></div>

          <div className="space-y-14">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                className="relative md:pl-12"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.12 * index, duration: 0.5 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-latte bg-espresso hidden md:block"></div>

                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-4">
                  <div>
                    <h3 className="text-lg text-cream">
                      {exp.position}
                    </h3>
                    <p className="text-latte text-sm">{exp.company}</p>
                  </div>
                  <p className="text-mocha text-sm shrink-0">{exp.period}</p>
                </div>

                <ul className="space-y-3">
                  {exp.responsibilities && exp.responsibilities.map((resp, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-coffee-200 leading-relaxed text-[15px]"
                    >
                      <span className="w-1 h-1 rounded-full bg-mocha shrink-0 mt-2.5"></span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
