import { animate } from "framer-motion";
import { useEffect } from "react";

interface HeadingProps {
  children: string;
  style?: string;
}

const Heading: React.FC<HeadingProps> = ({ children, style }) => {
  useEffect(() => {
    animate(".heading", { opacity: [0, 1] }, { delay: 0.3 });
  }, []);
  return (
    <h1
      className={`heading md:mb-12 xs:mb-6 sm:text-5xl xs:text-3xl font-poppins font-bold dark:text-title_dark text-title ${style}`}
    >
      {children}
    </h1>
  );
};

export default Heading;
