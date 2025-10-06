'use client';

import Text from '@/styles/text';
import { variables } from '@/styles/variables';
import React from 'react';
import styled from 'styled-components';
import { caseStudies } from '../../data/caseStudies';
import { Wrapper } from '../../styles/index.styled';
import CaseStudyCard from './CaseStudyCard';

const Section = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  gap: ${variables.spacing['lg-24']};
  background: transparent;
  max-width: 1440px;
  margin: 0 auto;
`;

const CaseStudySection: React.FC = () => (
  <Section
    $mobilePadding={`0 ${variables.spacing['global-horizontal-mobile']} `}
    $tabletXLPadding={`0 ${variables.spacing['global-horizontal-desktop']}`}
    $tabletPadding={`0 ${variables.spacing['global-horizontal-tablet']}`}
  >
    <Text $variant={'subheading/lg'}>Case studies</Text>
    {caseStudies.map((props, idx) => (
      <CaseStudyCard key={idx} {...props} />
    ))}
  </Section>
);

export default CaseStudySection;
