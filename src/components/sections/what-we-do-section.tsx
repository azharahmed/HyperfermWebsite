"use client";

import { motion } from "framer-motion";
import { Activity, Brain, Layers, ArrowUpRight } from "lucide-react";

const cards = [
  {
    title: "Continuous Fermentation",
    description: "Unlike batch runs that idle between cycles, our continuous process keeps microorganisms in peak production phase — more uptime, more product per bioreactor.",
    badge: "CORE TECHNOLOGY",
    icon: Layers,
    color: "from-blue-500 to-indigo-500",
    badgeColor: "text-blue-600 bg-blue-50 border-blue-200",
  },
  {
    title: "AI-Driven Process Control",
    description: "Our ML models monitor pH, dissolved oxygen, temperature, feed rates and hundreds of other parameters in real time — autonomously tuning fermentation for optimal yield.",
    badge: "PROPRIETARY AI",
    icon: Brain,
    color: "from-violet-500 to-fuchsia-500",
    badgeColor: "text-violet-600 bg-violet-50 border-violet-200",
  },
  {
    title: "Scale-Up Engineering",
    description: "From lab to pilot to industrial plant, we deliver the process engineering and design know-how so your biology scales reliably — without surprises at volume.",
    badge: "FULL-STACK",
    icon: Activity,
    color: "from-pink-500 to-rose-500",
    badgeColor: "text-pink-600 bg-pink-50 border-pink-200",
  },
] as const;

export function WhatWeDoSection() {
  return (
    <section id="what-we-do" className="relative py-24 md:py-32 overflow-hidden bg-surface">
      {/* Decorative background gradients for a futuristic glow */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-accent-blue/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-accent-violet/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent-blue block">
                WHAT WE DO
              </span>
              <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.1] text-ink">
                Fermentation, Reimagined for Industrial Output
              </h2>
            </div>

            <div className="space-y-6 text-base md:text-lg text-ink-muted leading-relaxed font-ui font-light">
              <p>
                We are pioneering continuous fermentation of bio-based products. At Hyperferm,
                we work toward greater sustainability of businesses, people and the planet by
                solving real-world challenges for tomorrow.
              </p>
              <p>
                We are developing sustainable SynBio products using precision fermentation
                and synthetic biology — focused on supporting human lives and reducing our
                environmental impact.
              </p>
              <p className="font-semibold text-ink">
                We are not just fermenting products — we are enabling scale-up of bio
                processes, intelligently.
              </p>
            </div>

            <div className="pt-2">
              <a
                href="#about"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent-blue hover:text-accent-violet transition-colors group"
              >
                KNOW MORE ABOUT US
                <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </div>

          {/* Right Column: Beaker Graphic */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-[300px] h-[400px] md:w-[320px] md:h-[420px] bg-white/30 backdrop-blur-md rounded-3xl border border-white/40 shadow-card flex items-center justify-center p-8 overflow-hidden group hover:shadow-card-hover transition-all duration-300">
              {/* Inner glowing core */}
              <div className="absolute inset-0 bg-radial-[circle_at_50%_50%,rgba(99,102,241,0.08)_0%,transparent_70%]" />

              {/* Animated Beaker SVG */}
              <svg
                width="180"
                height="280"
                viewBox="0 0 180 280"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative z-10 filter drop-shadow-[0_8px_24px_rgba(124,58,237,0.15)]"
              >
                {/* Lip / Rim of Beaker */}
                <ellipse cx="90" cy="30" rx="35" ry="8" stroke="#D1D5DB" strokeWidth="2.5" fill="none" />
                
                {/* Outer Boundary */}
                <path
                  d="M55 30 V110 L15 220 C5 245 20 270 50 270 H130 C160 270 175 245 165 220 L125 110 V30"
                  stroke="#E5E7EB"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />

                {/* Inner Fluid clipping path */}
                <mask id="beaker-fluid-mask">
                  <path
                    d="M55 30 V110 L15 220 C5 245 20 270 50 270 H130 C160 270 175 245 165 220 L125 110 V30 Z"
                    fill="white"
                  />
                </mask>

                {/* Wave Gradient */}
                <defs>
                  <linearGradient id="fluid-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#EC4899" />
                    <stop offset="50%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#3B82F6" />
                  </linearGradient>
                </defs>

                {/* Animated Liquid */}
                <g mask="url(#beaker-fluid-mask)">
                  {/* Background wave */}
                  <path
                    d="M-20 160 Q25 150 70 160 T160 160 T250 160 T340 160 V280 H-20 Z"
                    fill="url(#fluid-gradient)"
                    opacity="0.5"
                  >
                    <animate
                      attributeName="d"
                      dur="8s"
                      repeatCount="indefinite"
                      values="
                        M-20 160 Q25 150 70 160 T160 160 T250 160 T340 160 V280 H-20 Z;
                        M-20 160 Q25 170 70 160 T160 160 T250 150 T340 160 V280 H-20 Z;
                        M-20 160 Q25 150 70 160 T160 160 T250 160 T340 160 V280 H-20 Z
                      "
                    />
                  </path>

                  {/* Foreground wave */}
                  <path
                    d="M-20 165 Q25 175 70 165 T160 165 T250 175 T340 165 V280 H-20 Z"
                    fill="url(#fluid-gradient)"
                  >
                    <animate
                      attributeName="d"
                      dur="5s"
                      repeatCount="indefinite"
                      values="
                        M-20 165 Q25 175 70 165 T160 165 T250 175 T340 165 V280 H-20 Z;
                        M-20 165 Q25 155 70 165 T160 165 T250 165 T340 175 V280 H-20 Z;
                        M-20 165 Q25 175 70 165 T160 165 T250 175 T340 165 V280 H-20 Z
                      "
                    />
                  </path>

                  {/* Floating Bubbles */}
                  <g fill="white" opacity="0.6">
                    <circle cx="50" cy="220" r="3">
                      <animate attributeName="cy" dur="4s" repeatCount="indefinite" values="220;140" />
                      <animate attributeName="opacity" dur="4s" repeatCount="indefinite" values="0.6;0" />
                    </circle>
                    <circle cx="85" cy="240" r="2">
                      <animate attributeName="cy" dur="3s" repeatCount="indefinite" values="240;150" />
                      <animate attributeName="opacity" dur="3s" repeatCount="indefinite" values="0.7;0" />
                    </circle>
                    <circle cx="120" cy="210" r="4">
                      <animate attributeName="cy" dur="5s" repeatCount="indefinite" values="210;135" />
                      <animate attributeName="opacity" dur="5s" repeatCount="indefinite" values="0.5;0" />
                    </circle>
                    <circle cx="65" cy="250" r="2.5">
                      <animate attributeName="cy" dur="4.5s" repeatCount="indefinite" values="250;145" />
                      <animate attributeName="opacity" dur="4.5s" repeatCount="indefinite" values="0.8;0" />
                    </circle>
                    <circle cx="105" cy="230" r="3.5">
                      <animate attributeName="cy" dur="3.5s" repeatCount="indefinite" values="230;140" />
                      <animate attributeName="opacity" dur="3.5s" repeatCount="indefinite" values="0.6;0" />
                    </circle>
                  </g>
                </g>

                {/* Markings */}
                <line x1="85" y1="90" x2="95" y2="90" stroke="#CCCCCC" strokeWidth="2" opacity="0.6" />
                <line x1="85" y1="120" x2="95" y2="120" stroke="#CCCCCC" strokeWidth="2" opacity="0.6" />
                <line x1="80" y1="150" x2="100" y2="150" stroke="#CCCCCC" strokeWidth="2" opacity="0.6" />
                <line x1="85" y1="180" x2="95" y2="180" stroke="#FFFFFF" strokeWidth="2" opacity="0.4" />
                <line x1="85" y1="210" x2="95" y2="210" stroke="#FFFFFF" strokeWidth="2" opacity="0.4" />
                <line x1="80" y1="240" x2="100" y2="240" stroke="#FFFFFF" strokeWidth="2" opacity="0.4" />
              </svg>

              {/* Floating nodes */}
              <div className="absolute top-10 left-12 w-3 h-3 rounded-full bg-accent-blue/60 animate-bounce" style={{ animationDuration: '3s' }} />
              <div className="absolute bottom-16 right-10 w-2.5 h-2.5 rounded-full bg-accent-pink/50 animate-bounce" style={{ animationDuration: '4.5s' }} />
            </div>
          </div>

        </div>

        {/* Technology Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative bg-white/70 backdrop-blur-md rounded-2xl p-8 border border-white/50 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${card.color}`} />

                <div className="space-y-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${card.color} text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={22} />
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-display text-xl text-ink">
                      {card.title}
                    </h3>
                    <p className="font-ui font-light text-sm text-ink-muted leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-border/40">
                  <span className={`inline-block text-[10px] font-bold tracking-wider px-3 py-1 rounded-md border ${card.badgeColor}`}>
                    {card.badge}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
