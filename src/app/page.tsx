"use client";

import Intro from "@/components/intro";
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

  /*useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothTouch: false,
      wheelMultiplier: 0.35,
      touchMultiplier: 0.5,
      infinite: false,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

  }, []);*/

  return (
    <>
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <main>
        <div className="max-w-[1200px] mx-auto">
          <Intro />
          <Projects />
          <div className="max-w-lg space-y-4 mx-auto py-24 text-neutral-300">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
              earum nobis quasi repellat. Amet facere nulla dolorum accusantium
              sit dolores odio excepturi facilis laboriosam officiis dolorem,
              nobis reprehenderit molestiae.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
              earum nobis quasi repellat. Amet facere nulla dolorum accusantium
              sit dolores odio excepturi facilis laboriosam officiis dolorem,
              nobis reprehenderit molestiae.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
              earum nobis quasi repellat. Amet facere nulla dolorum accusantium
              sit dolores odio excepturi facilis laboriosam officiis dolorem,
              nobis reprehenderit molestiae.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
              earum nobis quasi repellat. Amet facere nulla dolorum accusantium
              sit dolores odio excepturi facilis laboriosam officiis dolorem,
              nobis reprehenderit molestiae.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
              earum nobis quasi repellat. Amet facere nulla dolorum accusantium
              sit dolores odio excepturi facilis laboriosam officiis dolorem,
              nobis reprehenderit molestiae.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
              earum nobis quasi repellat. Amet facere nulla dolorum accusantium
              sit dolores odio excepturi facilis laboriosam officiis dolorem,
              nobis reprehenderit molestiae.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
              earum nobis quasi repellat. Amet facere nulla dolorum accusantium
              sit dolores odio excepturi facilis laboriosam officiis dolorem,
              nobis reprehenderit molestiae.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
              earum nobis quasi repellat. Amet facere nulla dolorum accusantium
              sit dolores odio excepturi facilis laboriosam officiis dolorem,
              nobis reprehenderit molestiae.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
              earum nobis quasi repellat. Amet facere nulla dolorum accusantium
              sit dolores odio excepturi facilis laboriosam officiis dolorem,
              nobis reprehenderit molestiae.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
              earum nobis quasi repellat. Amet facere nulla dolorum accusantium
              sit dolores odio excepturi facilis laboriosam officiis dolorem,
              nobis reprehenderit molestiae.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
              earum nobis quasi repellat. Amet facere nulla dolorum accusantium
              sit dolores odio excepturi facilis laboriosam officiis dolorem,
              nobis reprehenderit molestiae.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
              earum nobis quasi repellat. Amet facere nulla dolorum accusantium
              sit dolores odio excepturi facilis laboriosam officiis dolorem,
              nobis reprehenderit molestiae.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
              earum nobis quasi repellat. Amet facere nulla dolorum accusantium
              sit dolores odio excepturi facilis laboriosam officiis dolorem,
              nobis reprehenderit molestiae.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
              earum nobis quasi repellat. Amet facere nulla dolorum accusantium
              sit dolores odio excepturi facilis laboriosam officiis dolorem,
              nobis reprehenderit molestiae.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
              earum nobis quasi repellat. Amet facere nulla dolorum accusantium
              sit dolores odio excepturi facilis laboriosam officiis dolorem,
              nobis reprehenderit molestiae.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
              earum nobis quasi repellat. Amet facere nulla dolorum accusantium
              sit dolores odio excepturi facilis laboriosam officiis dolorem,
              nobis reprehenderit molestiae.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
              earum nobis quasi repellat. Amet facere nulla dolorum accusantium
              sit dolores odio excepturi facilis laboriosam officiis dolorem,
              nobis reprehenderit molestiae.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
              earum nobis quasi repellat. Amet facere nulla dolorum accusantium
              sit dolores odio excepturi facilis laboriosam officiis dolorem,
              nobis reprehenderit molestiae.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
              earum nobis quasi repellat. Amet facere nulla dolorum accusantium
              sit dolores odio excepturi facilis laboriosam officiis dolorem,
              nobis reprehenderit molestiae.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
              earum nobis quasi repellat. Amet facere nulla dolorum accusantium
              sit dolores odio excepturi facilis laboriosam officiis dolorem,
              nobis reprehenderit molestiae.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
              earum nobis quasi repellat. Amet facere nulla dolorum accusantium
              sit dolores odio excepturi facilis laboriosam officiis dolorem,
              nobis reprehenderit molestiae.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
