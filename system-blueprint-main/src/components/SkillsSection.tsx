import { skills } from "@/data/resume";
import { TechStackCard } from "./TechStackCard";

export const SkillsSection = () => {
  const skillCategories = Object.entries(skills);

  return (
    <section id="architecture" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="section-header">Technical Architecture</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map(([category, items], index) => (
            <TechStackCard
              key={category}
              category={category}
              items={items}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
