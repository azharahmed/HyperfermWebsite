'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '@/data/navigation';
import { ButtonLink } from '@/components/ui/button-link';
import { cn } from '@/lib/cn';
import type { RefObject } from 'react';

/* ── Constants ──────────────────────────────────────────────────────────── */

/** CSS selector for all keyboard-focusable elements */
const FOCUSABLE_SELECTORS = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(', ');

/* ── Types ──────────────────────────────────────────────────────────────── */

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  /** Ref to the hamburger button — focus returns here on drawer close. */
  triggerRef: RefObject<HTMLButtonElement | null>;
}

/* ── Component ──────────────────────────────────────────────────────────── */

export function MobileNavigation({
  isOpen,
  onClose,
  triggerRef,
}: MobileNavigationProps) {
  const drawerRef = useRef<HTMLDivElement>(null);

  /* ── Focus trap + keyboard handling ──────────────────────────── */
  useEffect(() => {
    if (!isOpen) return;

    const drawer = drawerRef.current;
    if (!drawer) return;

    // Prevent body scroll while drawer is open
    document.body.style.overflow = 'hidden';

    // Collect focusable elements inside drawer
    const focusables = Array.from(
      drawer.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS),
    );
    const first = focusables[0];
    const last  = focusables[focusables.length - 1];

    // Move focus into drawer on open
    first?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        triggerRef.current?.focus();
        return;
      }

      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        // Shift+Tab from first → wrap to last
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        // Tab from last → wrap to first
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, triggerRef]);

  /* ── Render ─────────────────────────────────────────────────── */

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* ── Backdrop ─────────────────────────────────────── */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-ink/20 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* ── Drawer panel ─────────────────────────────────── */}
          <motion.div
            key="drawer"
            ref={drawerRef}
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-surface flex flex-col border-l border-border-subtle shadow-card-hover"
          >
            {/* Drawer header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-border-subtle">
              <span className="font-display text-sm tracking-wide text-ink select-none">
                HyperFerment
              </span>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  triggerRef.current?.focus();
                }}
                className={cn(
                  'flex items-center justify-center w-11 h-11 rounded-button',
                  'text-ink-muted hover:text-ink hover:bg-surface-alt',
                  'transition-colors',
                )}
                aria-label="Close navigation menu"
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>

            {/* Nav links */}
            <nav
              aria-label="Mobile navigation"
              className="flex-1 overflow-y-auto px-6 py-8"
            >
              <ul className="space-y-1" role="list">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className={cn(
                        'flex items-center h-12 px-3 rounded-md',
                        'text-base font-medium text-ink-muted',
                        'hover:text-ink hover:bg-surface-alt',
                        'transition-colors',
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* CTA */}
            <div className="px-6 py-8 border-t border-border-subtle">
              <ButtonLink
                href="#contact"
                variant="primary"
                size="lg"
                className="w-full"
                onClick={onClose}
              >
                Talk to an Expert
              </ButtonLink>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
