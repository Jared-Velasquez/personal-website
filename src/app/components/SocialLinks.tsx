'use client';

import { motion } from "motion/react";
import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
    { name: "GitHub", icon: Github, href: "https://github.com/Jared-Velasquez" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/jaredvel25" },
    { name: "Email", icon: Mail, href: "mailto:jaredvel25@ucla.edu" },
];

const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export function SocialLinks() {
    return (
        <motion.div
            className="flex items-center gap-4"
            initial="hidden"
            animate="visible"
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.7,
                    },
                },
            }}
        >
            {socials.map((social) => (
                <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex items-center justify-center w-12 h-12 rounded-lg text-primary transition-colors hover:text-secondary"
                    variants={iconVariants}
                    transition={{ duration: 0.4 }}
                >
                    <social.icon className="w-6 h-6" />
                </motion.a>
            ))}
        </motion.div>
    );
}

export function EmailLink() { }
