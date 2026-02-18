"use client";

import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { SocialLinks } from "./SocialLinks";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <div className="relative w-28 h-28 mx-auto rounded-full overflow-hidden">
          <img
            src="/images/intro.jpg"
            alt="Jared Velasquez"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      <motion.h1
        className="font-serif text-5xl md:text-7xl lg:text-8xl text-cream leading-[0.95] mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.7 }}
      >
        Jared Velasquez
      </motion.h1>

      <motion.p
        className="text-latte text-sm tracking-[0.3em] uppercase mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Software Engineer &middot; UCLA
      </motion.p>

      {/* <motion.p
        className="text-mocha max-w-lg text-lg leading-relaxed mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55 }}
      >
        Building scalable backend systems and cloud solutions with a focus on
        software architecture and reliability.
      </motion.p> */}

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <SocialLinks />
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 text-mocha" />
        </motion.div>
      </motion.div>
    </section>
  );
}
