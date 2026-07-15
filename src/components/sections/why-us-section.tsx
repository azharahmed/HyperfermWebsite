"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const features = [
  { label: "Faster Scale-Up", color: "bg-accent-blue" },
  { label: "Reduced Production Costs", color: "bg-accent-violet" },
  { label: "AI-Driven Process Optimization", color: "bg-accent-pink" },
  { label: "Modular Manufacturing Systems", color: "bg-accent-cyan" },
  { label: "Global Commercialization Support", color: "bg-accent-blue" },
  { label: "Continuous Production Technologies", color: "bg-accent-pink" },
];

export function WhyUsSection() {
  return (
    <section
      id="capabilities"
      className="relative py-24 md:py-32 overflow-hidden bg-surface"
    >
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-violet/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent-violet block mb-4">
            WHY HYPERFERM
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.1] text-ink mb-6">
            Bridging the Gap From Lab to Commercial Scale
          </h2>
          <p className="text-base md:text-lg text-ink-muted font-ui font-light leading-relaxed">
            Hyperferm bridges the gap between lab breakthrough and commercial
            manufacturing — through integrated process engineering, AI, and
            manufacturing design.
          </p>
        </motion.div>

        {/* Feature Pills Grid */}
        <div className="flex flex-wrap gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-border rounded-xl px-5 py-4 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <span
                className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${feature.color} group-hover:scale-125 transition-transform duration-300`}
              />
              <span className="font-ui font-semibold text-sm text-ink">
                {feature.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 flex items-center gap-4 text-sm text-ink-muted font-ui"
        >
          <CheckCircle size={18} className="text-accent-blue flex-shrink-0" />
          <span>
            End-to-end support from organism selection to commercial plant
            commissioning.
          </span>
        </motion.div>
      </div>
    </section>
  );
}
