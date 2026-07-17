import { useState } from "react";
import { projects } from "../data";
import ProjectCard from "../components/ProjectCard";
import "../styles/Projects.css";

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Web", "AI"];
  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section projects-section">
      <h2 className="section-title">Featured Projects</h2>

      <div className="filter-bar">
        {categories.map((c) => (
          <button
            key={c}
            className={c === filter ? "filter-btn active" : "filter-btn"}
            onClick={() => setFilter(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {filtered.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
