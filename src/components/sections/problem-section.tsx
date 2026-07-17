"use client";

import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/button-link";
import { Cpu, Activity, BarChart2, ShieldAlert } from "lucide-react";

export function ProblemSection() {
  return (
    <section id="problem" className="relative py-24 md:py-32 overflow-hidden bg-slate-950 text-white">
      {/* Background neon glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-accent-blue/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent-violet/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
        
        {/* Glassmorphic Container Panel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 md:p-12 lg:p-16 overflow-hidden shadow-2xl"
        >
          {/* Inner ambient pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.06)_0%,transparent_70%)] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent-blue block">
                  FACILITY TRANSFORMATION
                </span>
                <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.15] text-white">
                  Transforming legacy bioprocess facilities worldwide into AI-powered, continuous precision fermentation systems for the future of biomanufacturing.
                </h2>
              </div>

              <div className="space-y-6 text-sm md:text-base text-slate-300 leading-relaxed font-ui font-light">
                <p>
                  Powered by our proprietary AI platform, we deliver real-time process analytics, advanced process control, and predictive optimisation.
                </p>
                <p>
                  This maximises the efficiency, scalability, and performance of precision fermentation-derived products.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <ButtonLink href="#capabilities" variant="primary" size="md">
                  Explore our platform
                </ButtonLink>
                <ButtonLink href="#contact" variant="secondary" size="md" className="border-white/20 text-white hover:bg-white/5">
                  Partner with us
                </ButtonLink>
              </div>
            </div>

            {/* Right: Technical Preview Dashboard mockup */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[420px] bg-slate-950/80 rounded-2xl border border-white/10 overflow-hidden shadow-inner p-6 space-y-6 relative group">
                <div className="absolute top-2 right-2 flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[9px] font-mono text-emerald-500 font-bold uppercase tracking-wider">ACTIVE</span>
                </div>

                <div className="space-y-2 border-b border-white/5 pb-4">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Digital Twin Status</div>
                  <div className="text-lg font-display text-white">SYS_CONT_TRANSFORM</div>
                </div>

                {/* Simulated data fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-lg p-3 border border-white/5">
                    <div className="text-[9px] font-mono text-slate-400">YIELD INDEX</div>
                    <div className="text-lg font-mono font-bold text-accent-blue">+42.8%</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 border border-white/5">
                    <div className="text-[9px] font-mono text-slate-400">DOWNTIME</div>
                    <div className="text-lg font-mono font-bold text-accent-pink">-85.0%</div>
                  </div>
                </div>

                {/* Oscilloscope wave visualization */}
                <div className="space-y-2">
                  <div className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">Optimisation Curve</div>
                  <div className="h-16 bg-white/5 rounded-lg border border-white/5 flex items-center justify-center p-2 relative overflow-hidden">
                    <svg viewBox="0 0 100 30" className="w-full h-full text-accent-blue overflow-visible">
                      <path
                        d="M0,15 Q15,5 30,20 T60,10 T90,25"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      {/* Interactive target line */}
                      <line x1="0" y1="12" x2="100" y2="12" stroke="#EC4899" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
                    </svg>
                  </div>
                </div>

                {/* Sub status */}
                <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 border-t border-white/5 pt-4">
                  <span>FACILITY_ID: IN_BLR_01</span>
                  <span>MODE: CONTINUOUS</span>
                </div>
              </div>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
