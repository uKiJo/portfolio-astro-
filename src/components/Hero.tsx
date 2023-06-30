// import { useHeroAnimation } from "../hooks/useHeroAnimation";
import useStaggerAnimation from "src/hooks/useStaggerAnimation";

import illustration from "../../public/illustration.svg";
import CustomButton from "./Button";
import useAnimation from "src/hooks/useAnimation";

const Hero: React.FC = () => {
  // useHeroAnimation();
  useStaggerAnimation(
    ".text",
    { x: [20, 0], opacity: [0, 1] },
    { duration: 1 }
  );

  useAnimation(".hero-image", { opacity: [0, 1] }, { delay: 1 });

  return (
    <header className="mb-24">
      <div className="flex md:flex-row xs:flex-col justify-between items-center font-poppins text-primary dark:text-white">
        <div>
          <div className="text">
            <h1 className="lg:text-6xl md:text-[44px] sm:text-4xl xs:text-3xl font-extrabold leading-14 md:mb-10 xs:mb-6">
              Hi, I am Youn<span className="text-secondary">e</span>s
            </h1>
          </div>
          <div className="text">
            <p className="lg:text-[22px] lg:leading-8 md:text-xl xs:text-base lg:max-w-md md:max-w-sm font-normal dark:text-paragraph_dark md:mb-10 xs:mb-6 text-paragraph">
              Welcome to my frontend development portfolio, where i bring ideas
              to life by transforming them into visually stunning apps. Let's
              collaborate and build something amazing together!
            </p>
          </div>
          <div className="text">
            <CustomButton url="/contact">Contact me</CustomButton>
          </div>
        </div>
        <div className="lg:w-[350px] md:w-72 xs:w-60 bp:mt-0 xs:mt-12 hero-image">
          <img src={illustration} alt="me" width="100%" height="100%" />
        </div>
      </div>
    </header>
  );
};

export default Hero;
