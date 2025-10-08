'use client';

import HeroIconAction from '@/components/ui/HeroIconAction';
import HeroSection from '@/components/ui/HeroSection';
import OurServicesSection from '@/components/ui/OurServicesSection';
import { SERVICES_ITEMS } from '@/data/services';
import CaseStudySection from '../components/ui/CaseStudySection';
import OurDevelopmentSections from '../components/ui/OurDevelopmentSections';
import TeamFilterSection from '../components/ui/TeamFilterSection';
import { Wrapper } from '../styles/index.styled';

export default function HomeClient() {
  return (
    <div>
      <Wrapper as="section" id="hero">
        <HeroSection
          backgroundImage="/images/hero_background.jpg"
          label="Control Your Music. Empower Your Instructors. Engage Every Facility."
          actions={<HeroIconAction label="Music & voice for gyms" />}
        />
        <Wrapper as="section" $desktopPadding="100px 0 0 0" $mobilePadding="84px 0 0 0">
          <OurDevelopmentSections />
        </Wrapper>
      </Wrapper>

      <Wrapper as="section" $mobilePadding="120px 0 0 0" id="services">
        <OurServicesSection items={SERVICES_ITEMS} />
      </Wrapper>

      <Wrapper as="section" id="case-studies" $mobilePadding="120px 0 0 0">
        <CaseStudySection />
      </Wrapper>

      <Wrapper
        as="section"
        id="team"
        $mobilePadding="120px 0 90px 0"
        $tabletPadding="120px 0 30px 0"
        $tabletXLPadding="120px 0 160px 0"
      >
        <TeamFilterSection />
      </Wrapper>
    </div>
  );
}
