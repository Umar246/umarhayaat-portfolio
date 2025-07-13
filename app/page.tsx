import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
// import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    // Problem: overflow-hidden prevents full page scrolling
    <main
      className="relative bg-black-100 flex justify-center items-center flex-col 
overflow-hidden mx-auto sm:px-10 px-5"
    >
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <section id="about">
          <Grid />
        </section>
        <section id="projects">
          <RecentProjects />
        </section>
        <section id="testimonials">
          <Clients />
        </section>
        <Experience />
        <Approach />
        <section id="contact">
          <Footer />
        </section>
      </div>
    </main>
  );
}
