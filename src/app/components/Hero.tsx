"use client";

import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { SocialLinks } from "./SocialLinks";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 lg:px-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.p
          className="text-primary mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-accent mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Jared Velasquez.
        </motion.h1>

        <motion.p
          className="text-secondary max-w-xl text-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          I'm an M.S. CS student at UCLA with a passion for software
          architecture, cloud solutions, and building scalable and reliable
          backend systems.
        </motion.p>

        <SocialLinks />
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="w-6 h-6 text-secondary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
