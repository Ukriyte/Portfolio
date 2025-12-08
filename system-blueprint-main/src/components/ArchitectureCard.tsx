import { motion } from "framer-motion";
import { Layers, Server, Database, Globe, Cpu, HardDrive, Cloud, Code } from "lucide-react";

interface Layer {
  name: string;
  components: string[];
}

interface ArchitectureCardProps {
  layers: Layer[];
  title?: string;
}

const layerIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Presentation: Globe,
  Client: Globe,
  "UI Layer": Globe,
  Simulation: Cpu,
  "AI Engine": Cpu,
  "Business Logic": Code,
  "API Gateway": Server,
  API: Server,
  Cache: Cloud,
  Service: Code,
  "Data Layer": Database,
  Storage: HardDrive,
  Persistence: HardDrive,
  "Web3 Integration": Layers,
  "Data Processing": Cpu,
  Blockchain: Layers,
};

const layerColors: Record<string, string> = {
  Presentation: "border-terminal-cyan bg-terminal-cyan/10",
  Client: "border-terminal-cyan bg-terminal-cyan/10",
  "UI Layer": "border-terminal-cyan bg-terminal-cyan/10",
  Simulation: "border-terminal-purple bg-terminal-purple/10",
  "AI Engine": "border-terminal-yellow bg-terminal-yellow/10",
  "Business Logic": "border-terminal-orange bg-terminal-orange/10",
  "API Gateway": "border-terminal-green bg-terminal-green/10",
  API: "border-terminal-green bg-terminal-green/10",
  Cache: "border-terminal-red bg-terminal-red/10",
  Service: "border-terminal-purple bg-terminal-purple/10",
  "Data Layer": "border-terminal-cyan bg-terminal-cyan/10",
  Storage: "border-terminal-orange bg-terminal-orange/10",
  Persistence: "border-terminal-orange bg-terminal-orange/10",
  "Web3 Integration": "border-terminal-yellow bg-terminal-yellow/10",
  "Data Processing": "border-terminal-green bg-terminal-green/10",
  Blockchain: "border-terminal-purple bg-terminal-purple/10",
};

export const ArchitectureCard = ({ layers, title }: ArchitectureCardProps) => {
  return (
    <div className="architecture-card">
      {title && (
        <h4 className="font-mono text-xs text-muted-foreground mb-4 uppercase tracking-wider">
          {title}
        </h4>
      )}
      <div className="space-y-2">
        {layers.map((layer, index) => {
          const Icon = layerIcons[layer.name] || Layers;
          const colorClass = layerColors[layer.name] || "border-primary bg-primary/10";

          return (
            <motion.div
              key={layer.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className={`relative border-l-2 ${colorClass} pl-4 py-3 rounded-r-md`}
            >
              <div className="flex items-center gap-2 mb-2">
                <Icon className="w-4 h-4 text-muted-foreground" />
                <span className="font-mono text-sm font-medium text-foreground">
                  {layer.name}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {layer.components.map((component) => (
                  <span
                    key={component}
                    className="px-2 py-0.5 text-xs font-mono bg-secondary rounded text-secondary-foreground"
                  >
                    {component}
                  </span>
                ))}
              </div>
              {index < layers.length - 1 && (
                <div className="absolute left-[-5px] bottom-0 w-2 h-2 border-l-2 border-b-2 border-border" />
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
