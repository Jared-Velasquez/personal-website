"use client";

import Intro from "@/components/intro";
import Skills from '@/components/skills';
import Projects from '@/components/projects';
//import Lenis from "@studio-freight/lenis";
import { useEffect, useState } from "react";

import styles from './styles.module.css';
import Navbar from "@/components/navbar/Navbar";
import { useRouter } from "next/navigation";
import useMediaQuery from "./hooks/useMediaQuery";


export default function Home() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollX === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-whip">
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <div className="w-5/6 mx-auto md:h-full">
        <Intro />
      </div>
      <div className="w-5/6 mx-auto">
        <Skills />
      </div>
      <div className="w-5/6 mx-auto md:h-full">
        <Projects />
      </div>
    </div>
  );
}
