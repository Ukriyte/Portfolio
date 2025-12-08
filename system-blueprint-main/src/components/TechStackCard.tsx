import { motion } from "framer-motion";

interface TechStackCardProps {
  category: string;
  items: string[];
  index: number;
}

const categoryColors: Record<string, string> = {
  languages: "bg-terminal-purple/20 border-terminal-purple/40 text-terminal-purple",
  backend: "bg-terminal-green/20 border-terminal-green/40 text-terminal-green",
  databases: "bg-terminal-cyan/20 border-terminal-cyan/40 text-terminal-cyan",
  frontend: "bg-terminal-yellow/20 border-terminal-yellow/40 text-terminal-yellow",
  tools: "bg-terminal-orange/20 border-terminal-orange/40 text-terminal-orange",
  concepts: "bg-primary/20 border-primary/40 text-primary",
};

export const TechStackCard = ({ category, items, index }: TechStackCardProps) => {
  const colorClass = categoryColors[category] || categoryColors.concepts;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      viewport={{ once: true }}
      className="architecture-card"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-mono text-sm font-semibold capitalize text-foreground">
          {category}
        </h3>
        <span className={`px-2 py-0.5 text-xs font-mono rounded border ${colorClass}`}>
          {items.length}
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item, itemIndex) => (
          <motion.span
            key={item}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 + itemIndex * 0.05, duration: 0.3 }}
            viewport={{ once: true }}
            className="px-3 py-1.5 text-sm font-mono bg-secondary/50 rounded-md text-secondary-foreground hover:bg-secondary transition-colors cursor-default"
          >
            {item}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};
