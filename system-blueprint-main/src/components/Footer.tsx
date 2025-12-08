import { Github, Linkedin, Mail, Code } from "lucide-react";
import { profile } from "@/data/resume";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Code className="w-5 h-5 text-primary" />
            <span className="font-mono text-sm text-muted-foreground">
              Built with React + TypeScript
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href={profile.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              LeetCode
            </a>
          </div>

          <p className="font-mono text-xs text-muted-foreground">
            © 2024 {profile.name}
          </p>
        </div>
      </div>
    </footer>
  );
};
