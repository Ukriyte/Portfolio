import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ConnectSection } from "@/components/ConnectSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ConnectSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
