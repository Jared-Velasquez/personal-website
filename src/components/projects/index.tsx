import { cubicBezier, motion, MotionValue, useScroll, useTransform, Variants } from "framer-motion";
import { Chivo, Playfair, Oswald } from "next/font/google";
import { useRef } from "react";
import { SpinningText } from "../animated";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const projectContainerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
}

const chivo = Chivo({
  subsets: ['latin'],
  variable: '--font-chivo',
});

const playfair = Playfair({
  subsets: ['latin'],
  variable: '--font-playfair',
});

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
});

interface PROJECT_INTERFACE {
  header: string,
  title: string,
  description: string,
  githubLink?: string,
  websiteLink?: string,
  icons?: string[],
}

const PROJECTS: PROJECT_INTERFACE[] = [
  {
    header: "UCLA eHealth Research Lab",
    title: "Camradia",
    description: "Camradia is an ongoing mental health research project and social media app designed to promote physical fitness, mental wellbeing, and group activity.",
    websiteLink: "https://camradia.com/",
    icons: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", 
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"]
  },
  {
    header: "Personal Project",
    title: "Edify",
    description: "Edify is a learning management system and student database management system made to handle the needs of academic institutions.",
    githubLink: "https://github.com/Jared-Velasquez/Edify",
    icons: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", 
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg", 
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    "https://www.vectorlogo.zone/logos/hibernate/hibernate-icon.svg", 
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"]
  },
  {
    header: "Class Project",
    title: "Buzz",
    description: "Buzz is a web application that centralizes information about student organizations at UCLA and enables users to host and join events on the campus.",
    githubLink: "https://github.com/benweschler/buzz",
    icons: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg", 
    "https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"],
  },
  {
    header: "Hackathon Project",
    title: "DoctorAMA",
    description: "DoctorAMA is a web-based medical chat app designed to fight discrimination against the LGBTQ+ community. Second-place winner in 2023 UCLA QWER Hacks: Health Category.",
    githubLink: "https://github.com/Jared-Velasquez/doctor-ama",
    websiteLink: "https://hellodoctorama.tech",
    icons: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", 
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"]
  },
  {
    header: "Hackathon Project",
    title: "MoonStruck",
    description: "MoonStruck is a web application that enables couples who are in a long-distance relationship to stay in touch with each other and allows them to keep an active role in each others’ everyday lives. Participant in 2023 LA Hacks.",
    githubLink: "https://github.com/ayangelah/moonstruck",
    websiteLink: "https://moon-struck.tech/",
    icons: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg", 
    "https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"]
  },
  {
    header: "Personal Project",
    title: "InstaClone",
    description: "InstaClone is a social media app where users can upload photos and post comments for followers to view. Designed to replicate the UI and functionality of Instagram. My first major project.",
    githubLink: "https://github.com/Jared-Velasquez/InstaClone",
    icons: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", 
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"]
  }
]

const Project = ({title, header, description, githubLink, websiteLink, icons}: PROJECT_INTERFACE): JSX.Element => {
  return (
    <motion.div 
      className="flex flex-col justify-evenly bg-coffeeBlack p-[2rem] rounded-xl text-whip"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 1 }}
      variants={{
        initial: {
          opacity: 0,
          y: 50
        },
        animate: {
          opacity: 1,
          y: 0
        }
      }}
    >
      <h1 className={`${oswald.variable} font-oswald`}>{header}</h1>
      <h1 className={`${chivo.variable} text-xl font-bold mt-[0.5rem]`}>{title}</h1>
      <p className="mt-[1rem] mb-[1rem]">{description}</p>
      
      {/* Icons */}
      <div className="flex flex-row bottom-0">
        {(githubLink || websiteLink) && <div className="pr-[1rem] border-r-2 rounded-sm mr-[1.5rem]">
          {githubLink && <a
            className="hover:opacity-50 transition duration-250 mr-[1rem]"
            href={githubLink}
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="2xl" />
          </a>}

          {websiteLink && <a
            className="hover:opacity-50 transition duration-250"
            href={websiteLink}
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLink} size="2xl" />
          </a>}
        </div>}

        <div className="flex flex-row">
          {icons?.map((icon, index) => (
            <img key={index} src={icon} className="mr-[1rem] h-[35px] w-[35px] sm:h-[35px] sm:w-[35px] md:h-[35px] md:w-[35px] lg:h-[35px] lg:w-[35px]" />
          ))}
        </div>

      </div>
    </motion.div>
  );
}

const index = (): JSX.Element => {
  return (
    <section id="projects" className="flex flex-col justify-center items-center mt-[2.5rem]">
      <motion.div
        className={`${chivo.variable} text-3xl font-bold py-[2rem] select-none`}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1 }}
        variants={{
          initial: {
            opacity: 0
          },
          animate: {
            opacity: 1
          }
        }}
      >
        <SpinningText text={"My Projects"} />
      </motion.div>

      {/* PROJECTS GRID*/}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 auto-cols-max">
        {PROJECTS.map((project, index) => {
          return <Project key={index} {...project}/>
        })}
      </div>
    </section>
  );
}

export default index;
