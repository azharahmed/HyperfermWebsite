"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Search, Beaker, Database, Activity, RefreshCw, Milestone } from "lucide-react";

const stages = [
  {
    num: "01",
    label: "Organism Select",
    detail: "Identify and characterize candidate production organisms using high-throughput screening data.",
    icon: Search,
    color: "from-blue-400 to-indigo-500",
  },
  {
    num: "02",
    label: "Media Opt",
    detail: "Formulate optimal growth media composition and nutrient feeds with predictive simulation models.",
    icon: Beaker,
    color: "from-indigo-400 to-purple-500",
  },
  {
    num: "03",
    label: "Batch Mode",
    detail: "Benchmark initial production kinetic rates and establish base growth profiles.",
    icon: Database,
    color: "from-purple-400 to-fuchsia-500",
  },
  {
    num: "04",
    label: "Fed-Batch",
    detail: "Optimize nutrient feed rates to maintain high cell density without growth inhibition.",
    icon: Activity,
    color: "from-fuchsia-400 to-pink-500",
  },
  {
    num: "05",
    label: "Continuous Mode",
    detail: "Operate systems in continuous-feed mode to eliminate downtime and maximize space-time yields.",
    icon: RefreshCw,
    color: "from-pink-400 to-rose-500",
  },
  {
    num: "06",
    label: "Scale-Up",
    detail: "Deploy optimized bioprocess parameters across pilot- and commercial-scale bioreactors.",
    icon: Milestone,
    color: "from-rose-400 to-blue-500",
  },
] as const;

export function HowItWorksSection() {
  const [activeStage, setActiveStage] = useState(0);

  // Auto-cycle the active stage
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="capabilities-lifecycle" className="relative py-24 md:py-32 overflow-hidden bg-slate-950 text-white">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-blue/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
        
        {/* Header */}
        <div className="space-y-4 mb-20 text-center max-w-[900px] mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent-blue block">
            LIFECYCLE STAGES
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.1] text-white">
            The Future of Continuous Biomanufacturing
          </h2>
          <p className="font-ui font-light text-base md:text-lg text-slate-300 leading-relaxed">
            Hyperferm combines AI, automation, and process intelligence to make precision fermentation smarter, faster, and more scalable. From laboratory development to commercial production, we help biotech companies optimise every stage of the fermentation lifecycle. Engineering the future of intelligent biomanufacturing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Interactive Radial Lifecycle Diagram (Desktop only) */}
          <div className="lg:col-span-7 hidden lg:flex justify-center items-center h-[520px] relative select-none">
            
            {/* Outer Circular Track */}
            <div className="absolute w-[360px] h-[360px] rounded-full border border-white/5 pointer-events-none" />
            <div className="absolute w-[380px] h-[380px] rounded-full border border-dashed border-white/10 pointer-events-none" />

            {/* Sweeping Light Ring */}
            <motion.div
              className="absolute w-[370px] h-[370px] rounded-full border border-transparent border-t-accent-blue border-r-accent-pink/30 pointer-events-none"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />

            {/* Center Core Display */}
            <div className="relative w-36 h-36 rounded-full bg-slate-900 border border-white/15 shadow-2xl p-4 flex flex-col items-center justify-center text-center">
              <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">ACTIVE STAGE</span>
              <span className="text-xl font-display text-white mt-1 uppercase tracking-wide">
                {stages[activeStage].num}
              </span>
              <span className="text-[10px] text-accent-blue font-ui font-semibold uppercase mt-1">
                {stages[activeStage].label}
              </span>
              <div className="absolute inset-0 bg-radial-[circle_at_50%_50%,rgba(59,130,246,0.1)_0%,transparent_75%] pointer-events-none" />
            </div>

            {/* Stage Orbiting Nodes */}
            {stages.map((stage, index) => {
              const angle = (index * 60 * Math.PI) / 180;
              const r = 180; // Radius from center
              const targetX = Math.cos(angle) * r;
              const targetY = Math.sin(angle) * r;
              const Icon = stage.icon;
              const isActive = activeStage === index;

              return (
                <div
                  key={stage.label}
                  style={{
                    position: "absolute",
                    x: targetX,
                    y: targetY,
                  }}
                  onClick={() => setActiveStage(index)}
                  className="z-20 flex flex-col items-center cursor-pointer group"
                >
                  {/* Glowing Node Button */}
                  <motion.div
                    className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300 bg-slate-900 ${
                      isActive
                        ? `border-accent-blue shadow-[0_0_20px_rgba(59,130,246,0.4)] bg-white/5`
                        : "border-white/10 group-hover:border-white/30"
                    }`}
                    whileHover={{ scale: 1.15 }}
                  >
                    <Icon
                      size={18}
                      className={`transition-colors ${
                        isActive ? "text-accent-blue" : "text-slate-400 group-hover:text-white"
                      }`}
                    />
                  </motion.div>

                  {/* Text label underneath */}
                  <span
                    className={`text-[9px] font-ui font-semibold uppercase tracking-wider mt-2.5 px-2 py-0.5 rounded bg-slate-950/80 border transition-all duration-300 ${
                      isActive
                        ? "text-accent-blue border-accent-blue/30"
                        : "text-slate-400 border-white/5 group-hover:text-white"
                    }`}
                  >
                    {stage.label}
                  </span>
                </div>
              );
            })}

          </div>

          {/* Right: Stage Detail Content */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Mobile / Fallback vertical listing of stages */}
            <div className="space-y-4 lg:hidden">
              {stages.map((stage) => {
                const Icon = stage.icon;
                return (
                  <div key={stage.label} className="bg-slate-900/50 border border-white/5 p-4 rounded-xl flex gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br ${stage.color} text-white flex-shrink-0`}>
                      <Icon size={18} />
                    </div>
                    <div>
                      <h4 className="font-ui font-semibold text-white">{stage.label}</h4>
                      <p className="text-xs text-slate-400 font-ui mt-1">{stage.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Desktop Stage Description Card */}
            <div className="hidden lg:block space-y-6">
              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Stage Description</div>
              
              <div className="bg-slate-900/40 border border-white/10 rounded-2xl p-8 relative overflow-hidden min-h-[220px] flex flex-col justify-center">
                <div className="absolute top-0 left-0 bottom-0 w-1 bg-accent-blue" />
                
                <motion.div
                  key={activeStage}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-4xl font-display text-accent-blue">{stages[activeStage].num}</span>
                    <h3 className="text-xl font-ui font-bold text-white uppercase tracking-wide">
                      {stages[activeStage].label}
                    </h3>
                  </div>

                  <p className="text-sm md:text-base text-slate-300 font-ui font-light leading-relaxed">
                    {stages[activeStage].detail}
                  </p>
                </motion.div>
              </div>

              {/* Progress/indicator dots */}
              <div className="flex gap-2 justify-center lg:justify-start">
                {stages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveStage(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === activeStage ? "bg-accent-blue w-6" : "bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
