import { useState, useEffect } from "react";

export const ThemeSwitcherDOS = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

    if (theme === "dark" || (!theme && darkQuery.matches)) setTheme("dark");

    darkQuery.addEventListener("change", (e) => {
      if (!localStorage.getItem("theme")) {
        setTheme(e.matches ? "dark" : "light");
      }
    });

    return () => darkQuery.removeEventListener("change", () => {});
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    // <button onClick={handleThemeChange}>
    //   {theme === "light" ? "Modo oscuro" : "Modo claro"}
    // </button>
    <div className="toggle" onClick={handleThemeChange}>
      <input type="checkbox" />
      <label></label>
    </div>
  );
};
