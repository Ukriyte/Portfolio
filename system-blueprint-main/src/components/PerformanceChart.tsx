import { motion } from "framer-motion";
import { TrendingDown, Clock, Zap } from "lucide-react";

interface Metric {
  before: number;
  after: number;
  unit: string;
  type: string;
}

interface PerformanceChartProps {
  metric: Metric;
  label: string;
}

export const PerformanceChart = ({ metric, label }: PerformanceChartProps) => {
  const improvement = ((metric.before - metric.after) / metric.before * 100).toFixed(0);
  const barWidth = (metric.after / metric.before) * 100;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-muted-foreground">{label}</span>
        <span className="metric-badge">
          <TrendingDown className="w-3 h-3" />
          {improvement}% faster
        </span>
      </div>
      
      <div className="space-y-2">
        {/* Before bar */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-muted-foreground w-16">Before</span>
          <div className="flex-1 h-6 bg-secondary rounded-md overflow-hidden relative">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="h-full bg-terminal-red/40 rounded-md"
            />
            <span className="absolute right-2 top-1/2 -translate-y-1/2 font-mono text-xs text-foreground">
              {metric.before}{metric.unit}
            </span>
          </div>
        </div>
        
        {/* After bar */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-muted-foreground w-16">After</span>
          <div className="flex-1 h-6 bg-secondary rounded-md overflow-hidden relative">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${barWidth}%` }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
              className="h-full bg-accent rounded-md"
            />
            <span className="absolute right-2 top-1/2 -translate-y-1/2 font-mono text-xs text-foreground">
              {metric.after}{metric.unit}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ImprovementBadgeProps {
  improvement: number;
  unit: string;
  type: string;
}

export const ImprovementBadge = ({ improvement, unit, type }: ImprovementBadgeProps) => {
  const Icon = type === "performance" ? Zap : Clock;
  
  return (
    <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-mono bg-accent/15 text-accent border border-accent/30">
      <Icon className="w-3 h-3" />
      {improvement}{unit} {type === "efficiency" ? "reduction" : "faster"}
    </span>
  );
};
