import { TeamMember } from '@/components/ui/TeamCard';

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'mem1',
    imageSrc: '/images/Filip.jpg',
    name: 'Jane Doe',
    role: 'Lead Engineer',
    tag: 'FRONTEND',
    phone: '+48 123 456 789',
    email: 'jane.doe@example.com',
  },
  {
    id: 'mem2',
    imageSrc: '/images/default_team.jpg',
    name: 'John Smith',
    role: 'Product Designer',
    tag: 'DESIGN',
    email: 'john.smith@example.com',
  },
  {
    id: 'mem3',
    imageSrc: '/images/default_team.jpg',
    name: 'Alice Brown',
    role: 'Backend Engineer',
    tag: 'BACKEND',
    phone: '+48 987 654 321',
  },
  {
    id: 'mem4',
    imageSrc: '/images/default_team.jpg',
    name: 'Bob Lee',
    role: 'Data Analyst',
    tag: 'DATA',
    email: 'bob.lee@example.com',
  },
] satisfies TeamMember[];

export type { TeamMember };
