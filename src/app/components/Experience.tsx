'use client';

import { motion } from "motion/react";
import { useState } from "react";
import { useInView } from "./useInView";

const experiences = [
    {
        company: "SoCal Filipinos",
        position: "Product Manager",
        period: "Nov 2025 - Present",
        responsibilities: [
            "Lead product development and software architecture for social networking mobile app serving SoCal Filipino community, managing team of 5 developers and architecting scalable backend services in Java Spring.",
            "Deploy containerized infrastructure on AWS ECS using Terraform IaC templates with automated CI/CD pipelines, implementing resilient design patterns to ensure system reliability at scale.",
            "Implement event-driven data architecture using AWS EventBridge to emit events for data analytics pipelines, enabling real-time data processing and visualization capabilities while maintaining system scalability.",
        ]
    },
    {
        company: "AEG Worldwide",
        position: "Software Engineer Intern",
        period: "Feb 2025 - Sep 2025",
        responsibilities: [
            "Migrated legacy financial data platform to a cloud-native, event-driven Azure TypeScript backend, eliminating recurring outages from VM-specific configurations saving 5+ engineering hours per week.",
            "Reduced command-query latency by 75\%+ through Redis caching and architectural improvements, directly improving analyst productivity and enabling faster business decisions for vendor negotiations.",
            "Improved developer productivity and code quality by 50%+ through refactoring of legacy services, implementing peer-reviewed unit tests, automated CI/CD pipelines and Infrastructure as Code standards.",
            "Designed fault-tolerant distributed systems using Azure Service Bus and serverless functions, implementing monitoring and telemetry to perform root cause analysis and ensure system reliability under failure scenarios."
        ]
    },
    {
        company: "UCLA Sensing and Robotics for Infrastructure Lab",
        position: "Undergraduate Research Assistant",
        period: "Jan 2024 - Jan 2025",
        responsibilities: [
            "Produced 110+ synthetic datasets through an automated pipeline, directly supporting experiments published in ICRA 2025 and reducing reliance on costly field data collection.",
            "Enhanced research reproducibility by extending SLAM simulator to generate 3D range-aided datasets and validating accuracy with 60+ automated tests.",
        ]
    },
    {
        company: "UCLA eHealth Research Lab",
        position: "Full-Stack Developer",
        period: "Jul 2023 - Jan 2024",
        responsibilities: [
            "Architected secure data access layer for health and wellness mobile app, migrating Firebase operations to Google Cloud serverless Python backend with enforced authorization controls to ensure HIPAA-compliant data security.",
            "Collaborated with 10+ stakeholders and developers in Agile design and debugging cycles to translate requirements into cloud-deployed features with a strong focus on data privacy and reliability.",
        ]
    }
];

export function Experience() {
    const [activeIndex, setActiveIndex] = useState(0);
    const { ref, isInView } = useInView({ threshold: 0.3 });

    return (
        <section id="experience" ref={ref} className="min-h-screen flex items-center px-6 md:px-20 lg:px-32 py-20">
            <div className="max-w-4xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-4 mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-accent">
                            Where I've Worked
                        </h2>
                        <div className="h-px flex-1 bg-secondary/30 max-w-xs"></div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Company tabs */}
                        <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-x-visible">
                            {experiences.map((exp, index) => (
                                <button
                                    key={exp.company}
                                    onClick={() => setActiveIndex(index)}
                                    className={`px-4 py-3 text-left whitespace-nowrap border-l-2 transition-colors ${activeIndex === index
                                        ? 'border-primary bg-primary/10 text-primary'
                                        : 'border-secondary/30 text-secondary hover:bg-secondary/10'
                                        }`}
                                >
                                    {exp.company}
                                </button>
                            ))}
                        </div>

                        {/* Experience content */}
                        <div className="flex-1">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h3 className="text-xl font-bold text-accent">
                                    {experiences[activeIndex].position}
                                    <span className="text-primary"> @ {experiences[activeIndex].company}</span>
                                </h3>
                                <p className="text-secondary mb-6">{experiences[activeIndex].period}</p>

                                <ul className="space-y-4">
                                    {experiences[activeIndex].responsibilities.map((resp, i) => (
                                        <motion.li
                                            key={i}
                                            className="flex gap-3 text-secondary"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 * i }}
                                        >
                                            <span className="text-primary mt-1">▹</span>
                                            <span>{resp}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}