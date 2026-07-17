import { useEffect, useState } from "react";
import { profile } from "../data";
import myPic from "../assets/my-pic.jpeg";
import "../styles/Hero.css";

export default function Hero() {
  const [gh, setGh] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${profile.githubUsername}`)
      .then((res) => res.json())
      .then((data) => setGh(data))
      .catch(() => setGh(null));
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>{profile.name}</h1>
        <p className="tagline">{profile.tagline}</p>
        {gh && (
          <div className="github-summary">
            <p>
              {gh.public_repos} public repos · {gh.followers} followers
            </p>
            {gh.bio && <p className="gh-bio">{gh.bio}</p>}
          </div>
        )}
      </div>
      <div className="hero-image">
        <img src={myPic} alt={profile.name} />
      </div>
    </section>
  );
}
