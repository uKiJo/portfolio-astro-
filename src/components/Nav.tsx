import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import SwitchButton from "./SwitchButton";
import SocialMedia from "./SocialMedia";
import Fallback from "./Fallback";
import { usePreventServerClientMismatch } from "src/hooks/usePreventServerClientMismatch";
import MenuButton from "./MenuButton";

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
  const isMounted = usePreventServerClientMismatch();

  const toggleOpen = () => setIsOpen(!isOpen);

  if (!isMounted) {
    // return <Fallback />;
    return <div className="md:mb-24 bp:h-36 xs:mb-12 xs:h-16"></div>;
  }

  return (
    <nav className="bp:pt-12 xs:pt-0 md:mb-24 xs:mb-12 bp:static xs:relative bp:h-36 xs:h-16">
      <div className="w-full bp:hidden xs:flex justify-end p-6 fixed z-20 right-0 bg">
        <MenuButton isOpen={isOpen} toggleOpen={toggleOpen} />
      </div>

      {!isSmallScreen && (
        <div
          className={`bp:static bp:flex xs:hidden xs:fixed xs:top-0 w-full xs:left-0 overflow-hidden md:flex-row xs:flex-col bp:h-fit xs:items-center md:justify-between xs:justify-center z-10 bp:bg-[transparent] bp:dark:bg-[transparent] xs:bg-dark_text xs:dark:bg-lprimary`}
        >
          <div className="relative flex bp:flex-row xs:flex-col md:justify-start bp:justify-center font-bold text-title dark:text-title_dark w-full bp:p-0 xs:p-12">
            {items.map((item, i) => (
              <a
                // onClick={toggleOpen}
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
            className={`bp:hidden xs:flex bp:static xs:fixed xs:top-0 w-full xs:left-0 overflow-hidden md:flex-row xs:flex-col bp:h-fit xs:h-screen xs:items-center md:justify-between xs:justify-center z-10 bp:bg-[transparent] bp:dark:bg-[transparent] xs:bg-[#D9D9D9] xs:dark:bg-lprimary`}
          >
            <div className="flex bp:flex-row xs:flex-col md:justify-start xs:justify-center font-poppins font-semibold text-title dark:text-title_dark  w-full bp:p-0 xs:p-12">
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
