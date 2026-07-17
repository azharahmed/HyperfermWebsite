"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HeroVideoRotator } from "@/components/hero/hero-video-rotator";
import { ButtonLink } from "@/components/ui/button-link";

/* -- Shared animation variants --------------------------------------------- */

/** Text lines: -40px left to 0, fade in — used by all slides */
const lineVariants = {
  initial: { x: -40, opacity: 0 },
  animate: { x: 0,   opacity: 1 },
};

/* -- Slide data ------------------------------------------------------------- */

const slide1Lines = [
  { text: "Transforming legacy bioprocess",                   delay: 0.18 },
  { text: "facilities worldwide into AI-powered,",             delay: 0.36 },
  { text: "continuous precision fermentation systems",         delay: 0.54 },
  { text: "for the future of biomanufacturing.",               delay: 0.72 },
] as const;

const slide2Lines = [
  { text: "Powered by our proprietary",                        delay: 0.18 },
  { text: "AI platform, we deliver",                           delay: 0.36 },
  { text: "real-time process analytics, advanced",             delay: 0.54 },
  { text: "process control, and predictive optimisation.",     delay: 0.72 },
] as const;

const slide3Lines = [
  { text: "This maximises the efficiency,",                    delay: 0.18 },
  { text: "scalability, and performance",                      delay: 0.36 },
  { text: "of precision fermentation-derived",                 delay: 0.54 },
  { text: "products.",                                         delay: 0.72 },
] as const;

/* -- Component -------------------------------------------------------------- */

export function HeroSection() {
  const [phase, setPhase] = useState(0);

  // Controlled timing loop state machine:
  // Phase 0: show text 0, video 0 (5000ms)
  // Phase 1: text 0 exits (400ms)
  // Phase 2: video cuts to 1 (50ms)
  // Phase 3: show text 1, video 1 (5000ms)
  // Phase 4: text 1 exits (400ms)
  // Phase 5: video cuts to 2 (50ms)
  // Phase 6: show text 2, video 2 (5000ms)
  // Phase 7: text 2 exits (400ms)
  // Phase 8: video cuts to 0 (50ms)
  useEffect(() => {
    let delay = 5000;
    if (phase === 1 || phase === 4 || phase === 7) {
      delay = 400; // Allow text to exit fully
    } else if (phase === 2 || phase === 5 || phase === 8) {
      delay = 50;  // Instant video cut
    }

    const timer = setTimeout(() => {
      setPhase((prev) => (prev + 1) % 9);
    }, delay);

    return () => clearTimeout(timer);
  }, [phase]);

  // Derived state mapping
  const activeVideo = (phase === 0 || phase === 1) ? 0
                    : (phase === 2 || phase === 3 || phase === 4) ? 1
                    : (phase === 5 || phase === 6 || phase === 7) ? 2
                    : 0;

  const activeText = phase === 0 ? 0
                   : phase === 3 ? 1
                   : phase === 6 ? 2
                   : -1;

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f7f5ff]">

      {/* Background video rotator (Controlled, Sudden Cut) */}
      <HeroVideoRotator activeIndex={activeVideo} />

      {/* Futuristic Background Glow Blobs */}
      <div className="absolute top-[15%] left-[20%] w-[350px] h-[350px] bg-accent-blue/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] bg-accent-pink/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Narrow readability gradient - keeps heading legible, right side open */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.78)_0%,rgba(255,255,255,0.58)_27%,rgba(255,255,255,0.18)_47%,rgba(255,255,255,0)_67%)]"
      />

      {/* Hero content - position is fixed; only the inner text swaps */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1360px] items-center px-6 py-32 lg:px-10">
        <div className="max-w-[760px]">

          <AnimatePresence mode="wait">

            {/* ---- Slide 1 ---- */}
            {activeText === 0 && (
              <motion.div
                key="slide-1"
                exit={{ opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } }}
                className="space-y-6"
              >
                <h2 className="font-ui font-light max-w-[760px] text-[clamp(1.6rem,2.8vw,2.75rem)] leading-[1.15] tracking-[-0.01em] text-[#17133F]">
                  {slide1Lines.map(({ text, delay }) => (
                    <motion.span
                      key={text}
                      className="block font-medium"
                      variants={lineVariants}
                      initial="initial"
                      animate="animate"
                      transition={{ duration: 0.6, delay, ease: "easeOut" }}
                    >
                      {text}
                    </motion.span>
                  ))}
                </h2>

                {/* Action Buttons */}
                <motion.div
                  className="flex flex-wrap gap-4 pt-4"
                  variants={lineVariants}
                  initial="initial"
                  animate="animate"
                  transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
                >
                  <ButtonLink href="#what-we-do" variant="primary" size="md">
                    EXPLORE OUR PLATFORM
                  </ButtonLink>
                  <ButtonLink href="#contact" variant="secondary" size="md">
                    PARTNER WITH US
                  </ButtonLink>
                </motion.div>
              </motion.div>
            )}

            {/* ---- Slide 2 ---- */}
            {activeText === 1 && (
              <motion.div
                key="slide-2"
                exit={{ opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } }}
                className="space-y-6"
              >
                <h2 className="font-ui font-light max-w-[760px] text-[clamp(1.6rem,2.8vw,2.75rem)] leading-[1.15] tracking-[-0.01em] text-[#17133F]">
                  {slide2Lines.map(({ text, delay }) => (
                    <motion.span
                      key={text}
                      className="block font-medium"
                      variants={lineVariants}
                      initial="initial"
                      animate="animate"
                      transition={{ duration: 0.6, delay, ease: "easeOut" }}
                    >
                      {text}
                    </motion.span>
                  ))}
                </h2>

                {/* Action Buttons */}
                <motion.div
                  className="flex flex-wrap gap-4 pt-4"
                  variants={lineVariants}
                  initial="initial"
                  animate="animate"
                  transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
                >
                  <ButtonLink href="#what-we-do" variant="primary" size="md">
                    EXPLORE OUR PLATFORM
                  </ButtonLink>
                  <ButtonLink href="#contact" variant="secondary" size="md">
                    PARTNER WITH US
                  </ButtonLink>
                </motion.div>
              </motion.div>
            )}

            {/* ---- Slide 3 ---- */}
            {activeText === 2 && (
              <motion.div
                key="slide-3"
                exit={{ opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } }}
                className="space-y-6"
              >
                <h2 className="font-ui font-light max-w-[760px] text-[clamp(1.6rem,2.8vw,2.75rem)] leading-[1.15] tracking-[-0.01em] text-[#17133F]">
                  {slide3Lines.map(({ text, delay }) => (
                    <motion.span
                      key={text}
                      className="block font-medium"
                      variants={lineVariants}
                      initial="initial"
                      animate="animate"
                      transition={{ duration: 0.6, delay, ease: "easeOut" }}
                    >
                      {text}
                    </motion.span>
                  ))}
                </h2>

                {/* Action Buttons */}
                <motion.div
                  className="flex flex-wrap gap-4 pt-4"
                  variants={lineVariants}
                  initial="initial"
                  animate="animate"
                  transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
                >
                  <ButtonLink href="#what-we-do" variant="primary" size="md">
                    EXPLORE OUR PLATFORM
                  </ButtonLink>
                  <ButtonLink href="#contact" variant="secondary" size="md">
                    PARTNER WITH US
                  </ButtonLink>
                </motion.div>
              </motion.div>
            )}

          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}