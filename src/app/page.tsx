import { Navigation } from "@/app/components/Navigation";
import { Hero } from "@/app/components/Hero";
import { About } from "@/app/components/About";
import { Experience } from "@/app/components/Experience";
import { Projects } from "@/app/components/Projects";
import { Blog } from "@/app/components/Blog";
import { Contact } from "@/app/components/Contact";
import { SocialLinks, EmailLink } from "@/app/components/SocialLinks";
import { Footer } from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* <Navigation />
      <SocialLinks />
      <EmailLink /> */}

      <main>
        <Hero />
        <About />
        <Experience />
        {/* <Projects />
        <Blog />
        <Contact /> */}
      </main>

      {/* <Footer /> */}
    </div>
  );
}
