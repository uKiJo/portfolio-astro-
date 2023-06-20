import { useEffect } from "react";
import {
  motion,
  useAnimate,
  stagger,
  cubicBezier,
  animate,
  easeIn,
} from "framer-motion";
import illustration from "../../public/illustration.svg";

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });
const easing = cubicBezier(0.35, 0.17, 0.3, 0.86);
// const easing = easeIn;

const Hero: React.FC = () => {
  // const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      ".text",
      { x: [20, 0], opacity: [0, 1] },
      { delay: staggerMenuItems, ease: easing }
    );
    // animate(sequence, { delay: staggerMenuItems, ease: easing });
  }, []);

  return (
    <header className="mb-24">
      <div className="flex md:flex-row xs:flex-col justify-between items-center h-min font-poppins text-primary dark:text-dark_text">
        <div>
          <div className="text">
            <h1 className="lg:text-6xl md:text-[44px] sm:text-4xl xs:text-3xl font-bold leading-14 md:mb-10 xs:mb-6">
              Hi, I am Youn<span className="text-secondary">e</span>s
            </h1>
          </div>
          <div className="text opacity-0 translate-x-6">
            <p className="lg:text-[22px] lg:leading-8 md:text-xl xs:text-base lg:max-w-md md:max-w-sm font-normal dark:text-dgrey text-lgrey md:mb-10 xs:mb-6 text-lprimary">
              Welcome to my frontend development portfolio, where i bring ideas
              to life by transforming them into visually stunning apps. Let's
              collaborate and build something amazing together!
            </p>
          </div>
          <div className="text opacity-0 translate-x-6">
            <a
              href="/contact"
              className="inline-block bg-secondary text-primary font-bold md:px-8 py-2 xs:px-6 dark:bg-lsecondary hover:shadow-card transition rounded"
            >
              Contact me
            </a>
          </div>
        </div>
        <div className="lg:w-[350px] md:w-72 xs:w-60 xs:mt-12">
          <img src={illustration} alt="me" width="100%" height="100%" />
        </div>
      </div>
    </header>
  );
};

export default Hero;
