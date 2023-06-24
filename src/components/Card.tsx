import { animate, stagger, cubicBezier } from "framer-motion";
import React, { useEffect, useState, useLayoutEffect } from "react";

import Icon from "./Icon";

import Fallback from "./Fallback";
import CustomButton from "./Button";

interface CardProps {
  id: number;
  image: string;
  title: string;
  description: string;
  isFinished: boolean;
  url: string;
  repo: string;
}

const staggerMenuItems = stagger(0.1, { startDelay: 0.7 });
const easing = cubicBezier(0.35, 0.17, 0.3, 0.86);

const Card: React.FC<CardProps> = ({
  title,
  image,
  description,
  id,
  isFinished,
  url,
  repo,
}) => {
  useEffect(() => {
    animate(
      ".card",
      { y: [20, 0], opacity: [0, 1] },
      { delay: staggerMenuItems, ease: easing }
    );
  }, []);

  return (
    <div className="card md:w-64 md:h-96 xs:w-56 bp:p-6 xs:p-4 flex flex-col shadow-card3 hover:shadow-card5 dark:hover:shadow-none  rounded-md overflow-hidden bg-grey dark:bg-lprimary cursor-pointer bg-[#fff]">
      <div className="rounded-lg items-center">
        <div className="p-4 dark:bg-transparent dark:bg-gradient-180 dark:from-transparent dark:to-lgrey bg-gradient-180 from-transparent to-gray-100 rounded-lg dark:border-0 ">
          <img className="h-2/3 rounded " src={image} alt={title} />
        </div>
      </div>
      <div className="grow flex flex-col w-full text-title dark:text-title_dark">
        <div className="grow py-4">
          <h1 className="xs:mb-1 md:text-lg font-semibold">{title}</h1>
          <p className="md:text-sm xs:text-xs font-normal dark:text-paragraph_dark text-paragraph">
            {description}
          </p>
          {/* <span className="font-light text-sm">
            {isFinished ? "" : "(Still under development)"}
          </span> */}
        </div>
        <div className="h-[1px] w-full bg-lgrey opacity-50 mb-4"></div>
        <div className="flex">
          <a className="mr-4 cursor-pointer hover:text-secondary" href={url}>
            <Icon name="external-link" style="md:w-6 md:h-6 xs:w-5 xs:h-5" />
          </a>
          <a className="cursor-pointer hover:text-secondary" href={repo}>
            <Icon name="github" style="md:w-6 md:h-6 xs:w-5 xs:h-5" />
          </a>
        </div>
      </div>
    </div>

    // </a>
  );
};

export default Card;
