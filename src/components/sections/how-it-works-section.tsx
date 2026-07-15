"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const steps = [
  {
    num: "01",
    title: "Design",
    description: "Define target molecules and manufacturing outcomes.",
    color: "from-blue-400 to-indigo-500",
  },
  {
    num: "02",
    title: "Build",
    description: "Develop optimized production systems.",
    color: "from-indigo-400 to-purple-500",
  },
  {
    num: "03",
    title: "Simulate",
    description: "Create AI-driven digital twins.",
    color: "from-purple-400 to-fuchsia-500",
  },
  {
    num: "04",
    title: "Optimize",
    description: "Use machine learning to improve performance.",
    color: "from-fuchsia-400 to-pink-500",
  },
  {
    num: "05",
    title: "Scale",
    description: "Deploy in commercial manufacturing environments.",
    color: "from-pink-400 to-rose-500",
  },
] as const;

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);

  // Auto cycle active step for visual demonstration of pipeline flow
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="capabilities" className="relative py-24 md:py-32 overflow-hidden bg-surface">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-accent-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
        
        {/* Header */}
        <div className="space-y-4 mb-20 text-center max-w-[800px] mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent-blue block">
            HOW IT WORKS
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.1] text-ink">
            AI Meets Biomanufacturing
          </h2>
          <p className="font-ui font-light text-base md:text-lg text-ink-muted leading-relaxed">
            Five integrated steps take you from target molecule to commercial-scale,
            continuously-optimised production.
          </p>
        </div>

        {/* Timeline Stepper Container */}
        <div className="relative mt-16 md:mt-24">
          
          {/* Connecting Line (Horizontal on Desktop, Hidden on Mobile) */}
          <div className="absolute top-[30px] left-[5%] right-[5%] h-[2px] bg-border-subtle hidden md:block" />
          
          {/* Glowing Animated Progress Bar (Desktop only) */}
          <div 
            className="absolute top-[29px] left-[5%] h-[4px] bg-gradient-to-r from-accent-blue via-accent-violet to-accent-pink rounded-full transition-all duration-1000 ease-in-out hidden md:block" 
            style={{ width: `${(activeStep / (steps.length - 1)) * 90}%` }}
          />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-6 relative z-10">
            {steps.map((step, index) => {
              const isActive = index === activeStep;
              return (
                <div
                  key={step.num}
                  className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 group cursor-pointer"
                  onClick={() => setActiveStep(index)}
                >
                  
                  {/* Step Node */}
                  <div className="relative flex items-center justify-center">
                    
                    {/* Ring glow when active */}
                    {isActive && (
                      <span className="absolute w-[68px] h-[68px] rounded-full bg-accent-blue/15 border border-accent-blue/40 animate-ping" style={{ animationDuration: '3s' }} />
                    )}

                    {/* Outer Circle */}
                    <div
                      className={`w-[60px] h-[60px] rounded-full flex items-center justify-center font-display text-lg border-2 transition-all duration-500 ${
                        isActive
                          ? `bg-white border-accent-blue text-accent-blue shadow-[0_0_20px_rgba(59,130,246,0.3)]`
                          : "bg-surface border-border text-ink-subtle hover:border-ink hover:text-ink"
                      }`}
                    >
                      {step.num}
                    </div>

                    {/* Active highlight slider effect on node */}
                    {isActive && (
                      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-accent-blue shadow-[0_0_10px_#3B82F6]" />
                    )}
                  </div>

                  {/* Step Meta (Title & Description) */}
                  <div className="space-y-2 md:pr-4">
                    <h3
                      className={`font-display text-xl transition-colors duration-300 ${
                        isActive ? "text-accent-blue" : "text-ink"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="font-ui font-light text-sm text-ink-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
