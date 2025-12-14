import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { profile } from "@/data/resume";

const navItems = [
  { label: "about", href: "#about" },
  { label: "experience", href: "#experience" },
  { label: "projects", href: "#projects" },
  { label: "architecture", href: "#architecture" },
  { label: "connect", href: "#connect" },
];

// 👇 PUT YOUR RESUME LINK HERE
const RESUME_URL = "https://drive.google.com/file/d/1tQ7w10Lr3XbeinsuvvhWUOR2fI6Vzw_k/view?usp=sharing";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="#" className="hidden md:block font-mono text-lg font-semibold text-primary">
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
          <div className="flex items-center gap-3">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-md bg-accent text-accent-foreground hover:bg-accent/80 transition-colors font-mono text-xs"
            >
              Resume
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="p-1.5 rounded-md hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
