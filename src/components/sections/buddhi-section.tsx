"use client";

import { motion } from "framer-motion";
import { Cpu, Eye, BarChart3, Settings2, LineChart, TrendingUp } from "lucide-react";
import Image from "next/image";

// ─── Image URLs ───────────────────────────────────────────────────────────────
// Replace these with local paths (e.g. /images/capabilities/digital-twins.jpg)
// if you move the images into /public/images/capabilities/
const capabilities = [
  {
    title: "Process Digital Twins",
    description:
      "Simulate bioreactor behavior to predict and prevent batch deviations before they occur.",
    icon: Cpu,
    color: "text-blue-500 bg-blue-500/10 border-blue-500/20",
    shadowColor: "shadow-blue-500/20",
    // Industrial bioreactor tanks with digital simulation / UI overlay
    image:
      "https://images.unsplash.com/photo-1518152006812-edab29b069ac?w=640&q=80&auto=format&fit=crop",
    alt: "Industrial bioreactor tanks with digital simulation overlay",
  },
  {
    title: "Predictive Analytics",
    description:
      "Forecast yield profiles and process trajectories using advanced machine learning models.",
    icon: BarChart3,
    color: "text-violet-500 bg-violet-500/10 border-violet-500/20",
    shadowColor: "shadow-violet-500/20",
    // AI analytics dashboard with data charts and ML visualization
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=640&q=80&auto=format&fit=crop",
    alt: "AI analytics dashboard with machine learning data visualization",
  },
  {
    title: "Fermentation Monitoring",
    description:
      "Track temperature, pH, dissolved oxygen, and growth curves in real-time.",
    icon: Eye,
    color: "text-pink-500 bg-pink-500/10 border-pink-500/20",
    shadowColor: "shadow-pink-500/20",
    // Fermentation bioreactor with sensor and monitoring display
    image:
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=640&q=80&auto=format&fit=crop",
    alt: "Fermentation bioreactor with real-time sensor monitoring display",
  },
  {
    title: "Yield Optimization",
    description:
      "Autonomously adjust nutrient feeds and gas flow rates to maximize product titers.",
    icon: TrendingUp,
    color: "text-cyan-500 bg-cyan-500/10 border-cyan-500/20",
    shadowColor: "shadow-cyan-500/20",
    // Stainless steel pipes, valves, and process flow systems
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=640&q=80&auto=format&fit=crop",
    alt: "Stainless steel bioprocess piping, control valves and production flow system",
  },
  {
    title: "Process Control Automation",
    description:
      "Deploy closed-loop control algorithms to run continuous bioprocess operations.",
    icon: Settings2,
    color: "text-indigo-500 bg-indigo-500/10 border-indigo-500/20",
    shadowColor: "shadow-indigo-500/20",
    // Automated lab equipment, robotic pipetting, clean bioprocess automation
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=640&q=80&auto=format&fit=crop",
    alt: "Automated laboratory robotic pipetting system for bioprocess control",
  },
  {
    title: "Production Forecasting",
    description:
      "Predict commercial yields and supply chain readiness with high-fidelity analytics.",
    icon: LineChart,
    color: "text-fuchsia-500 bg-fuchsia-500/10 border-fuchsia-500/20",
    shadowColor: "shadow-fuchsia-500/20",
    // Forecast analytics dashboard, supply chain readiness chart
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=640&q=80&auto=format&fit=crop",
    alt: "Production forecasting analytics dashboard with supply chain readiness chart",
  },
] as const;

export function BuddhiSection() {
  return (
    <section id="technology" className="relative py-24 md:py-32 overflow-hidden bg-surface">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-violet/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="space-y-4 mb-20 text-center max-w-[800px] mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent-blue block">
            Capabilities
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.1] text-ink">
            Platform Capabilities
          </h2>
          <p className="font-ui font-light text-base md:text-lg text-ink-muted leading-relaxed">
            Our modular AI platform provides the tools needed to monitor, simulate, control, and optimize commercial bioprocesses.
          </p>
        </div>

        {/* 3×2 Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {capabilities.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: "easeOut" }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="relative bg-white/70 backdrop-blur-md rounded-2xl border border-white/50 shadow-card hover:shadow-card-hover transition-shadow duration-300 flex flex-col group overflow-hidden"
              >
                {/* ── Image area (top of card) ─────────────────────────── */}
                <div className="relative h-[175px] w-full overflow-hidden rounded-t-2xl">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    unoptimized
                  />
                  {/* Soft gradient overlay so image fades into card body */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-white/60 pointer-events-none" />
                </div>

                {/* ── Icon badge – overlaps image / content boundary ───── */}
                <div className="relative px-7 flex">
                  <div
                    className={`-mt-5 w-11 h-11 rounded-xl flex items-center justify-center border ${item.color} shadow-sm group-hover:scale-110 transition-transform duration-300 bg-white z-10`}
                  >
                    <Icon size={20} />
                  </div>
                </div>

                {/* ── Card text content ─────────────────────────────────── */}
                <div className="px-7 pb-6 pt-4 flex flex-col flex-1 justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-display text-[1.1rem] leading-snug text-ink">
                      {item.title}
                    </h3>
                    <p className="font-ui font-light text-sm text-ink-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-border/30 text-[10px] uppercase font-bold text-ink-subtle tracking-wider group-hover:text-accent-blue transition-colors">
                    Learn More
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
