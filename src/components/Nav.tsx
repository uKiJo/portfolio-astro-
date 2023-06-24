import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import SwitchButton from "./SwitchButton";
import SocialMedia from "./SocialMedia";
import Fallback from "./Fallback";

const items = ["Home", "Projects", "Skills", "Contact"];

const navbar = {
  open: {
    height: 0,
  },
  closed: {
    height: "100vh",
  },
  exit: {
    height: 0,
  },
};

const Navbar: React.FC = () => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 500px)" });
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <Fallback />;
  }

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <nav className="bp:pt-12 xs:pt-0 md:mb-24 xs:mb-12 relative bp:h-36 xs:h-16">
      {isSmallScreen && (
        <div className="w-full flex justify-end p-6 fixed z-20 right-0 bg">
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
        </div>
      )}
      {!isSmallScreen && (
        <div
          className={`flex bp:static xs:fixed xs:top-0 w-full xs:left-0 overflow-hidden md:flex-row xs:flex-col bp:h-fit xs:items-center md:justify-between xs:justify-center z-10 bp:bg-[transparent] bp:dark:bg-[transparent] xs:bg-dark_text xs:dark:bg-lprimary`}
        >
          <div className="relative flex bp:flex-row xs:flex-col md:justify-start bp:justify-center font-bold text-title dark:text-title_dark w-full bp:p-0 xs:p-12">
            {items.map((item, i) => (
              <a
                onClick={toggleOpen}
                key={i}
                className="lg:first:pl-0 bp:p-4 xs:text-2xl bp:text-base xs:font-semibold xs:pb-4 text-center"
                href={`${item === "Home" ? "/" : `/${item.toLowerCase()}`} `}
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center sm:grow ">
            <SwitchButton />
            <SocialMedia />
          </div>
        </div>
      )}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            variants={navbar}
            initial={"open"}
            animate={"closed"}
            exit={"exit"}
            className={`bp:hidden xs:flex bp:static xs:fixed xs:top-0 w-full xs:left-0 overflow-hidden md:flex-row xs:flex-col bp:h-fit xs:max-h-screen xs:items-center md:justify-between xs:justify-center z-10 bp:bg-[transparent] bp:dark:bg-[transparent] xs:bg-[#D9D9D9] xs:dark:bg-lprimary`}
          >
            <div className="flex bp:flex-row xs:flex-col grow md:justify-start xs:justify-center font-poppins font-semibold text-title dark:text-title_dark  w-full bp:p-0 xs:p-12">
              {items.map((item, i) => (
                <a
                  onClick={toggleOpen}
                  key={i}
                  className="lg:first:pl-0 bp:p-4 xs:text-2xl bp:text-base xs:py-4 text-center dark:text-text"
                  href={`${item === "Home" ? "/" : `/${item.toLowerCase()}`} `}
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="flex items-center sm:grow py-4">
              <SwitchButton />
              <SocialMedia />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
