import { useEffect, useState } from "react";
import { IoMoon, IoSunny } from "react-icons/io5/index.js";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const themes = ["light", "dark"];

export default function ThemeToggle() {
  // const [isMounted, setIsMounted] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      if (
        typeof localStorage !== "undefined" &&
        localStorage.getItem("theme")
      ) {
        return localStorage.getItem("theme");
      }
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
      }
      return "light";
    }
  });
  const toggleTheme = (checked: boolean) => {
    const t = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", t);
    setTheme(t);
    setDarkMode(checked);
  };

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
    }
  }, [theme]);

  // useEffect(() => {
  //   setIsMounted(true);
  // }, []);

  return (
    <DarkModeSwitch
      checked={isDarkMode}
      onChange={toggleTheme}
      moonColor="black"
      sunColor="white"
    />
  );
}
