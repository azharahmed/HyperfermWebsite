"use client";

import { motion } from "framer-motion";
import { Clock, AlertTriangle, TrendingUp } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Dead Time Between Batches",
    description:
      "Standard batch reactors sit idle during cleaning, sterilisation and restart — capital that isn't producing.",
    color: "from-blue-500 to-indigo-500",
    glow: "rgba(59,130,246,0.12)",
  },
  {
    icon: AlertTriangle,
    title: "Inconsistent Quality Across Runs",
    description:
      "Manual interventions and process drift cause batch-to-batch variation in yield and purity.",
    color: "from-violet-500 to-fuchsia-500",
    glow: "rgba(124,58,237,0.12)",
  },
  {
    icon: TrendingUp,
    title: "Scale-Up Uncertainty",
    description:
      "What works at bench scale rarely transfers cleanly to industrial volume without costly trial and error.",
    color: "from-pink-500 to-rose-500",
    glow: "rgba(236,72,153,0.12)",
  },
] as const;

export function ProblemSection() {
  return (
    <section
      id="problem"
      className="relative py-24 md:py-32 overflow-hidden bg-surface-alt"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.06)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(124,58,237,0.06)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent-blue block mb-4">
            THE PROBLEM WE SOLVE
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.1] text-ink mb-6">
            Biology Alone Doesn&apos;t Scale. Manufacturing Does.
          </h2>
          <p className="text-base md:text-lg text-ink-muted font-ui font-light leading-relaxed">
            Many bio-based products succeed in the lab but fail during
            commercialisation — scale-up remains one of the industry&apos;s
            biggest bottlenecks.
          </p>
        </motion.div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((problem, i) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                className="relative bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-white/60 shadow-card hover:shadow-card-hover transition-all duration-300 group overflow-hidden"
                style={{
                  boxShadow: `0 2px 24px ${problem.glow}, 0 1px 4px rgba(0,0,0,0.04)`,
                }}
              >
                {/* Top accent bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${problem.color}`}
                />

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${problem.color} text-white shadow-md mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={22} />
                </div>

                <h3 className="font-display text-xl text-ink mb-3">
                  {problem.title}
                </h3>
                <p className="font-ui font-light text-sm text-ink-muted leading-relaxed">
                  {problem.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
