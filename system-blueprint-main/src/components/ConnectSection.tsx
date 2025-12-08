import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Coffee, Sparkles, Heart, Code2, Zap } from "lucide-react";
import { profile } from "@/data/resume";

const socials = [
  {
    name: "GitHub",
    href: profile.github,
    icon: Github,
    label: "Where the magic happens",
    color: "hover:bg-foreground hover:text-background",
  },
  {
    name: "LinkedIn",
    href: profile.linkedin,
    icon: Linkedin,
    label: "Let's connect professionally",
    color: "hover:bg-terminal-cyan hover:text-background",
  },
  {
    name: "Email",
    href: `mailto:${profile.email}`,
    icon: Mail,
    label: "Old school, still works",
    color: "hover:bg-terminal-orange hover:text-background",
  },
  {
    name: "LeetCode",
    href: profile.leetcode,
    icon: Code2,
    label: "Watch me struggle with DP",
    color: "hover:bg-terminal-yellow hover:text-background",
  },
];

export const ConnectSection = () => {
  return (
    <section id="connect" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Fun header */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-6">
            <Sparkles className="w-4 h-4 text-terminal-yellow" />
            <span className="font-mono text-xs text-muted-foreground">
              connection.establish()
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's Build Something{" "}
            <span className="text-gradient-primary">Together</span>
          </h2>

          <p className="text-muted-foreground mb-2 leading-relaxed">
            Whether you have an interesting project, a wild idea, or just want to geek out
            about system design over coffee — I'm all ears.
          </p>

          <p className="text-sm text-muted-foreground mb-8 flex items-center justify-center gap-2">
            <Coffee className="w-4 h-4 text-terminal-orange" />
            Currently fueled by chai and curiosity
          </p>

          {/* Social links */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {socials.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className={`group flex items-center gap-4 p-4 rounded-lg border border-border bg-card transition-all duration-300 ${social.color}`}
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-transparent transition-colors">
                  <social.icon className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="font-mono text-sm font-medium">{social.name}</p>
                  <p className="text-xs text-muted-foreground group-hover:text-current/70 transition-colors">
                    {social.label}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Fun footer message */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
            className="code-block p-4 text-left"
          >
            <div className="font-mono text-xs leading-relaxed">
              <span className="text-terminal-purple">if</span>
              <span className="text-muted-foreground"> (</span>
              <span className="text-terminal-cyan">you</span>
              <span className="text-muted-foreground">.hasProject() && </span>
              <span className="text-terminal-cyan">you</span>
              <span className="text-muted-foreground">.needsEngineer()) {"{"}</span>
              <br />
              <span className="text-muted-foreground pl-4">{"  "}</span>
              <span className="text-terminal-green">await</span>
              <span className="text-terminal-cyan"> reachOut</span>
              <span className="text-muted-foreground">(</span>
              <span className="text-terminal-orange">"Let's talk!"</span>
              <span className="text-muted-foreground">);</span>
              <br />
              <span className="text-muted-foreground pl-4">{"  "}</span>
              <span className="text-terminal-purple">return</span>
              <span className="text-muted-foreground"> </span>
              <span className="text-terminal-yellow">{"{"}</span>
              <span className="text-terminal-green"> success</span>
              <span className="text-muted-foreground">:</span>
              <span className="text-terminal-cyan"> true</span>
              <span className="text-muted-foreground">,</span>
              <span className="text-terminal-green"> coffee</span>
              <span className="text-muted-foreground">:</span>
              <span className="text-terminal-orange"> "on me"</span>
              <span className="text-terminal-yellow"> {"}"}</span>
              <span className="text-muted-foreground">;</span>
              <br />
              <span className="text-muted-foreground">{"}"}</span>
            </div>
          </motion.div>

          {/* Availability status */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-accent/30 bg-accent/10"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="text-sm text-accent font-medium">
              Open to full-time opportunities
            </span>
            <Zap className="w-4 h-4 text-accent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
