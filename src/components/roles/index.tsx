import useMediaQuery from "@/app/hooks/useMediaQuery";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { Chivo, Oswald } from "next/font/google";
import { SpinningText } from "../animated";
import Image from "next/image";

interface ROLE_INTERFACE {
    header: string,
    title: string,
    description: string,
    githubLink?: string,
    websiteLink?: string,
    icons?: string[],
}

const chivo = Chivo({
  subsets: ['latin'],
  variable: '--font-chivo',
});

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
});

const ROLES: ROLE_INTERFACE[] = [
    {
        header: "AEG Worldwide",
        title: "Application Developer Intern",
        description: "I lead the develeopment of a modern financial application by architecting a scalable, serverless solution on Azure using CQRS, Durable Functions, and Cosmos DB. I integrated Microsoft Entra ID for secure authentication, implemented JWT validation and caching at the API Gateway, and built a .NET MAUI frontend.",
        icons: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-plain-wordmark.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"]
    },
    {
        header: "Pilipinos in Engineering and Science @ UCLA",
        title: "Technical Lead",
        description: "I mentor club members through backend development and system design workshops. I spearhead the architecture of scalable cloud solutions, including a Tagalog language learning app built with AWS Lambda, EventBridge, and Fargate. This project integrates Java Spring, FastAPI, and ML microservices to deliver personalized, real-time user experiences.",
        websiteLink: "https://piesucla.wixsite.com/pies",
        icons: ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"]
    },
    {
        header: "ACM Cloud @ UCLA",
        title: "Cloud Consultant",
        description: "I assist the architecture of cloud solutions for businesses, startups, and nonprofits in the local LA community.",
        websiteLink: "https://cloud.uclaacm.com/",
        icons: ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg"]
    }
]

const Role = ({title, header, description, githubLink, websiteLink, icons}: ROLE_INTERFACE): JSX.Element => {
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

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
        {isAboveSmallScreens ? <>
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
                <Image key={index} alt={"Skill Icon"} src={icon} width={35} height={35} className="mr-[1rem] h-[30px] w-[30px] sm:h-[35px] sm:w-[35px]" />
                ))}
            </div>
            </div>
        </> : <>
            <h1 className={`${oswald.variable} font-oswald`}>{header}</h1>
            <h1 className={`${chivo.variable} text-xl font-bold mt-[0.5rem]`}>{title}</h1>
            <div className="flex flex-row mt-[0.5rem]">
            {icons?.map((icon, index) => (
                <Image key={index} alt={"Skill Icon"} src={icon} width={35} height={35} className="mr-[1rem] h-[30px] w-[30px] sm:h-[35px] sm:w-[35px]" />
            ))}
            </div>
            <p className="mt-[1rem] mb-[1rem]">{description}</p>

            {(githubLink || websiteLink) && <div className="pr-[1rem] rounded-sm mr-[1.5rem]">
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
        </>}
        </motion.div>
    );
    }

const Index = (): JSX.Element => {
return (
    <section id="positions" className="flex flex-col justify-center items-center mt-[2.5rem]">
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
            <SpinningText text={"My Positions"} />
        </motion.div>

        {/* POSITIONS GRID*/}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 auto-cols-max">
            {ROLES.map((role, index) => {
            return <Role key={index} {...role}/>
            })}
        </div>
    </section>
);
}

export default Index;