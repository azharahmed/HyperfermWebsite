"use client";

import { motion } from "framer-motion";

const expertise = [
  "Synthetic Biology",
  "Bioprocess Engineering",
  "AI & Machine Learning",
  "Industrial Manufacturing",
  "Fermentation Technologies",
  "Commercial Scale Operations",
];

export function TeamExpertiseSection() {
  return (
    <section
      id="team"
      className="relative py-24 md:py-32 overflow-hidden bg-surface-alt"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* Left — heading + description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] leading-[1.1] text-ink mb-8">
              Team Expertise
            </h2>
            <p className="text-base md:text-lg text-accent-blue font-ui font-light leading-relaxed">
              Our team combines deep, hands-on expertise built over years running
              fermentation infrastructure — the same foundation behind Fermbox —
              now fused with AI to solve one of biotechnology&apos;s hardest
              problems: how to scale biology efficiently, reliably, and
              economically.
            </p>
          </motion.div>

          {/* Right — expertise tags */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 flex flex-col justify-start"
          >
            <div className="flex flex-wrap gap-3">
              {expertise.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.2 + i * 0.07 }}
                  className="inline-flex items-center px-5 py-2.5 rounded-full border border-border bg-white/80 text-sm font-ui font-semibold text-ink shadow-sm hover:shadow-card hover:border-accent-blue/40 hover:text-accent-blue transition-all duration-300 cursor-default"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
