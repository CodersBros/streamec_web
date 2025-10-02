import HeroIconAction from '@/components/ui/HeroIconAction';
import HeroSection from '@/components/ui/HeroSection';
import OurServicesSection from '@/components/ui/OurServicesSection';
import { SERVICES_ITEMS } from '@/data/services';
import CaseStudySection from '../components/ui/CaseStudySection';
import TeamFilterSection from '../components/ui/TeamFilterSection';

export default function Home() {
  return (
    <div>
      <section id="hero">
        <HeroSection
          backgroundImage={'/images/hero_background.jpg'}
          label={
            'Control Your Music. Empower Your Instructors. Engage Every Facility.'
          }
          actions={
            <HeroIconAction
              label="Music & voice for gyms"
            />
          }
        />
      </section>
      <section id="services">
        <OurServicesSection items={SERVICES_ITEMS} />
      </section>
      <section id="case-studies">
        <CaseStudySection />
      </section>
      <section id="team">
        <TeamFilterSection />
      </section>
    </div>
  );
}
