import HeroSection from '@/components/ui/HeroSection';
import HeroIconAction from '@/components/ui/HeroIconAction';
import OurServicesSection from '@/components/ui/OurServicesSection';
import { SERVICES_ITEMS } from '@/data/services';

export default function Home() {
  return (
    <div>
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
      <OurServicesSection items={SERVICES_ITEMS} />
    </div>
  );
}
