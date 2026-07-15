"use client";

import { motion } from "framer-motion";
import { Utensils, Sparkles, TestTube, Sprout, HeartPulse } from "lucide-react";

const industries = [
  {
    title: "Food & Nutrition",
    description: "Alternative proteins, enzymes, vitamins, specialty ingredients.",
    icon: Utensils,
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "Consumer Products",
    description: "Flavors, fragrances, pigments, bioactive compounds.",
    icon: Sparkles,
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Industrial Biotechnology",
    description: "Specialty chemicals, biomaterials, biopolymers.",
    icon: TestTube,
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Agriculture",
    description: "Feed ingredients, biological inputs, sustainable production systems.",
    icon: Sprout,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Life Sciences",
    description: "Precision proteins, research reagents, manufacturing platforms.",
    icon: HeartPulse,
    color: "from-violet-500 to-fuchsia-500",
  },
] as const;

export function IndustriesSection() {
  return (
    <section id="industries" className="relative py-24 md:py-32 overflow-hidden bg-surface-alt">
      {/* Glow effect */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent-pink/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
        
        {/* Header */}
        <div className="space-y-4 mb-20 max-w-[800px]">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent-pink block">
            INDUSTRIES WE IMPACT
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.1] text-ink">
            Where Hyperferm Delivers Impact
          </h2>
          <p className="font-ui font-light text-base md:text-lg text-ink-muted leading-relaxed">
            Our platform is molecule-agnostic — if it's produced by fermentation, we help you
            make more of it, reliably, at scale.
          </p>
        </div>

        {/* 5-Column Responsive Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative bg-white/70 backdrop-blur-md rounded-2xl p-6 border border-white/50 shadow-sm hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
              >
                {/* Colored Top Bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${ind.color}`} />

                <div className="space-y-6">
                  {/* Icon */}
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${ind.color} text-white shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={18} />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display text-base md:text-lg text-ink leading-snug">
                      {ind.title}
                    </h3>
                    <p className="font-ui font-light text-xs md:text-sm text-ink-muted leading-relaxed">
                      {ind.description}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-border/30 text-[10px] uppercase font-bold text-ink-subtle tracking-wider group-hover:text-accent-pink transition-colors">
                  Learn More
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer Caption */}
        <div className="mt-16 text-center">
          <p className="text-sm italic font-ui font-light text-ink-subtle">
            These sectors are among the fastest-growing applications for synthetic biology and precision fermentation.
          </p>
        </div>

      </div>
    </section>
  );
}
