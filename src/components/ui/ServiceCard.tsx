'use client';

import { typographyCss } from '@/styles/typography';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { variables } from '../../styles/variables';
import ButtonOutlinedLight from './ButtonOutlinedLight';

// Union type dla dostępnych ikon w public/icons
export type IconName =
  | 'Arrow Sync'
  | 'Arrow'
  | 'ArrowUpRight'
  | 'Music Note'
  | 'People'
  | 'Person Voice';

// Union type dla dostępnych obrazów w public/images
export type ImageName = 'Pin2Logo.svg' | 'Set4PlayLogo.svg';

export interface ServiceCardProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  iconName?: IconName;
  imageName?: ImageName;
  showButton?: boolean; // Czy pokazać przycisk
  buttonText?: string; // Tekst przycisku
  buttonUrl?: string; // URL do przekierowania
  buttonAction?: string; // Akcja do wykonania
  className?: string;
  style?: React.CSSProperties;
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 28px 32px;
  gap: 25px;
  border-radius: 16px;
  background: ${variables.colors.footerBg};
  box-sizing: border-box;
`;

const IconBox = styled.div`
  width: 66px;
  height: 66px;
  border-radius: 8px;
  background: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InnerIcon = styled.div`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DefaultIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  color: var(--color-text);
`;

const TextStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const TitleEl = styled.h3`
  ${typographyCss('heading/lg')}
  color: var(--color-text);
  margin: 0;
`;

const DescEl = styled.p`
  ${typographyCss('body/sm')}
  color: var(--color-text-subtle);
  margin: 0;
`;

const ButtonWrapper = styled.div`
  margin-top: 16px;
`;

const ActionButton = styled.button`
  background: var(--color-accent, #be1011);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background: color-mix(in srgb, var(--color-accent, #be1011) 90%, black);
  }

  &:active {
    transform: translateY(1px);
  }
`;

const ServiceCard: React.FC<ServiceCardProps> = ({
  title = 'Set4Play',
  description = 'Distribute training concepts and support group instructors with complete admin tools.',
  icon,
  iconName,
  imageName,
  showButton = false,
  buttonText = 'Learn More',
  buttonUrl,
  buttonAction,
  className,
  style,
}) => {
  const handleButtonClick = () => {
    if (buttonUrl) {
      // Przekieruj do URL
      window.open(buttonUrl, '_blank');
    } else if (buttonAction) {
      // Wykonaj akcję na podstawie buttonAction
      switch (buttonAction) {
        case 'pin2':
          console.log('Navigate to Pin2 Enterprise');
          break;
        case 'set4play':
          console.log('Navigate to Set4Play');
          break;
        default:
          console.log(`Action: ${buttonAction}`);
      }
    }
  };

  const renderIcon = () => {
    if (icon) return icon;

    // Priorytet: imageName > iconName > fallback
    if (imageName) {
      return (
        <DefaultIconWrapper>
          <Image
            src={`/logos/${imageName}`}
            alt={`${imageName} image`}
            width={118}
            height={40}
            style={{ objectFit: 'cover', borderRadius: '12px' }}
          />
        </DefaultIconWrapper>
      );
    }

    const iconPath = `/icons/${iconName || 'People'}.svg`;

    return (
      <DefaultIconWrapper>
        <Image
          src={iconPath}
          alt={`${iconName || 'People'} icon`}
          width={22}
          height={22}
        />
      </DefaultIconWrapper>
    );
  };

  return (
    <Card className={className} style={style}>
      <IconBox>
        <InnerIcon>{renderIcon()}</InnerIcon>
      </IconBox>
      <TextStack>
        <TitleEl>{title}</TitleEl>
        <DescEl>{description}</DescEl>
        {showButton && (
          <ButtonWrapper>
            <ButtonOutlinedLight
              onClick={handleButtonClick}
              variant="dark"
              width={210}
              withBackdropFilter={true}
              label='Read more'
              withIcon={true}

            >
              {buttonText}
            </ButtonOutlinedLight>
          </ButtonWrapper>
        )}
      </TextStack>
    </Card>
  );
};

export default ServiceCard;
