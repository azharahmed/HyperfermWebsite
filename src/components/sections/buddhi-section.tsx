"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Check, Cpu, Eye, BarChart3, Settings2, LineChart, TrendingUp } from "lucide-react";

const capabilities = [
  { text: "Process Digital Twins", icon: Cpu, color: "text-blue-500 bg-blue-500/10 border-blue-500/20" },
  { text: "Predictive Analytics", icon: BarChart3, color: "text-violet-500 bg-violet-500/10 border-violet-500/20" },
  { text: "Fermentation Monitoring", icon: Eye, color: "text-pink-500 bg-pink-500/10 border-pink-500/20" },
  { text: "Yield Optimization", icon: TrendingUp, color: "text-cyan-500 bg-cyan-500/10 border-cyan-500/20" },
  { text: "Process Control Automation", icon: Settings2, color: "text-indigo-500 bg-indigo-500/10 border-indigo-500/20" },
  { text: "Production Forecasting", icon: LineChart, color: "text-fuchsia-500 bg-fuchsia-500/10 border-fuchsia-500/20" },
] as const;

export function BuddhiSection() {
  const [sineOffset, setSineOffset] = useState(0);

  // Animate the signal wave in the console
  useEffect(() => {
    let animationFrameId: number;
    const animate = () => {
      setSineOffset((prev) => (prev + 0.05) % (Math.PI * 2));
      animationFrameId = requestAnimationFrame(animate);
    };
    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Generate SVG path for a pulsing/scrolling sine wave
  const generateWavePath = () => {
    const points = [];
    const width = 360;
    const amplitude = 12;
    const frequency = 0.03;
    const yCenter = 40;

    for (let x = 0; x <= width; x += 5) {
      const y = yCenter + Math.sin(x * frequency + sineOffset) * amplitude + 
                Math.cos(x * 0.01 + sineOffset * 1.5) * 4; // Add micro-complexity
      points.push(`${x},${y}`);
    }
    return `M ${points.join(" L ")}`;
  };

  return (
    <section id="technology" className="relative py-24 md:py-32 overflow-hidden bg-surface-alt">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-violet/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
        <div className="space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent-violet block">
            PROPRIETARY TECHNOLOGY
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.1] text-ink">
            Meet Buddhi — Our AI Manufacturing Platform
          </h2>
          <p className="font-ui font-light text-base md:text-lg text-ink-muted max-w-[900px] leading-relaxed">
            Named for the Sanskrit word for intelligence, Buddhi is the AI engine at the core of
            every Hyperferm deployment — reading process signals in real time and continuously
            tuning fermentation for peak yield.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* Left Column: Console Panel */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="w-full max-w-[500px] bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col h-[400px]">
              
              {/* Console Header */}
              <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="text-xs text-slate-400 font-mono ml-4 select-none">
                    Buddhi™ Process Console
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                  <span className="text-[10px] text-rose-500 font-mono font-bold tracking-wider">
                    LIVE
                  </span>
                </div>
              </div>

              {/* Console Body */}
              <div className="flex-1 relative bg-slate-950 p-6 flex flex-col justify-between overflow-hidden">
                {/* Background scanlines grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,24,38,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(18,24,38,0.3)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

                {/* Animated Central Core */}
                <div className="flex-1 flex items-center justify-center relative">
                  
                  {/* Outer orbit rings */}
                  <svg className="absolute w-[240px] h-[240px] animate-spin" style={{ animationDuration: "12s" }}>
                    <circle cx="120" cy="120" r="100" stroke="#3B82F6" strokeWidth="1" strokeDasharray="5 15" opacity="0.3" fill="none" />
                  </svg>
                  <svg className="absolute w-[240px] h-[240px] animate-spin" style={{ animationDuration: "8s", animationDirection: "reverse" }}>
                    <circle cx="120" cy="120" r="75" stroke="#7C3AED" strokeWidth="1" strokeDasharray="30 10" opacity="0.25" fill="none" />
                  </svg>

                  {/* Pulsating Center Sphere */}
                  <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-blue-500/20 via-violet-500/20 to-fuchsia-500/20 flex items-center justify-center p-3 border border-white/5 shadow-[0_0_50px_rgba(99,102,241,0.15)] animate-pulse">
                    <div className="w-full h-full rounded-full bg-gradient-to-tr from-accent-blue/80 to-accent-violet/85 shadow-[0_0_30px_rgba(124,58,237,0.4)] flex items-center justify-center relative overflow-hidden">
                      {/* Internal light core */}
                      <div className="absolute w-8 h-8 rounded-full bg-white blur-sm opacity-55 animate-ping" style={{ animationDuration: "3s" }} />
                    </div>
                  </div>

                  {/* Orbiting nodes */}
                  <motion.div
                    className="absolute w-3.5 h-3.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#22D3EE]"
                    animate={{
                      x: [0, 80, 0, -80, 0],
                      y: [-80, 0, 80, 0, -80],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  
                  <motion.div
                    className="absolute w-3 h-3 bg-fuchsia-400 rotate-45 shadow-[0_0_10px_#E879F9]"
                    animate={{
                      x: [0, -65, 0, 65, 0],
                      y: [65, 0, -65, 0, 65],
                    }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </div>

                {/* Real-time Oscilloscope wave */}
                <div className="h-16 border-t border-slate-900/60 flex flex-col justify-end relative">
                  <span className="absolute left-0 top-1 text-[9px] font-mono text-slate-500 tracking-wider">
                    SIGNAL PROCESSOR [CH1.IN]
                  </span>
                  
                  <svg viewBox="0 0 360 80" className="w-full h-12 overflow-visible">
                    <path
                      d={generateWavePath()}
                      fill="none"
                      stroke="url(#console-wave-gradient)"
                      strokeWidth="2"
                    />
                    <defs>
                      <linearGradient id="console-wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="60%" stopColor="#8B5CF6" />
                        <stop offset="100%" stopColor="#EC4899" />
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  <div className="flex justify-between text-[8px] font-mono text-slate-600 border-t border-slate-900 pt-1 mt-1">
                    <span>SPAN: 500MS</span>
                    <span>ATTN: 0.12%</span>
                    <span>STABLE: 99.8%</span>
                  </div>
                </div>

              </div>

              {/* Console Footer Caption */}
              <div className="bg-slate-950 py-2.5 px-6 border-t border-slate-900 flex justify-center">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                  Illustrative live process view
                </span>
              </div>

            </div>
          </div>

          {/* Right Column: Grid and Sub-Card */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            
            {/* Capabilities grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {capabilities.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.text}
                    className="flex items-center gap-3 bg-white/60 backdrop-blur-md rounded-xl p-4 border border-white/40 shadow-sm"
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center border ${item.color}`}>
                      <Icon size={16} />
                    </div>
                    <span className="text-sm font-medium text-ink font-ui">
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>

            <p className="text-sm italic font-ui font-light text-ink-muted">
              Outcome: smarter manufacturing with continuous learning and process optimization.
            </p>

            {/* Manas Sub-Card */}
            <div className="bg-gradient-to-r from-violet-500/5 to-fuchsia-500/5 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-violet-500/10 shadow-lg relative overflow-hidden group hover:border-violet-500/20 transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent-violet/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="space-y-4">
                <div className="flex items-center gap-2.5">
                  {/* Small neon bar chart icon */}
                  <div className="flex gap-0.5 items-end h-4 w-4 text-accent-violet">
                    <span className="w-0.5 h-2 bg-accent-violet rounded-full inline-block animate-pulse" />
                    <span className="w-0.5 h-4 bg-accent-violet rounded-full inline-block animate-pulse" style={{ animationDelay: '0.15s' }} />
                    <span className="w-0.5 h-3 bg-accent-violet rounded-full inline-block animate-pulse" style={{ animationDelay: '0.3s' }} />
                  </div>
                  <h3 className="font-display text-lg text-ink">
                    Manas™ — Predictive Analytics
                  </h3>
                </div>

                <p className="font-ui font-light text-sm text-ink-muted leading-relaxed">
                  Sanskrit for mind — Manas is Buddhi's analytics companion, turning fermentation
                  data into forecasts your team can act on.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {["Predictive Analytics", "Production Forecasting", "Yield Modelling"].map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold text-violet-600 bg-violet-50 border border-violet-100 rounded-full px-3.5 py-1 whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
