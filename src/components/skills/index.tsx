"use client";

import useMediaQuery from "@/app/hooks/useMediaQuery";
import { motion, Variants } from "framer-motion";
import { Chivo } from "next/font/google";
import { Oswald } from "next/font/google";

interface ICON_INTERFACE {
  src: string,
  title: string,
};

//const COURSEWORK: string[] = ["CS31: Object-Oriented Software Development", "CS32: Data Structures and Algorithms", "CS M51A: Digital Systems Design", "CS35L: Software Construction", "CS111: Operating Systems Principles", "CS180: Algorithms and Complexity"];

const skillVariants: Variants = {
  initial: ({ index, length }) => {
    let xOffset: string = '0px';
    let yOffset: string = '0px';
    if (length % 2 === 1) {
      if (index < Math.floor(length / 2))
        xOffset = '-50px';
      else if (index > Math.floor(length / 2))
        xOffset = '50px';
      else
        yOffset = '50px';
    } else {
      if (index < Math.floor(length / 2))
        xOffset = '-50px';
      else
        xOffset = '50px';
    }

    return {
      x: xOffset,
      y: yOffset,
      opacity: 0,
    }
  },
  animate: ({ index, length }) => {
    let delay = 0;
    if (length % 2 === 1) {
      delay = length - (Math.abs(index - Math.floor(length / 2)));
    } else {
      if (index <= (length / 2) - 1)
        delay = length - (Math.abs(index - ((length / 2) - 1)));
      else
        delay = length - (Math.abs(index - ((length / 2))));
    }

    return {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        ease: "linear",
        delay: delay * 0.25,
      }
    }
  }
}

const chivo = Chivo({
  subsets: ['latin'],
  variable: '--font-chivo',
});

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
});

const SkillsIcon = ({src, title, index, length, isAboveMediumScreens}: {src: string, title: string, index: number, length: number, isAboveMediumScreens: boolean}): JSX.Element => {
  return (
    <motion.div 
      className="flex flex-col items-center transition duration-300 hover:scale-110 select-none"
      whileHover={{
        scale: 1.15,
      }}
      custom={{index, length}}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.25 }}
      variants={skillVariants}
    >
      <img src={src} className="h-[45px] w-[45px] sm:h-[55px] sm:w-[55px] md:h-[60px] md:w-[60px] lg:h-[70px] lg:w-[70px]" />
      <p className={`${oswald.variable} font-oswald text-xl font-light select-none`}>{title}</p>
    </motion.div>
  );
}

const index = (): JSX.Element => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  
  return (
    <section id="skills" className="flex flex-col flex-wrap md:gap-y-5">
      <div className="flex flex-col md:gap-y-2 items-center justify-center">
        {/*<h1 className={`${chivo.variable} font-chivo text-2xl`}>SKILLS:</h1>*/}
        <div className="flex flex-row flex-wrap gap-7 md:gap-14 items-center justify-center">
          {SKILLS.map((skill, index) => {
            return <SkillsIcon key={index} src={skill.src} title={skill.title} index={index} length={SKILLS.length} isAboveMediumScreens={isAboveMediumScreens}/>
          })}
        </div>
      </div>
      <div className="flex flex-col md:gap-y-2 items-center justify-center">
        {/*<h1 className={`${chivo.variable} font-chivo text-2xl`}>LIBRARIES AND FRAMEWORKS:</h1>*/}
        <div className="flex flex-row flex-wrap gap-7 md:gap-14 items-center justify-center">
          {FRAMEWORKS.map((skill, index) => {
            return <SkillsIcon key={index} src={skill.src} title={skill.title} index={index} length={FRAMEWORKS.length} isAboveMediumScreens={isAboveMediumScreens}/>
          })}
        </div>
      </div>
      <div className="flex flex-col md:gap-y-2 items-center justify-center">
        {/*<h1 className={`${chivo.variable} font-chivo text-2xl`}>TECHNOLOGIES: </h1>*/}
        <div className="flex flex-row flex-wrap gap-7 md:gap-14 items-center justify-center">
          {TECHNOLOGIES.map((skill, index) => {
            return <SkillsIcon key={index} src={skill.src} title={skill.title} index={index} length={TECHNOLOGIES.length} isAboveMediumScreens={isAboveMediumScreens}/>
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