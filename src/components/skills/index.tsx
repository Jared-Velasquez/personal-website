"use client";

import { motion } from "framer-motion";

const skills: string[] = ["Java", "C", "C++", "Python", "Javascript", "HTML", "CSS", "React", "React Native", "Angular", "Node.js", "Express.js", "Spring Boot", "Firebase", "MongoDB", "MySQL", "Microsoft Azure"]

const index = (): JSX.Element => {
  return (
    <section id="skills" className="flex flex-row justify-center">
      {skills.map((skill) => (
        <motion.div>
          {skill}
        </motion.div>
      ))}
    </section>
  );
}

export default index;