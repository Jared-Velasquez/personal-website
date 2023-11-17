import { cubicBezier, motion, MotionValue, useScroll, useTransform, Variants } from "framer-motion";
import { Chivo, Playfair, Oswald } from "next/font/google";
import { useRef } from "react";
import { SpinningText } from "../animated";

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
}

const PROJECTS: PROJECT_INTERFACE[] = [
  {
    header: "UCLA eHealth Research Lab",
    title: "Camradia",
    description: ""
  },
  {
    header: "Personal Project",
    title: "Edify",
    description: ""
  },
  {
    header: "Class Project",
    title: "Buzz",
    description: ""
  },
  {
    header: "Hackathon Project",
    title: "DoctorAMA",
    description: "DoctorAMA is a web-based medical chat app designed to fight discrimination against the LGBTQ+ community"
  },
  {
    header: "Hackathon Project",
    title: "MoonStruck",
    description: ""
  },
  {
    header: "Personal Project",
    title: "InstaClone",
    description: ""
  }
]

/*const Project = ({title, header, description}: PROJECT_INTERFACE): JSX.Element => {
  return (
    <div className="h-[20rem] bg-caramel p-[2rem] rounded-xl">
      <h1 className={`${oswald.variable} font-oswald`}>{header}</h1>
      <h1 className={`${chivo.variable} text-xl font-bold mt-[0.5rem]`}>{title}</h1>
    </div>
  );
}*/

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
        {/*PROJECTS.map((project, index) => {
          return <Project key={index} header={project.header} title={project.title}/>
        })*/}
        <div className="h-[20rem] bg-caramel p-[2rem] rounded-xl">
          <h1 className={`${oswald.variable} font-oswald`}>UCLA eHealth Research Lab</h1>
          <h1 className={`${chivo.variable} text-xl font-bold mt-[0.5rem]`}>Camradia</h1>
          <p>Camradia is an ongoing mental health research project and social media app designed to promote 
            physical fitness, mental wellbeing, and group activity.</p>
        </div>

        <div className="h-[20rem] bg-caramel p-[2rem] rounded-xl">
          <h1 className={`${oswald.variable} font-oswald`}>Personal Project</h1>
          <h1 className={`${chivo.variable} text-xl font-bold mt-[0.5rem]`}>Edify</h1>
          <p>Edify is a learning management system and student database management system made to handle the 
            needs of academic institutions.</p>
        </div>

        <div className="h-[20rem] bg-caramel p-[2rem] rounded-xl">
          <h1 className={`${oswald.variable} font-oswald`}>Class Project</h1>
          <h1 className={`${chivo.variable} text-xl font-bold mt-[0.5rem]`}>Buzz</h1>
          <p>Buzz is a web application that centralizes information about student organizations at UCLA and enables 
            users to host and join events on the campus.</p>
        </div>

        <div className="h-[20rem] bg-caramel p-[2rem] rounded-xl">
          <h1 className={`${oswald.variable} font-oswald`}>Hackathon Project</h1>
          <h1 className={`${chivo.variable} text-xl font-bold mt-[0.5rem]`}>DoctorAMA</h1>
          <p>DoctorAMA is a web-based medical chat app designed to fight discrimination against the LGBTQ+ community. 
            Second-place winner in 2023 UCLA QWER Hacks: Health Category.</p>
        </div>

        <div className="h-[20rem] bg-caramel p-[2rem] rounded-xl">
          <h1 className={`${oswald.variable} font-oswald`}>Hackathon Project</h1>
          <h1 className={`${chivo.variable} text-xl font-bold mt-[0.5rem]`}>Moonstruck</h1>
          <p></p>
        </div>

        <div className="h-[20rem] bg-caramel p-[2rem] rounded-xl">
          <h1 className={`${oswald.variable} font-oswald`}>Personal Project</h1>
          <h1 className={`${chivo.variable} text-xl font-bold mt-[0.5rem]`}>InstaClone</h1>
          <p>InstaClone is a social media app designed to share posts with freinds across the world.</p>
        </div>
      </div>
    </section>
  );
}

export default index;
