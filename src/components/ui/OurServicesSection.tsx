'use client';

import ServiceCard, { IconName, ImageName } from '@/components/ui/ServiceCard';
import { Text } from '@/styles/index.client';
import { variables } from '@/styles/variables';
import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '../../styles/index.styled';

export interface ServiceSectionItem {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  iconName?: IconName;
  imageName?: ImageName;
  showButton?: boolean;
  buttonText?: string;
  url?: string;
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

const SectionOuter = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  gap: ${variables.spacing['lg-24']};
  box-sizing: border-box;
  max-width: 1440px;
  margin: 0 auto;
`;

const CardsWrap = styled.div<{ $maxWidth: number; $columns: number }>`
  display: flex;
  flex-wrap: wrap;
  gap: 32px; /* itemSpacing 32 w sekcji */
  max-width: ${({ $maxWidth }) => $maxWidth}px;
  width: 100%;

  & > * {
    flex: 1 1
      ${({ $columns }) =>
    `calc((100% - (32px * (${$columns} - 1))) / ${$columns})`};
    min-width: 260px;
  }

  @media (max-width: 1100px) {
    & > * {
      flex: 1 1 calc((100% - 32px) / 2);
    }
  }
  @media (max-width: 680px) {
    & > * {
      flex: 1 1 100%;
    }
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
    <SectionOuter
      $mobilePadding={`0 ${variables.spacing['global-horizontal-mobile']} `}
      $tabletXLPadding={`0 ${variables.spacing['global-horizontal-desktop']}`}
      style={style}
      $tabletPadding={`0 ${variables.spacing['global-horizontal-tablet']}`}
      className={className}
    >
      {heading ? (
        <Text as='h2' variant='subheading/lg'>
          {heading}
        </Text>
      ) : null}
      <CardsWrap $maxWidth={maxWidth} $columns={columns}>
        {items.map(item => (
          <React.Fragment key={item.id}>
            {renderItem ? (
              renderItem(item)
            ) : (
              <ServiceCard
                title={item.title}
                description={item.description}
                icon={item.icon}
                iconName={item.iconName}
                imageName={item.imageName}
                showButton={item.showButton}
                buttonText={item.buttonText}
                  buttonUrl={item.url}
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
