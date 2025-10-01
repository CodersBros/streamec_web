import { Frame184TeamMember } from '@/components/ui/Frame184Section';

export const TEAM_MEMBERS: Frame184TeamMember[] = [
  {
    id: 'mem1',
    imageSrc: '/vercel.svg',
    name: 'Jane Doe',
    role: 'Lead Engineer',
    tag: 'FRONTEND',
    phone: '+48 123 456 789',
    email: 'jane.doe@example.com',
  },
  {
    id: 'mem2',
    imageSrc: '/vercel.svg',
    name: 'John Smith',
    role: 'Product Designer',
    tag: 'DESIGN',
    email: 'john.smith@example.com',
  },
  {
    id: 'mem3',
    imageSrc: '/vercel.svg',
    name: 'Alice Brown',
    role: 'Backend Engineer',
    tag: 'BACKEND',
    phone: '+48 987 654 321',
  },
  {
    id: 'mem4',
    imageSrc: '/vercel.svg',
    name: 'Bob Lee',
    role: 'Data Analyst',
    tag: 'DATA',
    email: 'bob.lee@example.com',
  },
] satisfies Frame184TeamMember[];

export type { Frame184TeamMember as TeamMember };
