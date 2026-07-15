"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Globe } from "lucide-react";

const contactDetails = [
  { icon: Mail, label: "EMAIL", value: "hello@hyperferm.ai", href: "mailto:hello@hyperferm.ai" },
  { icon: MapPin, label: "HQ", value: "Bengaluru, India", href: null },
  { icon: Globe, label: "WEBSITE", value: "www.hyperferm.ai", href: "https://www.hyperferm.ai" },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 overflow-hidden bg-surface"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-accent-blue/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent-violet/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Left — heading, description, CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent-blue block mb-4">
              GET IN TOUCH
            </span>
            <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.1] text-ink mb-6">
              Let&apos;s Build the Future of Manufacturing Biology
            </h2>
            <p className="text-base md:text-lg text-ink-muted font-ui font-light leading-relaxed mb-10">
              Whether you&apos;re developing a new ingredient, building a
              bio-manufacturing facility, or looking for a strategic partner,
              we&apos;d love to connect.
            </p>

            <motion.a
              href="mailto:hello@hyperferm.ai"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-accent-blue text-white text-sm font-ui font-bold uppercase tracking-widest px-8 py-4 rounded-full shadow-button-primary hover:bg-accent-violet transition-colors duration-300"
            >
              PARTNER WITH US
            </motion.a>
          </motion.div>

          {/* Right — contact card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-border shadow-card p-8 divide-y divide-border">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="py-6 first:pt-0 last:pb-0">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-blue block mb-2">
                    {label}
                  </span>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-2 text-base font-ui font-medium text-ink hover:text-accent-blue transition-colors"
                    >
                      <Icon size={16} className="text-ink-subtle flex-shrink-0" />
                      {value}
                    </a>
                  ) : (
                    <span className="flex items-center gap-2 text-base font-ui font-medium text-ink">
                      <Icon size={16} className="text-ink-subtle flex-shrink-0" />
                      {value}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
