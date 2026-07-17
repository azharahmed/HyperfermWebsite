"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function WhatWeDoSection() {
  return (
    <section id="what-we-do" className="relative py-24 md:py-32 overflow-hidden bg-surface">
      {/* Glow Effects */}
      <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-accent-blue/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-accent-violet/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent-blue block">
                Overview
              </span>
              <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.1] text-ink">
                Powering the Next Generation of Biomanufacturing
              </h2>
            </div>

            <div className="space-y-6 text-base md:text-lg text-ink-muted leading-relaxed font-ui font-light">
              <p>
                Hyperferm.ai combines synthetic biology, artificial intelligence, process engineering, and manufacturing expertise to optimise precision fermentation.
              </p>
              <p>
                Our platform enables continuous fermentation, real-time monitoring, and AI-driven process optimisation. The result is higher yields, faster scale-up, lower production costs, and predictable commercial manufacturing.
              </p>
              <p className="font-semibold text-ink">
                We&apos;re not just optimizing fermentation—we&apos;re building the future of intelligent biomanufacturing.
              </p>
            </div>

            <div className="pt-2">
              <a
                href="#capabilities"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent-blue hover:text-accent-violet transition-colors group"
              >
                How it works: read the technology whitepaper
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right Column: Premium Glowing Orbital Sphere Graphic */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px] flex items-center justify-center">
              
              {/* Radial gradient background glow */}
              <div className="absolute inset-0 bg-radial-[circle_at_50%_50%,rgba(124,58,237,0.08)_0%,transparent_70%]" />
              
              {/* Outer pulsing ring */}
              <motion.div
                className="absolute w-[280px] h-[280px] rounded-full border border-accent-blue/20"
                animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Diagonal orbiting ring 1 */}
              <motion.div
                className="absolute w-[300px] h-[100px] rounded-full border border-dashed border-accent-violet/30"
                style={{ rotate: "45deg" }}
                animate={{ rotate: "405deg" }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              />

              {/* Diagonal orbiting ring 2 */}
              <motion.div
                className="absolute w-[300px] h-[100px] rounded-full border border-dashed border-accent-pink/20"
                style={{ rotate: "-45deg" }}
                animate={{ rotate: "-405deg" }}
                transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
              />

              {/* Glowing central sphere */}
              <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-blue-500/10 via-violet-500/15 to-fuchsia-500/10 flex items-center justify-center p-3 border border-white/10 shadow-[0_0_60px_rgba(99,102,241,0.2)]">
                <div className="w-full h-full rounded-full bg-gradient-to-tr from-accent-blue via-accent-violet to-accent-pink shadow-[0_0_40px_rgba(124,58,237,0.5)] flex items-center justify-center relative overflow-hidden">
                  
                  {/* Internal rotating light core */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  />

                  {/* Shimmer/Lens flare */}
                  <div className="absolute top-2 left-2 w-10 h-10 rounded-full bg-white/40 blur-sm" />
                </div>
              </div>

              {/* Outer floating node particles */}
              <motion.div
                className="absolute w-4 h-4 rounded-full bg-accent-blue shadow-[0_0_12px_#3B82F6]"
                animate={{
                  x: [0, 140, 0, -140, 0],
                  y: [-140, 0, 140, 0, -140],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.div
                className="absolute w-3 h-3 rounded-full bg-accent-pink shadow-[0_0_10px_#EC4899]"
                animate={{
                  x: [0, -120, 0, 120, 0],
                  y: [120, 0, -120, 0, 120],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
