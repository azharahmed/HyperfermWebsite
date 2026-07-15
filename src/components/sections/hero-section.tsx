"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HeroVideoRotator } from "@/components/hero/hero-video-rotator";
import { ButtonLink } from "@/components/ui/button-link";

/* -- Shared animation variants --------------------------------------------- */


/** Text lines: -40px left to 0, fade in — used by both slides */
const lineVariants = {
  initial: { x: -40, opacity: 0 },
  animate: { x: 0,   opacity: 1 },
  exit:    { x: -24, opacity: 0 },
};

/* -- Slide data ------------------------------------------------------------- */

const slide1Lines = [
  { text: "The Future of",      delay: 0.18, gradient: false },
  { text: "Intelligent",        delay: 0.36, gradient: false },
  { text: "Biomanufacturing",   delay: 0.54, gradient: false },
  { text: "Starts Here.",       delay: 0.72, gradient: true  },
] as const;

/** Four lines that mirror the line count and rhythm of slide 1. */
const slide2Lines = [
  { text: "Transforming Legacy",                   delay: 0.18 },
  { text: "Bioprocess Facilities Worldwide",        delay: 0.36 },
  { text: "Into Intelligent, Continuous-Mode",      delay: 0.54 },
  { text: "Hyper-Fermentation Infrastructure.",     delay: 0.72 },
] as const;

const slide3Lines = [
  { text: "Our Proprietary AI", delay: 0.18 },
] as const;

const slide4Lines = [
  { text: "Precision Fermentation,",     delay: 0.18 },
  { text: "Intelligently Scaled",         delay: 0.36 },
  { text: "From Lab to",                  delay: 0.54 },
  { text: "Commercial Production.",       delay: 0.72 },
] as const;

/* -- Component -------------------------------------------------------------- */

export function HeroSection() {
  const [activeVideo, setActiveVideo] = useState(0);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f7f5ff]">

      {/* Background video rotator */}
      <HeroVideoRotator onActiveIndexChange={setActiveVideo} />

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

            {/* ---- Slide 1: main hero heading ---- */}
            {activeVideo === 0 && (
              <motion.div
                key="slide-1"
                initial="initial"
                animate="animate"
                exit="exit"
                className="space-y-6"
              >
                {/* H1 - each line enters individually, left to right */}
                <h1 className="font-display max-w-[760px] text-[clamp(2.5rem,5vw,4.75rem)] leading-[1.08] tracking-[0.05em] text-[#17133F]">
                  {slide1Lines.map(({ text, delay, gradient }) => (
                    <motion.span
                      key={text}
                      className={[
                        "block",
                        gradient
                          ? "bg-gradient-to-r from-[#7C3AED] to-[#C026D3] bg-clip-text text-transparent"
                          : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                      variants={lineVariants}
                      transition={{ duration: 0.6, delay, ease: "easeOut" }}
                    >
                      {text}
                    </motion.span>
                  ))}
                </h1>

                {/* Action Buttons */}
                <motion.div
                  className="flex flex-wrap gap-4 pt-4"
                  variants={lineVariants}
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

            {/* ---- Slide 2: mission statement, same left-to-right line animation ---- */}
            {activeVideo === 1 && (
              <motion.div
                key="slide-2"
                initial="initial"
                animate="animate"
                exit="exit"
                className="space-y-6"
              >
                {/* Lines - identical animation to slide 1, lighter font */}
                <h2 className="font-ui font-light max-w-[760px] text-[clamp(1.6rem,2.8vw,2.75rem)] leading-[1.15] tracking-[-0.01em] text-[#17133F]">
                  {slide2Lines.map(({ text, delay }) => (
                    <motion.span
                      key={text}
                      className="block"
                      variants={lineVariants}
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

            {/* ---- Slide 3: proprietary AI, same style as slide 2 ---- */}
            {activeVideo === 2 && (
              <motion.div
                key="slide-3"
                initial="initial"
                animate="animate"
                exit="exit"
                className="space-y-6"
              >
                {/* Single line - same font and animation as slide 2 */}
                <h2 className="font-ui font-light max-w-[760px] text-[clamp(1.6rem,2.8vw,2.75rem)] leading-[1.15] tracking-[-0.01em] text-[#17133F]">
                  {slide3Lines.map(({ text, delay }) => (
                    <motion.span
                      key={text}
                      className="block"
                      variants={lineVariants}
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
                  transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
                >
                  <ButtonLink href="#technology" variant="primary" size="md">
                    EXPLORE OUR PLATFORM
                  </ButtonLink>
                  <ButtonLink href="#contact" variant="secondary" size="md">
                    PARTNER WITH US
                  </ButtonLink>
                </motion.div>
              </motion.div>
            )}

            {/* ---- Slide 4: precision fermentation ---- */}
            {activeVideo === 3 && (
              <motion.div
                key="slide-4"
                initial="initial"
                animate="animate"
                exit="exit"
                className="space-y-6"
              >
                {/* Lines */}
                <h2 className="font-ui font-light max-w-[760px] text-[clamp(1.6rem,2.8vw,2.75rem)] leading-[1.15] tracking-[-0.01em] text-[#17133F]">
                  {slide4Lines.map(({ text, delay }) => (
                    <motion.span
                      key={text}
                      className="block"
                      variants={lineVariants}
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