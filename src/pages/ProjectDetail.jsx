import { useParams, Link } from "react-router-dom";
import { projects } from "../data";
import "../styles/Projects.css";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <section className="section">
        <h2>Project not found</h2>
        <Link to="/projects">← Back to Projects</Link>
      </section>
    );
  }

  return (
    <section className="section project-detail">
      <Link to="/projects" className="back-link">
        ← Back to Projects
      </Link>
      <h2>{project.title}</h2>
      <p className="project-category">{project.category}</p>
      <p>{project.description}</p>

      <div className="tags">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>

      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="live-link"
        >
          Go live →
        </a>
      )}
    </section>
  );
}
