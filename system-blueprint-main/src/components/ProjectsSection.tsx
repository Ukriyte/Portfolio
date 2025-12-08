import { projects } from "@/data/resume";
import { ProjectCard } from "./ProjectCard";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="section-header">Engineering Projects</h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
