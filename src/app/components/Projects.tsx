'use client';

// Minimal React import for the component
import * as React from "react";

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
    image?: string;
}

const projects: Project[] = [
    {
        title: "Featured Project",
        name: "Liwanag",
        description: "A Tagalog language-learning app developed by students at Pilipinos in Engineering and Science (PIES) @ UCLA. Helps learners practice conversational Tagalog through interactive and personalized question sessions and gamified features.",
        tech: ["React Native", "Java Spring", "AWS"],
        github: "https://github.com/Jared-Velasquez/liwanag-hub",
    },
    {
        title: "Featured Project",
        name: "Kapwa Codefest",
        description: "A national hackathon that enabled students to develop projects to address real-world challenges faced by Filipino businesses. Co-organized with students from UofM Dearborn, UCLA, UCI, UCSD, BU, Vanderbilt, and Wayne State.",
        tech: ["Next.js", "Vercel", "Supabase"],
        github: "https://github.com/Jared-Velasquez/kapwa-codefest-website",
        external: "https://kapwacodefest.com",
        // image: "/images/kapwacodefest.png"
    },
    {
        title: "Featured Project",
        name: "Leetcode Scheduler",
        description: "Track your LeetCode progress via the SM-2 Spaced Repetition algorithm. Acts as a personal notebook for repeating solves for LeetCode problems.",
        tech: ["Next.js", "TypeScript", "Vercel", "Supabase"],
        github: "https://github.com/Jared-Velasquez/leetcode-scheduler",
        external: "https://leetcodescheduler.com/",
        // image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    }
];

export function Projects() {
    const { ref, isInView } = useInView({ threshold: 0.1 });

    return (
        <section id="projects" ref={ref} className="min-h-screen flex items-center px-6 md:px-20 lg:px-32 py-20">
            <div className="w-full max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-4 mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-accent">
                            My Projects
                        </h2>
                        <div className="h-px flex-1 bg-secondary/30 max-w-xs"></div>
                    </div>

                    <div className="space-y-32">
                        {projects.map((project, index) => (
                            <ProjectCard key={project.name} project={project} index={index} isInView={isInView} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function ProjectCard({
    project,
    index,
    isInView
}: {
    project: Project;
    index: number;
    isInView: boolean;
}) {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            className="relative grid md:grid-cols-12 gap-4 items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 * index, duration: 0.6 }}
        >
            {/* Image */}
            {project.image && (
                <div className={`md:col-span-7 relative ${isEven ? 'md:col-start-1' : 'md:col-start-6'}`}>
                    <div className="relative group">
                        <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10 rounded"></div>
                        <ProjectImage query={project.image} />
                    </div>
                </div>
            )}

            {/* Content */}
            <div className={`md:col-span-6 ${isEven ? 'md:col-start-7 md:text-right' : 'md:col-start-1 md:row-start-1'} z-20`}>
                <p className="text-primary text-sm mb-2">{project.title}</p>
                <h3 className="text-2xl font-bold text-accent mb-4">{project.name}</h3>

                <div className="bg-background/90 backdrop-blur-sm rounded p-6 mb-4 shadow-lg">
                    <p className="text-secondary">
                        {project.description}
                    </p>
                </div>

                <ul className={`flex gap-4 text-sm text-secondary mb-4 ${isEven ? 'md:justify-end' : ''} flex-wrap`}>
                    {project.tech.map((tech) => (
                        <li key={tech}>{tech}</li>
                    ))}
                </ul>

                <div className={`flex gap-4 ${isEven ? 'md:justify-end' : ''}`}>
                    <a
                        href={project.github}
                        className="text-secondary hover:text-primary transition-colors"
                        aria-label="GitHub"
                    >
                        <Github className="w-5 h-5" />
                    </a>
                    {project.external && (
                        <a
                            href={project.external}
                            className="text-secondary hover:text-primary transition-colors"
                            aria-label="External Link"
                        >
                            <ExternalLink className="w-5 h-5" />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

function ProjectImage({ query }: { query: string }) {
    const [imgSrc, setImgSrc] = React.useState<string>("");

    React.useEffect(() => {
        // Dynamically fetch image
        setImgSrc(query);
    }, [query]);

    return (
        <img
            src={imgSrc}
            alt="Project"
            className="w-full h-auto rounded object-cover"
        />
    );
}