import React, { useState, useEffect } from "react";
import sprite from "@assets/sprite.svg";
import Icon from "./Icon";

const SwitchButton: React.FC = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");
  const [isMounted, setIsMounted] = useState(false);

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    // return <Fallback />;
    return null;
  }

  return (
    <button
      className="p-2 inline-block mr-2 dark:text-secondary"
      onClick={handleClick}
      aria-label="dark-mode-button"
    >
      {theme === "light" ? (
        <Icon name="dark-mode" />
      ) : (
        <Icon name="light-mode" />
      )}
    </button>
  );
};

export default SwitchButton;
