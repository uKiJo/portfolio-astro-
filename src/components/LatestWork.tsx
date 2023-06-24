import { useAnimate, animate } from "framer-motion";
import Thumbnail from "./Thumbnails";
import { useEffect } from "react";
import { data as projects } from "@data/data";

const LatestWork: React.FC = () => {
  // const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(".latest", { opacity: [0, 1] }, { delay: 1 });
  }, []);

  return (
    <section className="mx-auto latest">
      <h1 className="font-poppins text-4xl font-semibold text-title dark:text-title_dark mb-8 md:text-start xs:text-center">
        Latest work
      </h1>
      <div className="flex gap-10 flex-wrap md:justify-start xs:justify-center bp:p-0 xs:p-4">
        {projects.map((project) => (
          <Thumbnail key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default LatestWork;
