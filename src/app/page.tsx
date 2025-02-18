"use client";

import Intro from "@/components/intro";
import About from "@/components/about";
import Skills from '@/components/skills';
import Positions from '@/components/roles';
import Projects from '@/components/projects';
import Footer from '@/components/footer';
import { useEffect, useState } from "react";

import Navbar from "@/components/navbar/Navbar";
import useMediaQuery from "./hooks/useMediaQuery";


export default function Home() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  //const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

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
      <div className="w-5/6 mx-auto md:h-fit">
        <About />
      </div>
      <div className="w-5/6 mx-auto md:h-fit">
        <Skills />
      </div>
      <div className="w-5/6 mx-auto md:h-fit">
        <Positions />
      </div>
      <div className="w-5/6 mx-auto md:h-fit">
        <Projects />
      </div>
      <div className="w-5/6 mx-auto md:h-fit">
        <Footer />
      </div>
    </div>
  );
}
