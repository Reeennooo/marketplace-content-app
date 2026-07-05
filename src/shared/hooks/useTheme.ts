import { useEffect, useState } from "react";

type Theme = 'dark' | 'light';

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      // TODO FIX Темы тут
      // const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      // setTheme(systemPrefersDark ? "dark" : "light");
      // document.documentElement.classList.toggle("dark", systemPrefersDark);

      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return { theme, toggleTheme };
};