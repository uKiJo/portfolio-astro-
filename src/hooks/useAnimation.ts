import { animate, DynamicAnimationOptions } from "framer-motion";
import { useEffect, useLayoutEffect } from "react";

interface AnimateObject {
  [name: string]: number[] | string[];
}

// interface ConfigObject {
//   delay: number | DynamicOption<number>;
//   duration: number;
// }

const useAnimation = (
  element: string,
  animateObj: AnimateObject,
  config?: DynamicAnimationOptions
) => {
  useLayoutEffect(() => {
    animate(element, animateObj, { ...config });
  }, []);
};

export default useAnimation;
