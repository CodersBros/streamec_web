import type { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'Streamec – Music & Voice Platform for Gyms, Trainers & Studios',
  description: 'Streamec empowers fitness clubs, instructors, and wellness studios with synchronized music and voice streaming. Create perfect workouts with professional sound and real-time control.',
};

export default function HomePage() {
  return <HomeClient />;
}