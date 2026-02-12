'use client';

import { motion } from "motion/react";
import { useInView } from "./useInView";

export function Contact() {
    const { ref, isInView } = useInView({ threshold: 0.5 });

    return (
        <section id="contact" ref={ref} className="min-h-screen flex items-center justify-center px-6 py-20">
            <motion.div
                className="max-w-2xl text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">Thank you for reading.</h2>
                <p className="text-slate-400 text-lg mb-12 leading-relaxed">
                    I'm currently looking for new grad software engineering opportunities and my inbox is always open. Send me an email if you'd like to connect.
                </p>

                <motion.a
                    href="mailto:hello@jaredvel.com"
                    className="inline-block px-8 py-4 border-2 border-primary text-primary rounded hover:bg-primary hover:text-background transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Contact Me
                </motion.a>
            </motion.div>
        </section>
    );
}