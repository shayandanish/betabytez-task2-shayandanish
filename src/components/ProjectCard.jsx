import { Link } from "react-router-dom";
import "../styles/Projects.css";

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <Link to={`/projects/${project.id}`} className="details-link">
          View Details →
        </Link>
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
      </div>
    </div>
  );
}
