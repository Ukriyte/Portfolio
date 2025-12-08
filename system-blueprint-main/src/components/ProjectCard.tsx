import { motion } from "framer-motion";
import { Github, ExternalLink, Play, ArrowRight, ImageIcon } from "lucide-react";
import { ArchitectureCard } from "./ArchitectureCard";

// Project images
import neuralDriveImg from "@/assets/projects/neural-drive.png";
import taskflowImg from "@/assets/projects/taskflow.png";
import urlShortenerImg from "@/assets/projects/url-shortener.png";
import cryptoUnwrappedImg from "@/assets/projects/crypto-unwrapped.png";

const projectImages: Record<string, string> = {
  "neural-drive": neuralDriveImg,
  "taskflow": taskflowImg,
  "url-shortener": urlShortenerImg,
  "crypto-unwrapped": cryptoUnwrappedImg,
};

interface Project {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  github: string;
  live?: string;
  demo?: string;
  techStack: string[];
  architecture: {
    layers: { name: string; components: string[] }[];
  };
  features: string[];
  category: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const categoryColors: Record<string, string> = {
  "AI/ML": "bg-terminal-purple/20 text-terminal-purple border-terminal-purple/40",
  "Full-Stack": "bg-terminal-green/20 text-terminal-green border-terminal-green/40",
  "Backend": "bg-terminal-cyan/20 text-terminal-cyan border-terminal-cyan/40",
  "Web3": "bg-terminal-yellow/20 text-terminal-yellow border-terminal-yellow/40",
};

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const projectImage = projectImages[project.id];

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      className="architecture-card group"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
              {project.name}
            </h3>
            <span className={`px-2 py-0.5 text-xs font-mono rounded border ${categoryColors[project.category]}`}>
              {project.category}
            </span>
          </div>
          <p className="font-mono text-sm text-primary mb-1">{project.subtitle}</p>
          <p className="text-sm text-muted-foreground">{project.description}</p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="View on GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors"
              aria-label="View live demo"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md bg-secondary hover:bg-terminal-red hover:text-foreground transition-colors"
              aria-label="Watch demo video"
            >
              <Play className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {/* Three column layout */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Project Screenshot */}
        <div>
          <span className="font-mono text-xs text-muted-foreground mb-3 block">
            // preview
          </span>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-lg border border-border bg-secondary/30 group/img"
          >
            {projectImage ? (
              <>
                <img
                  src={projectImage}
                  alt={`${project.name} screenshot`}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover/img:scale-105"
                />
                {/* Cute overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
                  <span className="font-mono text-xs text-primary flex items-center gap-1.5">
                    <ImageIcon className="w-3 h-3" />
                    click to explore →
                  </span>
                </div>
              </>
            ) : (
              <div className="aspect-video flex items-center justify-center">
                <span className="text-muted-foreground text-sm">No preview</span>
              </div>
            )}
            {/* Cute corner decoration */}
            <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-terminal-green animate-pulse" />
            <div className="absolute top-2 right-5 w-2 h-2 rounded-full bg-terminal-yellow" />
            <div className="absolute top-2 right-8 w-2 h-2 rounded-full bg-terminal-red" />
          </motion.div>
        </div>

        {/* Architecture diagram */}
        <div>
          <span className="font-mono text-xs text-muted-foreground mb-3 block">
            // system_architecture
          </span>
          <ArchitectureCard layers={project.architecture.layers} />
        </div>

        {/* Features & Tech */}
        <div className="space-y-6">
          <div>
            <span className="font-mono text-xs text-muted-foreground mb-3 block">
              // key_features
            </span>
            <ul className="space-y-2">
              {project.features.slice(0, 3).map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                  <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="line-clamp-2">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="font-mono text-xs text-muted-foreground mb-3 block">
              // tech_stack
            </span>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs font-mono bg-secondary rounded text-secondary-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};