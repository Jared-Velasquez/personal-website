"use client";

import Intro from "@/components/intro";
import About from "@/components/about";
import Skills from '@/components/skills';
import Positions from '@/components/roles';
import Projects from '@/components/projects';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="app bg-whip">
      <div className="w-5/6 mx-auto md:h-full">
        <Intro />
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
