import { animate, stagger, cubicBezier, DynamicOption } from "framer-motion";
import { useEffect } from "react";

interface AnimateObject {
  [name: string]: number[] | string[];
}

interface ConfigObject {
  [name: string]: number | DynamicOption<number>;
}

const staggerMenuItems = stagger(0.1, { startDelay: 0.7 });
const easing = cubicBezier(0.35, 0.17, 0.3, 0.86);

const useStaggerAnimation = (
  element: string,
  animateObj: AnimateObject,
  config?: ConfigObject
) => {
  useEffect(() => {
    animate(element, animateObj, {
      delay: staggerMenuItems,
      ease: easing,
      ...config,
    });
  }, []);
};

export default useStaggerAnimation;
