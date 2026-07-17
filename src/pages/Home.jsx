import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import ProjectsPage from "./ProjectsPage";
import { about, skills } from "../data";

export default function Home() {
  return (
    <>
      <Hero />
      <About about={about} />
      <Skills skills={skills} />
      <ProjectsPage />
      <Contact />
    </>
  );
}
