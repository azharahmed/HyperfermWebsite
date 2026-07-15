import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { MotionProvider } from '@/components/providers/motion-provider';
import './globals.css';

/* ── Fonts ──────────────────────────────────────────────────────────────── */

/**
 * Bebas Neue: bold geometric display font for hero headings.
 */
const bebasNeue = localFont({
  src: '../../public/fonts/BebasNeue-Regular.ttf',
  variable: '--font-display',
  display: 'swap',
  weight: '400',
});

/**
 * Prata: elegant serif for editorial subheadings and accent text.
 */
const prata = localFont({
  src: '../../public/fonts/Prata-Regular.ttf',
  variable: '--font-serif',
  display: 'swap',
  weight: '400',
});

/**
 * Inter: highly legible variable-weight sans-serif for body text.
 */
const inter = localFont({
  src: [
    { path: '../../public/fonts/Inter-VariableFont_opsz,wght.ttf', style: 'normal' },
    { path: '../../public/fonts/Inter-Italic-VariableFont_opsz,wght.ttf', style: 'italic' },
  ],
  variable: '--font-sans',
  display: 'swap',
});

/**
 * Montserrat: clean geometric sans-serif for navigation, buttons, and UI labels.
 */
const montserrat = localFont({
  src: [
    { path: '../../public/fonts/Montserrat-VariableFont_wght.ttf', style: 'normal' },
    { path: '../../public/fonts/Montserrat-Italic-VariableFont_wght.ttf', style: 'italic' },
  ],
  variable: '--font-ui',
  display: 'swap',
});

/**
 * Space Mono: monospace font for code snippets, data labels, and technical text.
 */
const spaceMono = localFont({
  src: [
    { path: '../../public/fonts/SpaceMono-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../../public/fonts/SpaceMono-Italic.ttf', weight: '400', style: 'italic' },
    { path: '../../public/fonts/SpaceMono-Bold.ttf', weight: '700', style: 'normal' },
    { path: '../../public/fonts/SpaceMono-BoldItalic.ttf', weight: '700', style: 'italic' },
  ],
  variable: '--font-mono',
  display: 'swap',
});

/* ── Metadata ───────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Intelligent Continuous Biomanufacturing | HyperFerment',
  description:
    'Transforming legacy bioprocess facilities into intelligent continuous-mode fermentation infrastructure using AI, real-time analytics, advanced process control, and process optimization.',
  metadataBase: new URL('https://hyperferment.com'),
  openGraph: {
    title: 'Intelligent Continuous Biomanufacturing | HyperFerment',
    description:
      'Transforming legacy bioprocess facilities into intelligent continuous-mode fermentation infrastructure using AI, real-time analytics, advanced process control, and process optimization.',
    type: 'website',
    url: 'https://hyperferment.com',
    siteName: 'HyperFerment',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Intelligent Continuous Biomanufacturing | HyperFerment',
    description:
      'Transforming legacy bioprocess facilities into intelligent continuous-mode fermentation infrastructure using AI, real-time analytics, advanced process control, and process optimization.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* ── Root Layout ────────────────────────────────────────────────────────── */

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${prata.variable} ${inter.variable} ${montserrat.variable} ${spaceMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        {/* Skip-to-content for keyboard and screen-reader users */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
