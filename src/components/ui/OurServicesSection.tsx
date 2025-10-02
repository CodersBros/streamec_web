"use client";

import ServiceCard, { IconName, ImageName } from '@/components/ui/ServiceCard';
import { variables } from '@/styles/variables';
import React from 'react';
import styled from 'styled-components';

export interface ServiceSectionItem {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  iconName?: IconName;
  imageName?: ImageName;
  showButton?: boolean;
  buttonText?: string;
  buttonUrl?: string;
  buttonAction?: string;
}

export interface OurServicesSectionProps {
  heading?: string; 
  items: ServiceSectionItem[];
  columns?: number;
  maxWidth?: number; 
  className?: string;
  style?: React.CSSProperties;
  renderItem?: (item: ServiceSectionItem) => React.ReactNode;
}

const SectionOuter = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${variables.spacing['lg-24']};
  box-sizing: border-box;
  padding: 0 ${variables.spacing['global-horizontal-desktop']};
  max-width: 1440px;
  margin: 0 auto;
`;

const Heading = styled.h2`
  font-size: ${variables.typography['heading/xl'].fontSize};
  font-weight: ${variables.typography['heading/xl'].fontWeight};
  font-family: ${variables.typography['heading/xl'].fontFamily};
  line-height: ${variables.typography['heading/xl'].lineHeight};
  color: var(--color-text);
  margin: 0;
`;

const CardsWrap = styled.div<{ $maxWidth: number; $columns: number }>`
  display: flex;
  flex-wrap: wrap;
  gap: 32px; /* itemSpacing 32 w sekcji */
  max-width: ${({ $maxWidth }) => $maxWidth}px;
  width: 100%;
 
  & > * {
    flex: 1 1 calc((100% - (32px * (${({ $columns }) => $columns} - 1))) / ${({ $columns }) => $columns});
    min-width: 260px; 
  }

  @media (max-width: 1100px) {
    & > * { flex: 1 1 calc((100% - 32px) / 2); }
  }
  @media (max-width: 680px) {
    & > * { flex: 1 1 100%; }
  }
`;


const OurServicesSection: React.FC<OurServicesSectionProps> = ({
  heading = 'Our services',
  items,
  columns = 3,
  maxWidth = 1202,
  className,
  style,
  renderItem,
}) => {
  return (
    <SectionOuter className={className} style={style}>
      {heading ? <Heading>{heading}</Heading> : null}
      <CardsWrap $maxWidth={maxWidth} $columns={columns}>
        {items.map(item => (
          <React.Fragment key={item.id}>
            {renderItem ? renderItem(item) : (
              <ServiceCard
                title={item.title}
                description={item.description}
                icon={item.icon}
                iconName={item.iconName}
                imageName={item.imageName}
                showButton={item.showButton}
                buttonText={item.buttonText}
                buttonUrl={item.buttonUrl}
                buttonAction={item.buttonAction}
              />
            )}
          </React.Fragment>
        ))}
      </CardsWrap>
    </SectionOuter>
  );
};

export default OurServicesSection;