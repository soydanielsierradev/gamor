import { useTheme } from "../../context/ThemeContext";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <i
      className={`bx ${
        theme === "dark" ? "bx-toggle-right" : "bx-toggle-left"
      } change-theme`}
      onClick={toggleTheme}
      role="button"
      aria-label="Toggle theme"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && toggleTheme()}
    />
  );
};

export default ThemeToggle;
