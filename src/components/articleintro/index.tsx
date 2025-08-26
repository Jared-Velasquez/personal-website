"use client";

import { motion } from "framer-motion";

export default function ArticleIntro() {
    return (
        <section
          id="articles"
            className="md:flex md:justify-between md:items-center md:h-full md:gap-8 py-10"
        >
            <div className="z-30 basis-1/2 mt-12 md:mt-32">
                {/* ARTICLE HEADER */}
                <motion.div
                    className="mt-[5rem] sm:mt-[5rem] md:mt-[0rem]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    >
                    <p className="text-5xl font-playfair z-10 text-center md:text-start font-semibold">
                        Articles
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    >
                    <p className="mt-5 mb-7 text-md text-center md:text-start">
                        I love everything about software architecture! Here are a list of articles detailing my experiences in software architecture, from personal to enterprise-level.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}