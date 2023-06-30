import { motion } from "framer-motion";
import React from "react";

interface MenuButtonProps {
  isOpen: boolean;
  toggleOpen: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ isOpen, toggleOpen }) => {
  return (
    <>
      <button
        onClick={toggleOpen}
        className="space-y-1.5"
        aria-label="menu-button"
      >
        <motion.span
          animate={{ rotateZ: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
          className="block h-1 w-6 dark:bg-title_dark bg-title"
        ></motion.span>
        <motion.span
          animate={{ width: isOpen ? 0 : 20 }}
          className="block h-1 w-5 dark:bg-title_dark bg-title"
        ></motion.span>
        <motion.span
          animate={{
            rotateZ: isOpen ? -45 : 0,
            width: isOpen ? 24 : 16,
            y: isOpen ? -12 : 0,
          }}
          className="block h-1 w-4 dark:bg-title_dark bg-title"
        ></motion.span>
      </button>
    </>
  );
};

export default MenuButton;
