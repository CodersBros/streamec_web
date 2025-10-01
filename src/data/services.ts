// Dane usług (sekcja OurServicesSection)
// Używa rzeczywistych nazw ikon z public/icons i obrazów z public/images

import { IconName, ImageName } from '@/components/ui/ServiceCard';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName?: IconName; // Opcjonalne - ikona SVG
  imageName?: ImageName; // Opcjonalne - zdjęcie JPG/PNG
  showButton?: boolean; // Czy pokazać przycisk
  buttonText?: string; // Tekst przycisku
  buttonUrl?: string; // URL do przekierowania
  buttonAction?: string; // Akcja do wykonania
}

export const SERVICES_ITEMS: ServiceItem[] = [
  {
    id: 'svc1',
    title: 'Pin2 Enterprise',
    description:
      'With the Pin2 Enterprise platform, you gain control over music variety and voice messages at all your venues.',
    imageName: 'Pin2Logo.svg',
    showButton: true,
    buttonText: 'Read more',
    buttonAction: 'pin2',
  },
  {
    id: 'svc2',
    title: 'Set4Play',
    description:
      'Tools for instructors to create workouts, with a complete admin module for management.',
    imageName: 'Set4PlayLogo.svg',
    showButton: true,
    buttonText: 'Read more',
    buttonAction: 'set4play',
  },
  {
    id: 'svc3',
    title: 'Cost Savings',
    description: 'Lower expenses with STIM/SAMI-free music licensing.',
    iconName: 'Music Note',
  },
  {
    id: 'svc4',
    title: 'Voice Communication',
    description:
      'Seamless announcement system for gyms and swimming facilities.',
    iconName: 'Person Voice',
  },
  {
    id: 'svc5',
    title: 'Indoor Cycling Integration',
    description:
      'Certified integration with indoor cycling visualisation concepts.',
    iconName: 'Arrow Sync',
  },
  {
    id: 'svc6',
    title: 'High Quality Group Fitness Classes',
    description:
      'Competence assurance systems for new and existing group fitness instructors.',
    iconName: 'People',
  },
];
