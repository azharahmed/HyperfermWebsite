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
  { label: 'Technology', href: '#technology' },
  { label: 'Industries', href: '#industries' },
  { label: 'Why Us', href: '#capabilities' },
];

/** Footer link columns */
export const footerColumns: FooterColumn[] = [
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Careers', href: '#careers' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    heading: 'Technology',
    links: [
      { label: 'AI Process Intelligence', href: '#technology' },
      { label: 'Process Analytics', href: '#technology' },
      { label: 'Advanced Process Control', href: '#technology' },
      { label: 'Continuous Fermentation', href: '#fermentation' },
    ],
  },
  {
    heading: 'Solutions',
    links: [
      { label: 'Facility Transformation', href: '#solutions' },
      { label: 'Precision Fermentation', href: '#solutions' },
      { label: 'Process Optimization', href: '#solutions' },
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
