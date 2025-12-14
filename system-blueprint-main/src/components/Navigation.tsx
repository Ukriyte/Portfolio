import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { profile } from "@/data/resume";

const navItems = [
  { label: "about", href: "#about" },
  { label: "experience", href: "#experience" },
  { label: "projects", href: "#projects" },
  { label: "architecture", href: "#architecture" },
  { label: "connect", href: "#connect" },
];

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-3 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="#" className="font-mono text-xs sm:text-lg font-semibold text-primary whitespace-nowrap">
              <span className="text-muted-foreground">~/</span>anurag.dev
            </a>
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="nav-link">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-1 sm:gap-3">
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-1 sm:py-1.5 rounded-md bg-accent text-accent-foreground hover:bg-accent/80 transition-colors font-mono text-[10px] sm:text-xs whitespace-nowrap"
            >
              Resume
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 sm:p-1.5 rounded-md hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
              aria-label="GitHub"
            >
              <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 sm:p-1.5 rounded-md hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="p-1 sm:p-1.5 rounded-md hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
              aria-label="Email"
            >
              <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
