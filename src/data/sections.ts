export type LandingSectionId =
  | 'hero'
  | 'services'
  | 'team'
  | 'contact'
  | 'case-studies';

export interface LandingSection {
  id: LandingSectionId;
  label: string;
  hash: string;
  priority?: number;
  track?: boolean;
}

export const landingSections: LandingSection[] = [
  { id: 'hero', label: 'Start', hash: '#hero', priority: 0 },
  { id: 'services', label: 'Our Services', hash: '#services', priority: 1 },

  {
    id: 'case-studies',
    label: 'Case Studies',
    hash: '#case-studies',
    priority: 2,
  },
  { id: 'contact', label: 'Contact Us', hash: '#contact', priority: 3 },
  { id: 'team', label: 'Meet our Team', hash: '#team', priority: 4 },
];

export const landingSectionIds = landingSections.map(s => s.id);
