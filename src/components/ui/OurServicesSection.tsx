"use client";

import React from 'react';
import styled from 'styled-components';
import ServiceCard, { IconName, ImageName } from '@/components/ui/ServiceCard';
import { variables } from '@/styles/variables';

export interface ServiceSectionItem {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;         // jeśli chcemy całkowicie custom
  iconName?: IconName;            // nazwa ikony z public/icons
  imageName?: ImageName;          // nazwa zdjęcia z public/images
  showButton?: boolean;           // czy pokazać przycisk
  buttonText?: string;            // tekst przycisku
  buttonUrl?: string;             // URL do przekierowania
  buttonAction?: string;          // akcja do wykonania (np. 'pin2', 'set4play')
}

export interface OurServicesSectionProps {
  heading?: string; // Domyślnie "Our services"
  items: ServiceSectionItem[];
  columns?: number; // Sugestia ilości kolumn (desktop). Używane tylko do wyliczenia basis.
  maxWidth?: number; // Domyślny max width sekcji (np. 1202)
  className?: string;
  style?: React.CSSProperties;
  renderItem?: (item: ServiceSectionItem) => React.ReactNode; // Custom renderer jeśli potrzebny.
}

const SectionOuter = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 60px; /* Odwzorowanie paddingów z wycinka */
  box-sizing: border-box;
`;

const Heading = styled.h2`
  font-size: ${variables.typography['heading/xl'].fontSize};
  font-weight: ${variables.typography['heading/xl'].fontWeight};
  font-family: ${variables.typography['heading/xl'].fontFamily};
  line-height: ${variables.typography['heading/xl'].lineHeight};
  color: var(--color-text);
  margin: 0;
`;

// Flex siatka kart: wrap + gap. Używamy min() aby nie przekroczyć maxWidth.
const CardsWrap = styled.div<{ $maxWidth: number; $columns: number }>`
  display: flex;
  flex-wrap: wrap;
  gap: 32px; /* itemSpacing 32 w sekcji */
  max-width: ${({ $maxWidth }) => $maxWidth}px;
  width: 100%;
  /* Obliczenie szerokości bazowej karty: (dostępna szerokość - gap*(n-1)) / n */
  & > * {
    flex: 1 1 calc((100% - (32px * (${({ $columns }) => $columns} - 1))) / ${({ $columns }) => $columns});
    min-width: 260px; /* bezpieczeństwo łamania na mniejszych ekranach */
  }

  @media (max-width: 1100px) {
    & > * { flex: 1 1 calc((100% - 32px) / 2); }
  }
  @media (max-width: 680px) {
    & > * { flex: 1 1 100%; }
  }
`;

/**
 * Frame190Section
 * Założenia:
 * - Alias typografii heading/xl dla nagłówka.
 * - Karty korzystają z istniejącego Frame167Card.
 * - columns to tylko wskazówka (domyślnie 3) – elastycznie dopasowuje się do szerokości.
 * Ryzyka:
 * - Jeżeli Frame167Card zmieni padding/gap, może wpłynąć na wizualny rytm.
 * - Alias ikony może wskazać na placeholder jeśli brak finalnej grafiki.
 * Alternatywy:
 * - CSS grid (grid-template-columns: repeat(auto-fill,minmax())) zamiast flex – można łatwo zamienić.
 */
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