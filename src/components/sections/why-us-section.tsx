"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { TrendingUp, Zap, DollarSign, ShieldCheck, RefreshCw, Award } from "lucide-react";

const nodes = [
  {
    label: "Increase yields",
    detail: "Maximise output and raw material conversion efficiency using real-time parameter tuning.",
    icon: TrendingUp,
    color: "from-blue-400 to-indigo-500",
    shadow: "shadow-blue-500/20",
    glow: "rgba(59,130,246,0.5)",
  },
  {
    label: "Accelerate scale-up",
    detail: "Transition smoothly from laboratory trials to commercial volume with AI digital twins.",
    icon: Zap,
    color: "from-indigo-400 to-purple-500",
    shadow: "shadow-indigo-500/20",
    glow: "rgba(99,102,241,0.5)",
  },
  {
    label: "Reduce costs",
    detail: "Lower operational expenses and utility usage by switching to continuous precision mode.",
    icon: DollarSign,
    color: "from-purple-400 to-pink-500",
    shadow: "shadow-purple-500/20",
    glow: "rgba(168,85,247,0.5)",
  },
  {
    label: "Improve consistency",
    detail: "Reduce batch-to-batch variation by standardising automated ML-driven control loops.",
    icon: ShieldCheck,
    color: "from-pink-400 to-rose-500",
    shadow: "shadow-pink-500/20",
    glow: "rgba(236,72,153,0.5)",
  },
  {
    label: "Optimise continuous",
    detail: "Maintain organisms in exponential growth phase longer to eliminate run downtime.",
    icon: RefreshCw,
    color: "from-rose-400 to-amber-500",
    shadow: "shadow-rose-500/20",
    glow: "rgba(244,63,94,0.5)",
  },
  {
    label: "Scale with confidence",
    detail: "Mitigate risks associated with scaling biological systems at industrial grade.",
    icon: Award,
    color: "from-amber-400 to-emerald-500",
    shadow: "shadow-amber-500/20",
    glow: "rgba(245,158,11,0.5)",
  },
] as const;

export function WhyUsSection() {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  return (
    <section id="capabilities" className="relative py-24 md:py-32 overflow-hidden bg-slate-950 text-white">
      {/* Background glow blobs */}
      <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-accent-violet/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-accent-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Copy */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent-violet block">
                Why Hyperferm?
              </span>
              <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.1] text-white">
                Biology Creates Innovation. <br />
                <span className="bg-gradient-to-r from-accent-blue to-accent-violet bg-clip-text text-transparent">
                  Manufacturing Creates Scale.
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-base md:text-lg text-slate-300 leading-relaxed font-ui font-light">
              <p>
                Many bioproducts succeed in the lab but struggle at commercial scale.
              </p>
              <p>
                Hyperferm bridges this gap with AI-powered bioprocess optimisation, intelligent process control, and manufacturing expertise.
              </p>
              <p className="font-semibold text-white">
                Our platform helps you:
              </p>
            </div>

            {/* Mobile / fallback listing of nodes */}
            <div className="space-y-4 lg:hidden">
              {nodes.map((node) => {
                const Icon = node.icon;
                return (
                  <div key={node.label} className="bg-slate-900/50 border border-white/5 p-4 rounded-xl flex gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br ${node.color} text-white flex-shrink-0`}>
                      <Icon size={18} />
                    </div>
                    <div>
                      <h4 className="font-ui font-semibold text-white">{node.label}</h4>
                      <p className="text-xs text-slate-400 font-ui mt-1">{node.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Selected Node Detail (Desktop only) */}
            <div className="hidden lg:block h-32 bg-slate-900/40 border border-white/10 rounded-2xl p-6 relative overflow-hidden transition-all duration-300">
              <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-accent-blue to-accent-violet" />
              {activeNode !== null ? (
                <motion.div
                  key={activeNode}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-2"
                >
                  <h4 className="font-ui font-bold text-white text-lg">{nodes[activeNode].label}</h4>
                  <p className="text-sm text-slate-300 font-ui font-light leading-relaxed">
                    {nodes[activeNode].detail}
                  </p>
                </motion.div>
              ) : (
                <div className="h-full flex items-center justify-center text-slate-400 font-ui text-sm italic">
                  Hover over the diagram nodes to explore how we scale your production
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Radial Interactive Diagram (Desktop only, centered layout) */}
          <div className="lg:col-span-7 hidden lg:flex justify-center items-center h-[500px] relative select-none">
            
            {/* SVG Connecting lines behind nodes */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.4" />
                </linearGradient>
              </defs>
              {nodes.map((_, index) => {
                const angle = (index * 60 * Math.PI) / 180;
                const r = 160; // radius
                const x1 = "50%";
                const y1 = "50%";
                // Adjust for coordinates centering
                const targetX = `calc(50% + ${Math.cos(angle) * r}px)`;
                const targetY = `calc(50% + ${Math.sin(angle) * r}px)`;
                return (
                  <g key={index}>
                    <line
                      x1="50%"
                      y1="50%"
                      x2={targetX}
                      y2={targetY}
                      stroke="url(#lineGrad)"
                      strokeWidth="1.5"
                    />
                    {activeNode === index && (
                      <motion.line
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        x1="50%"
                        y1="50%"
                        x2={targetX}
                        y2={targetY}
                        stroke="#EC4899"
                        strokeWidth="2.5"
                      />
                    )}
                  </g>
                );
              })}
            </svg>

            {/* Orbiting dashed ring */}
            <div className="absolute w-[320px] h-[320px] rounded-full border border-dashed border-white/10 pointer-events-none" />

            {/* Center Node: Hyperferm AI */}
            <motion.div
              className="relative w-32 h-32 rounded-full bg-gradient-to-br from-blue-600/30 to-violet-600/30 p-2 border border-white/15 flex items-center justify-center z-10 shadow-2xl"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-full h-full rounded-full bg-slate-900 border border-white/10 flex flex-col items-center justify-center text-center p-3 relative overflow-hidden group">
                <span className="text-[10px] font-mono text-accent-blue font-bold tracking-widest">HYPERFERM</span>
                <span className="text-lg font-display text-white mt-1">AI</span>
                
                {/* Central glowing point */}
                <div className="absolute inset-0 bg-radial-[circle_at_50%_50%,rgba(99,102,241,0.15)_0%,transparent_60%] pointer-events-none" />
              </div>
            </motion.div>

            {/* Satellite Nodes */}
            {nodes.map((node, index) => {
              const angle = (index * 60 * Math.PI) / 180;
              const r = 160; // radius
              const targetX = Math.cos(angle) * r;
              const targetY = Math.sin(angle) * r;
              const Icon = node.icon;
              const isActive = activeNode === index;

              return (
                <motion.div
                  key={node.label}
                  style={{
                    position: "absolute",
                    x: targetX,
                    y: targetY,
                  }}
                  className="z-20 flex flex-col items-center cursor-pointer group"
                  onMouseEnter={() => setActiveNode(index)}
                  onMouseLeave={() => setActiveNode(null)}
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  {/* Glowing Node Button */}
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border bg-slate-900 ${
                      isActive
                        ? `border-accent-pink shadow-[0_0_20px_rgba(236,72,153,0.4)]`
                        : "border-white/10 group-hover:border-white/30"
                    }`}
                  >
                    <Icon
                      size={18}
                      className={`transition-colors ${
                        isActive ? "text-accent-pink" : "text-slate-400 group-hover:text-white"
                      }`}
                    />
                  </div>

                  {/* Text label underneath */}
                  <span
                    className={`text-[10px] font-ui font-semibold uppercase tracking-wider mt-2.5 px-2.5 py-0.5 rounded bg-slate-950/80 border transition-all duration-300 ${
                      isActive
                        ? "text-accent-pink border-accent-pink/30"
                        : "text-slate-400 border-white/5 group-hover:text-white"
                    }`}
                  >
                    {node.label}
                  </span>
                </motion.div>
              );
            })}

          </div>

        </div>
      </div>
    </section>
  );
}
