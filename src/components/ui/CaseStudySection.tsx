"use client";

import React from 'react';
import styled from 'styled-components';
import { caseStudies } from '../../data/caseStudies';
import CaseStudyCard from './CaseStudyCard';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  background: transparent;
  padding: 0;
`;




const CaseStudySection: React.FC = () => (
  <Section>
    {caseStudies.map((props, idx) => (
      <CaseStudyCard key={idx} {...props} />
    ))}
  </Section>
);

export default CaseStudySection;
