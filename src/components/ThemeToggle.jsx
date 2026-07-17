import { useTheme } from "../context/ThemeContext";
import "../styles/ThemeToggle.css";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="switch">
      <input
        type="checkbox"
        className="switch__input"
        id="ThemeSwitch"
        checked={theme === "dark"}
        onChange={toggleTheme}
      />
      <label className="switch__label" htmlFor="ThemeSwitch">
        <span className="switch__indicator"></span>
        <span className="switch__decoration"></span>
      </label>
    </div>
  );
}
