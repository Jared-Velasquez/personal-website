"use client";

import { motion } from "framer-motion";
import { Chivo } from "next/font/google";
import { Oswald } from "next/font/google";

interface ICON_INTERFACE {
  src: string,
  title: string,
};

//const SKILLS: string[] = ["Java", "C", "C++", "Python", "Javascript", "HTML", "CSS", "React", "React Native", "Angular", "Node.js", "Express.js", "Spring Boot"];
//const COURSEWORK: string[] = ["CS31: Object-Oriented Software Development", "CS32: Data Structures and Algorithms", "CS M51A: Digital Systems Design", "CS35L: Software Construction", "CS111: Operating Systems Principles", "CS180: Algorithms and Complexity"];
//const TECHNOLOGIES: string[] = ["REST API", "Git", "Firebase Services", "Firebase Admin SDK", "MongoDB", "MySQL", "Hibernate", "Microsoft Azure"];

const skillVariants = {

}

const chivo = Chivo({
  subsets: ['latin'],
  variable: '--font-chivo',
});

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
});

const SkillsIcon = ({src, title}: {src: string, title: string}): JSX.Element => {
  return (
    <div className="flex flex-col items-center transition duration-300 hover:scale-110">
      <img src={src} height={50} width={50} />
      <p className={`${oswald.variable} font-oswald text-xl select-none`}>{title}</p>
    </div>
  );
}

const index = (): JSX.Element => {
  return (
    <section id="skills" className="flex flex-col flex-wrap gap-y-5">
      <div className="flex flex-col gap-y-2">
        <h1 className={`${chivo.variable} font-chivo text-2xl`}>SKILLS:</h1>
        <div className="flex flex-row gap-10">
          {SKILLS.map((skill) => {
            return <SkillsIcon src={skill.src} title={skill.title}/>
          })}
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        <h1 className={`${chivo.variable} font-chivo text-2xl`}>LIBRARIES AND FRAMEWORKS:</h1>
        <div className="flex flex-row gap-10">
          {FRAMEWORKS.map((skill) => {
            return <SkillsIcon src={skill.src} title={skill.title}/>
          })}
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        <h1 className={`${chivo.variable} font-chivo text-2xl`}>TECHNOLOGIES: </h1>
        <div className="flex flex-row gap-10">
          {TECHNOLOGIES.map((skill) => {
            return <SkillsIcon src={skill.src} title={skill.title}/>
          })}
        </div>
      </div>
    </section>
  );
}

//const SKILLS: string[] = ["Java", "C", "C++", "Python", "Javascript", "HTML", "CSS", "React", "React Native", "Angular", "Node.js", "Express.js", "Spring Boot"];

const SKILLS: ICON_INTERFACE[] = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    title: "Java",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    title: "C",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    title: "C++",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    title: "Python",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    title: "JavaScript",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    title: "HTML5",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    title: "CSS3",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
    title: "Bash",
  }
];

const FRAMEWORKS: ICON_INTERFACE[] = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    title: "Spring",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
    title: "Node.js",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg",
    title: "Express.js",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    title: "React",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    title: "React Native",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    title: "Angular",
  },
];

const TECHNOLOGIES: ICON_INTERFACE[] = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
    title: "Azure",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
    title: "MySQL",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    title: "Firebase"
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg",
    title: "MongoDB",
  },
  {
    src: "https://www.vectorlogo.zone/logos/hibernate/hibernate-icon.svg",
    title: "Hibernate",
  }
];

export default index;