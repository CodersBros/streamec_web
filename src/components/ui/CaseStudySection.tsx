"use client";

import Text from '@/styles/text';
import { variables } from '@/styles/variables';
import React from 'react';
import styled from 'styled-components';
import { caseStudies } from '../../data/caseStudies';
import CaseStudyCard from './CaseStudyCard';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${variables.spacing['lg-24']};
  
  background: transparent;
  padding: 0 ${variables.spacing['global-horizontal-desktop']};
  max-width: 1440px;
  margin: 0 auto;
`;




const CaseStudySection: React.FC = () => (
  <Section>
    <Text variant={'heading/xl'}  >Case studies</Text>
    {caseStudies.map((props, idx) => (
      <CaseStudyCard key={idx} {...props} />
    ))}
  </Section>
);

export default CaseStudySection;
