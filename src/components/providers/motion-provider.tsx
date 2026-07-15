'use client';

import { MotionConfig } from 'framer-motion';
import type { ReactNode } from 'react';

interface MotionProviderProps {
  children: ReactNode;
}

/**
 * Wraps the application with Framer Motion's MotionConfig.
 * `reducedMotion="user"` automatically respects the user's
 * prefers-reduced-motion OS setting across all motion components.
 */
export function MotionProvider({ children }: MotionProviderProps) {
  return (
    <MotionConfig reducedMotion="user">
      {children}
    </MotionConfig>
  );
}
