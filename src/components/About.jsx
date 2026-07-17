import "../styles/About.css";

export default function About({ about }) {
  return (
    <section id="about" className="section about-section">
      <h2 className="section-title">About Me</h2>
      <div className="about-grid">
        <div className="about-card">
          <h3 className="about-card-title">Background</h3>
          <p>{about.background}</p>
        </div>
        <div className="about-card">
          <h3 className="about-card-title">Certifications</h3>
          <ul className="cert-list">
            {about.certifications.map((cert) => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
