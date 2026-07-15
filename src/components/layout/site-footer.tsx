import Link from 'next/link';
import { navLinks } from '@/data/navigation';

const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com/company/hyperferm' },
  { label: 'X', href: 'https://x.com/hyperferm' },
  { label: 'YouTube', href: 'https://youtube.com/@hyperferm' },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-[#0F1123] border-t border-white/10"
      role="contentinfo"
    >
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

          {/* Brand + Tagline + Social */}
          <div className="flex flex-col gap-2">
            <Link href="/" className="font-display text-2xl text-white tracking-wide hover:text-accent-blue transition-colors">
              Hyperferm<span className="text-accent-blue">.</span>
            </Link>
            <p className="text-xs text-white/40 font-ui">Scalable Bio-Systems &amp; AI Manufacturing</p>
            <div className="flex gap-4 mt-1">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-white/40 hover:text-white transition-colors font-ui"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Nav Links */}
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-8 gap-y-2">
            {[...navLinks, { label: 'Contact', href: '#contact' }].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-ui font-semibold uppercase tracking-widest text-white/40 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-xs text-white/30 font-ui shrink-0">
            © {year} Hyperferm.ai — A Scalable Bio-Systems &amp; AI Manufacturing Company.
          </p>

        </div>
      </div>
    </footer>
  );
}
