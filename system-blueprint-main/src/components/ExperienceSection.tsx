import { motion } from "framer-motion";
import { Building2, MapPin, Calendar, ExternalLink } from "lucide-react";
import { experience } from "@/data/resume";
import { PerformanceChart, ImprovementBadge } from "./PerformanceChart";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <h2 className="section-header">Work Experience</h2>

        {experience.map((job, index) => (
          <motion.div
            key={job.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="architecture-card mb-8"
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-border">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {job.role}
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-primary" />
                    {job.company}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {job.period}
                  </span>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="space-y-6">
              {job.achievements.map((achievement, achIndex) => (
                <motion.div
                  key={achIndex}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: achIndex * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="pl-4 border-l-2 border-primary/30"
                >
                  <p className="text-sm text-foreground leading-relaxed mb-3">
                    {achievement.text}
                  </p>
                  {achievement.metrics.before && achievement.metrics.after ? (
                    <PerformanceChart
                      metric={achievement.metrics as any}
                      label="ETL Processing Time"
                    />
                  ) : achievement.metrics.improvement ? (
                    <ImprovementBadge
                      improvement={achievement.metrics.improvement}
                      unit={achievement.metrics.unit}
                      type={achievement.metrics.type}
                    />
                  ) : null}
                </motion.div>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="mt-6 pt-6 border-t border-border">
              <span className="font-mono text-xs text-muted-foreground mb-3 block">
                tech_stack:
              </span>
              <div className="flex flex-wrap gap-2">
                {job.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs font-mono bg-secondary rounded text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
