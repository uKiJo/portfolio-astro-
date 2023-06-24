import { data as projects } from "@data/data";
import Card from "./Card";

const ProjectsContent: React.FC = () => {
  return (
    <div className="flex sm:justify-start xs:justify-center font-poppins md:gap-10 xs:gap-6 flex-wrap bp:pb-6 bp:p-0 xs:p-6">
      {projects.map((project) => (
        <Card key={project.id} {...project} />
      ))}
    </div>
  );
};

export default ProjectsContent;
