'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { navLinks } from '@/data/navigation';
import { ButtonLink } from '@/components/ui/button-link';
import { MobileNavigation } from './mobile-navigation';
import { cn } from '@/lib/cn';

/* ── Logo ───────────────────────────────────────────────────────────────── */

function HyperFermentLogo() {
  return (
    <Link
      href="/"
      className="flex items-center flex-shrink-0"
      aria-label="HyperFerment — return to homepage"
    >
      <Image
        src="/logo.svg"
        alt="HyperFerment"
        width={160}
        height={40}
        className="h-9 w-auto object-contain"
        priority
      />
    </Link>
  );
}

/* ── Site Header ────────────────────────────────────────────────────────── */

export function SiteHeader() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuButtonRef               = useRef<HTMLButtonElement>(null);

  /* Scroll shadow effect */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // initialise
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-30 transition-all duration-300',
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-header'
          : 'bg-transparent',
      )}
    >
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <HyperFermentLogo />

          {/* Desktop nav */}
          <nav
            aria-label="Primary navigation"
            className="hidden lg:flex items-center gap-0.5"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-4 py-2 text-sm font-medium rounded-md',
                  'text-ink-muted hover:text-ink hover:bg-surface-alt',
                  'transition-colors whitespace-nowrap',
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <ButtonLink href="#contact" variant="primary" size="md">
              Partner With Us
            </ButtonLink>
          </div>

          {/* Mobile hamburger */}
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMobileOpen(true)}
            className={cn(
              'lg:hidden flex items-center justify-center w-11 h-11 rounded-button',
              'text-ink-muted hover:text-ink hover:bg-surface-alt',
              'transition-colors',
            )}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label="Open navigation menu"
          >
            <Menu size={22} aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      <MobileNavigation
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        triggerRef={menuButtonRef}
      />
    </header>
  );
}
