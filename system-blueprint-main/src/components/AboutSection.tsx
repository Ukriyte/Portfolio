import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { education, profile } from "@/data/resume";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="section-header">About</h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="architecture-card"
          >
            <h3 className="font-mono text-sm font-semibold text-foreground mb-6 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-primary" />
              Education
            </h3>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="border-l-2 border-primary/30 pl-4"
                >
                  <h4 className="text-foreground font-medium">{edu.institution}</h4>
                  <p className="text-sm text-primary font-mono mt-1">{edu.degree}</p>
                  <div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {edu.period}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="architecture-card"
          >
            <h3 className="font-mono text-sm font-semibold text-foreground mb-6 flex items-center gap-2">
              <Award className="w-4 h-4 text-primary" />
              Quick Stats
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <StatCard
                value="400+"
                label="DSA Problems"
                color="terminal-cyan"
              />
              <StatCard
                value="279"
                label="Global Rank"
                color="terminal-yellow"
              />
              <StatCard
                value="10x"
                label="ETL Speedup"
                color="terminal-green"
              />
              <StatCard
                value="4+"
                label="Major Projects"
                color="terminal-purple"
              />
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {profile.summary.split('.').slice(0, 2).join('.') + '.'}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ value, label, color }: { value: string; label: string; color: string }) => (
  <div className="p-4 bg-secondary/50 rounded-lg text-center">
    <p className={`text-2xl font-bold font-mono text-${color}`}>{value}</p>
    <p className="text-xs text-muted-foreground mt-1">{label}</p>
  </div>
);
