import Link from 'next/link';
import { cn } from '@/lib/cn';
import type { ReactNode } from 'react';

/* ── Types ──────────────────────────────────────────────────────────────── */

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

export interface ButtonLinkProps {
  /** When provided, renders a Next.js <Link>; otherwise renders a <button>. */
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  /** Open link in a new tab (only relevant when href is provided). */
  external?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  'aria-label'?: string;
}

/* ── Style constants ────────────────────────────────────────────────────── */

const base = [
  'inline-flex items-center justify-center gap-2',
  'font-medium transition-all duration-200',
  'select-none cursor-pointer',
  'focus-visible:outline-none focus-visible:ring-2',
  'focus-visible:ring-accent-blue focus-visible:ring-offset-2',
  'disabled:pointer-events-none disabled:opacity-60',
  'active:scale-[0.98]',
].join(' ');

const variants: Record<Variant, string> = {
  primary: [
    'bg-gradient-to-r from-accent-blue to-accent-violet',
    'text-white shadow-button-primary',
    'hover:opacity-90',
  ].join(' '),
  secondary: [
    'bg-transparent',
    'border border-border',
    'text-ink hover:bg-surface-alt',
  ].join(' '),
  ghost: [
    'bg-transparent text-ink-muted hover:text-ink',
  ].join(' '),
};

const sizes: Record<Size, string> = {
  sm: 'h-9  min-w-9  px-4 text-xs  rounded-button',
  md: 'h-11 min-w-11 px-6 text-sm  rounded-button',
  lg: 'h-[3.25rem] min-w-[3.25rem] px-8 text-[0.9375rem] rounded-button',
};

/* ── Component ──────────────────────────────────────────────────────────── */

export function ButtonLink({
  href,
  variant = 'primary',
  size = 'md',
  className,
  children,
  external = false,
  onClick,
  type = 'button',
  disabled,
  'aria-label': ariaLabel,
}: ButtonLinkProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href !== undefined) {
    return (
      <Link
        href={href}
        className={classes}
        aria-label={ariaLabel}
        onClick={onClick}
        {...(external
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
