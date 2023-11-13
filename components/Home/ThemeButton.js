"use client";
import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useState();

  useEffect(() => {
    const systemTheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches
      ? "dark"
      : "light";

    const initialTheme =
      localStorage.getItem("theme") || systemTheme;
    setTheme(initialTheme);
    if (
      initialTheme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)")
          .matches)
    ) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, [theme]);

  const handleLightMode = () => {
    localStorage.setItem("theme", "light");
    setTheme("light");
  };
  const handleDarkMode = () => {
    localStorage.setItem("theme", "dark");
    setTheme("dark");
  };

  return (
    <button
      className=" dark:text-white lg:me-3  ms-5"
      onClick={
        theme === "light" ? handleDarkMode : handleLightMode
      }
    >
      {theme === "dark" ? <FaSun /> : <FaMoon />}
    </button>
  );
};
