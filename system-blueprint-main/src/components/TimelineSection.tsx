import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Code, Trophy } from "lucide-react";
import { timeline, highlights, certifications } from "@/data/resume";

const typeIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  education: GraduationCap,
  work: Briefcase,
  project: Code,
  achievement: Trophy,
};

const typeColors: Record<string, string> = {
  education: "bg-terminal-cyan text-terminal-cyan",
  work: "bg-terminal-green text-terminal-green",
  project: "bg-terminal-purple text-terminal-purple",
  achievement: "bg-terminal-yellow text-terminal-yellow",
};

export const TimelineSection = () => {
  return (
    <section id="timeline" className="py-24 relative">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="section-header">Engineering Timeline</h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

              <div className="space-y-6">
                {timeline.map((item, index) => {
                  const Icon = typeIcons[item.type] || Code;
                  const colorClass = typeColors[item.type] || typeColors.project;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      viewport={{ once: true }}
                      className="relative pl-12"
                    >
                      {/* Icon */}
                      <div
                        className={`absolute left-0 w-8 h-8 rounded-full ${colorClass.split(" ")[0]}/20 flex items-center justify-center border border-current`}
                        style={{ color: `hsl(var(--${item.type === "education" ? "terminal-cyan" : item.type === "work" ? "terminal-green" : item.type === "project" ? "terminal-purple" : "terminal-yellow"}))` }}
                      >
                        <Icon className="w-4 h-4" />
                      </div>

                      <div className="architecture-card">
                        <span className="font-mono text-xs text-primary mb-1 block">
                          {item.year}
                        </span>
                        <p className="text-sm text-foreground">{item.event}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Highlights & Certs */}
          <div className="space-y-6">
            {/* Highlights */}
            <div className="architecture-card">
              <h3 className="font-mono text-sm font-semibold text-foreground mb-4">
                // highlights
              </h3>
              <ul className="space-y-4">
                {highlights.map((highlight, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="border-l-2 border-accent/50 pl-3"
                  >
                    <p className="text-sm text-foreground font-medium">
                      {highlight.text}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {highlight.detail}
                    </p>
                    {highlight.link && (
                      <a
                        href={highlight.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-primary hover:underline mt-1 inline-block"
                      >
                        View Profile →
                      </a>
                    )}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Certifications */}
            <div className="architecture-card">
              <h3 className="font-mono text-sm font-semibold text-foreground mb-4">
                // certifications
              </h3>
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-3 bg-secondary/50 rounded-md hover:bg-secondary transition-colors group"
                    >
                      <p className="text-sm text-foreground group-hover:text-primary transition-colors">
                        {cert.name}
                      </p>
                      <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
