import { Navigation } from "@/app/components/Navigation";
import { Hero } from "@/app/components/Hero";
import { About } from "@/app/components/About";
import { Experience } from "@/app/components/Experience";
import { Projects } from "@/app/components/Projects";
import { Contact } from "@/app/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
