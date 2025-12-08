import { motion } from "framer-motion";
import { Terminal, MapPin, ArrowDown } from "lucide-react";
import { profile } from "@/data/resume";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      
      {/* Scanline effect */}
      <div className="absolute inset-0 scanline" />
      
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Terminal header */}
          <div className="code-block mb-8 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/30">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-terminal-red" />
                <span className="w-3 h-3 rounded-full bg-terminal-yellow" />
                <span className="w-3 h-3 rounded-full bg-terminal-green" />
              </div>
              <span className="text-xs text-muted-foreground ml-2">engineer.profile</span>
            </div>
            <div className="p-6 font-mono text-sm leading-relaxed">
              <div className="text-muted-foreground">
                <span className="text-terminal-purple">const</span>{" "}
                <span className="text-terminal-cyan">engineer</span>{" "}
                <span className="text-muted-foreground">=</span>{" "}
                <span className="text-terminal-yellow">{"{"}</span>
              </div>
              <div className="pl-4">
                <span className="text-terminal-green">name</span>
                <span className="text-muted-foreground">:</span>{" "}
                <span className="text-terminal-orange">"{profile.name}"</span>
                <span className="text-muted-foreground">,</span>
              </div>
              <div className="pl-4">
                <span className="text-terminal-green">role</span>
                <span className="text-muted-foreground">:</span>{" "}
                <span className="text-terminal-orange">"{profile.title}"</span>
                <span className="text-muted-foreground">,</span>
              </div>
              <div className="pl-4">
                <span className="text-terminal-green">focus</span>
                <span className="text-muted-foreground">:</span>{" "}
                <span className="text-terminal-yellow">[</span>
                <span className="text-terminal-orange">"SQL Optimization"</span>
                <span className="text-muted-foreground">,</span>{" "}
                <span className="text-terminal-orange">"ETL Pipelines"</span>
                <span className="text-muted-foreground">,</span>{" "}
                <span className="text-terminal-orange">"API Design & Reliability"</span>
                <span className="text-muted-foreground">,</span>{" "}
                <span className="text-terminal-orange">"System Design"</span>
                <span className="text-terminal-yellow">]</span>
              </div>
              <div className="text-terminal-yellow">{"}"}</div>
            </div>
          </div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="text-foreground">Building </span>
            <span className="text-gradient-primary">reliable systems</span>
            <br />
            <span className="text-foreground">at scale</span>
            <span className="inline-block w-3 h-8 md:h-12 bg-primary ml-2 animate-cursor-blink" />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-wrap items-center gap-4"
          >
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span>{profile.location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent">Open to opportunities</span>
            </div>
          </motion.div>

          {/* Metrics badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-wrap gap-3 mt-8"
          >
            <span className="metric-badge">
              <Terminal className="w-3 h-3" />
              IIT Roorkee
            </span>
            <span className="metric-badge">8hr → 45min ETL</span>
            <span className="metric-badge">400+ DSA Problems</span>
            <span className="metric-badge">Global Rank 279</span>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="font-mono text-xs">scroll</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
