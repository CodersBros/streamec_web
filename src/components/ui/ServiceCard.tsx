'use client';

import { typographyCss } from '@/styles/typography';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { variables } from '../../styles/variables';
import ButtonOutlinedLight from './ButtonOutlinedLight';

export type IconName =
  | 'Arrow Sync'
  | 'Arrow'
  | 'ArrowUpRight'
  | 'Music Note'
  | 'People'
  | 'Person Voice';

export type ImageName = 'Pin2Logo.svg' | 'Set4PlayLogo.svg';

export interface ServiceCardProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  iconName?: IconName;
  imageName?: ImageName;
  showButton?: boolean;
  buttonText?: string;
  buttonUrl?: string;
  buttonAction?: string;
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
  background: ${variables.colors.white};
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
  justify-content: flex-start;
  width: 100%;
  
  
`;

const TextStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1; 
  justify-content: space-between;
`;

const TitleEl = styled.h3`
  ${typographyCss('heading/card')}
  color: ${variables.colors.black};
  margin: 0;
  
  /* Minimalna wysokość dla 2 linii - wyrównuje karty */
  min-height: 2.4em; /* Zakładam line-height 1.2, więc 2 linie = 2.4em */

  /* Dynamiczne dostosowanie na podstawie liczby linii */
  &[data-lines="3"],
  &[data-lines="4"] {
    margin-bottom: 4px;
  }
`;

const DescEl = styled.p`
  ${typographyCss('body/sm')}
  color: var(--color-text-subtle);
  margin: 0;
  /* Minimalna wysokość dla 3 linii opisu */
  min-height: 3.6em; /* Zakładam line-height 1.2, więc 3 linie = 3.6em */
`;

const ButtonWrapper = styled.div`
  margin-top: 16px;
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
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [lineCount, setLineCount] = useState(1);

  useEffect(() => {
    if (!titleRef.current) return;

    const calculateLines = () => {
      const element = titleRef.current!;
      const lineHeight = parseFloat(getComputedStyle(element).lineHeight);
      const height = element.offsetHeight;
      const lines = Math.round(height / lineHeight);
      setLineCount(lines);
    };

    calculateLines();
    window.addEventListener('resize', calculateLines);
    return () => window.removeEventListener('resize', calculateLines);
  }, [title]);

  const handleButtonClick = () => {
    if (buttonUrl) {
      window.open(buttonUrl, '_blank');
    } else if (buttonAction) {
      switch (buttonAction) {
        case 'pin2':
          break;
        case 'set4play':
          break;
        default:
      }
    }
  };

  const renderIcon = () => {
    if (icon) return icon;

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
      <IconBox>
        <InnerIcon>
        <Image
          src={iconPath}
          alt={`${iconName || 'People'} icon`}
          width={22}
          height={22}
        />
        </InnerIcon>
      </IconBox>
    );
  };

  return (
    <Card className={className} style={style}>
      {renderIcon()}
      <TextStack>
        <TitleEl ref={titleRef} data-lines={lineCount}>
          {title}
        </TitleEl>
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
              url={buttonUrl}
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
