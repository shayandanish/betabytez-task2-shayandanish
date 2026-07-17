import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import logo from "../assets/portfolio-logo.png";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" />
        </Link>
        <div className="nav-links">
          <a href="/#home">Home</a>
          <a href="/#skills">Skills</a>
          <Link to="/projects">Projects</Link>
          <a href="/#contact">Contact</a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
