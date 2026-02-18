"use client";

import { motion } from "motion/react";
import { useInView } from "./useInView";

export function Contact() {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <section
      id="contact"
      ref={ref}
      className="py-32 px-6 flex items-center justify-center"
    >
      <motion.div
        className="max-w-xl text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-serif text-4xl md:text-5xl text-cream mb-6">
          Thank you for reading.
        </h2>
        <p className="text-mocha text-lg leading-relaxed mb-12">
          I&apos;m currently looking for new grad software engineering
          opportunities and my inbox is always open. Send me an email if
          you&apos;d like to connect.
        </p>

        <motion.a
          href="mailto:jaredvel25@ucla.edu"
          className="inline-block px-8 py-3 border border-latte text-latte text-sm tracking-wide rounded-full hover:bg-latte hover:text-espresso transition-colors duration-200 cursor-pointer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Contact Me
        </motion.a>
      </motion.div>
    </section>
  );
}
