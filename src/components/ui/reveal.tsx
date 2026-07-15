'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/cn';
import type { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  /**
   * Animation stagger delay in seconds.
   * @default 0
   */
  delay?: number;
  /**
   * Y-axis travel distance in pixels.
   * @default 16
   */
  y?: number;
  /**
   * Viewport margin before triggering (negative = trigger before element is
   * fully visible, giving a smoother feel).
   * @default '-60px'
   */
  margin?: string;
}

/**
 * Scroll-triggered fade-up reveal.
 *
 * Wraps children in a `motion.div` that transitions from
 * `{ opacity: 0, y }` to `{ opacity: 1, y: 0 }` once the element
 * enters the viewport.
 *
 * Reduced motion is handled globally by MotionProvider
 * (`MotionConfig reducedMotion="user"`), so no per-component check needed.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 16,
  margin = '-60px',
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: margin as `${number}px` });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
