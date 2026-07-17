export interface NavLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  heading: string;
  links: NavLink[];
}

export const navLinks: NavLink[] = [
  { label: 'What We Do', href: '#what-we-do' },
  { label: 'Why Us', href: '#capabilities' },
  { label: 'Industries', href: '#industries' },
  { label: 'Lifecycle', href: '#capabilities-lifecycle' },
];

/** Footer link columns */
export const footerColumns: FooterColumn[] = [
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Careers', href: '#careers' },
      { label: 'Contact', href: 'mailto:hello@hyperferm.ai' },
    ],
  },
  {
    heading: 'Technology',
    links: [
      { label: 'AI Process Intelligence', href: '#what-we-do' },
      { label: 'Process Analytics', href: '#what-we-do' },
      { label: 'Advanced Process Control', href: '#what-we-do' },
      { label: 'Continuous Fermentation', href: '#what-we-do' },
    ],
  },
  {
    heading: 'Solutions',
    links: [
      { label: 'Facility Transformation', href: '#what-we-do' },
      { label: 'Precision Fermentation', href: '#what-we-do' },
      { label: 'Process Optimization', href: '#what-we-do' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Insights', href: '#insights' },
      { label: 'Case Studies', href: '#insights' },
      { label: 'Whitepapers', href: '#insights' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms of Use', href: '#terms' },
    ],
  },
];
