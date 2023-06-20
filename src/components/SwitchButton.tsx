import React, { useState, useEffect } from "react";
import sprite from "../sprite.svg";

const SwitchButton: React.FC = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") ?? "light"
  );

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

  return (
    <button
      className="p-2 inline-block mr-2 text-secondary"
      onClick={handleClick}
    >
      {theme === "light" ? (
        <svg className="md:w-8 md:h-8 xs:w-7 xs:h-7   transition-all">
          <use href={sprite + "#dark-mode"} />
        </svg>
      ) : (
        <svg className="md:w-8 md:h-8 xs:w-7 xs:h-7   transition-all">
          <use href={sprite + "#light-mode"} />
        </svg>
      )}
    </button>
  );
};

export default SwitchButton;
