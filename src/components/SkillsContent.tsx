import * as Tooltip from "@radix-ui/react-tooltip";
import tools from "@assets/tools.svg";
import { technologies } from "@data/data";
import Description from "./Description";
import Icon from "./Icon";
import useStaggerAnimation from "src/hooks/useStaggerAnimation";
import useAnimation from "src/hooks/useAnimation";

const SkillsContent: React.FC = () => {
  useAnimation(
    ".desc",
    { y: [10, 0], opacity: [0, 10] },
    { delay: 0.5, duration: 0.3 }
  );
  useAnimation(
    ".tools",
    { y: [10, 0], opacity: [0, 10] },
    { delay: 0.5, duration: 0.3 }
  );
  useStaggerAnimation(".tech", { opacity: [0, 1], y: [20, 0] });
  return (
    <div className="flex md:flex-row xs:flex-col md:justify-between md:items-start xs:items-center ">
      <div className="font-poppins text-txt-secondary md:text-xl xs:text-base mb-12 md:w-1/2 xs:w-full md:order-first xs:order-last">
        <Description>
          Though necessary, i believe what technologies we use to build our
          products are only tools and not what matters the most. In fact what
          matters is that we solve the problem the right way using the right
          tools. As a frontend developer, i mainly use the stack stated below:
        </Description>
        <div
          // style={props}
          className="flex flex-wrap gap-4 bp:justify-start xs:justify-center"
        >
          {technologies.map((tech) => (
            <div
              key={tech.id}
              className="md:h-[60px] xs:h-12 tech shadow-card dark:shadow-none"
            >
              <Tooltip.Provider>
                <Tooltip.Root>
                  <Tooltip.Trigger aria-label={tech.name}>
                    <div className="md:p-4 xs:p-3 dark:bg-lprimary bg-white dark:shadow-none shadow-card4 rounded">
                      <Icon
                        name={tech.name}
                        style="text-paragraph dark:text-paragraph_dark"
                      />
                    </div>
                  </Tooltip.Trigger>
                  <Tooltip.Portal>
                    <Tooltip.Content className="TooltipContent dark:bg-txt bg-white">
                      {tech.name}
                      <Tooltip.Arrow className="dark:fill-txt fill-white" />
                    </Tooltip.Content>
                  </Tooltip.Portal>
                </Tooltip.Root>
              </Tooltip.Provider>
            </div>
          ))}
        </div>
      </div>
      <div>
        <img
          className="lg:w-fit sm:w-72 xs:w-64 xs:mb-8 tools"
          src={tools}
          alt="tools"
        />
      </div>
    </div>
  );
};

export default SkillsContent;
