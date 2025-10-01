"use client";
import { Text } from '@/styles/typography';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { variables } from '../../styles/variables';




interface HeroSectionProps {
  backgroundImage: string;
  label: string;
  overlayColor?: string;
  icon?: React.ReactNode;
  actions?: React.ReactNode;
  imageAlt?: string;
  priority?: boolean;
  quality?: number;
}

const SectionWrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 480px;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const Background = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 0;
  > span, > img { 
    position: absolute !important;
    inset: 0;
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
    object-position: center;
  }
`;

const Overlay = styled.div<{ $overlayColor?: string }>`
  position: absolute;
  inset: 0;
  background: ${({ $overlayColor }) => $overlayColor || 'rgba(0,0,0,0.5)'};
  z-index: 1;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${variables.spacing['lg-24']};
`;


const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
 
`;

const Label = styled(Text)`
  color: ${variables.colors.white};
  text-align: center;
  margin-bottom: ${variables.spacing['md-16']};
`;

const ActionsSlot = styled.div`
  margin-top: ${variables.spacing['md-16']};
  display: flex;
  gap: ${variables.spacing['sm-8']};
  position: relative;
  z-index: 2;
`;


const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage,
  label,
  overlayColor = 'rgba(0,0,0,0.5)',
  icon,
  actions,
  imageAlt = '',
  priority = false,
  quality,
}) => {
  return (
    <SectionWrapper>
      <Background>
        <Image
          src={backgroundImage}
          alt={imageAlt}
          fill
          priority={priority}
          quality={quality}
          sizes="100vw"
        />
      </Background>
      <Overlay $overlayColor={overlayColor} />
      <Content>
        {actions && <ActionsSlot>{actions}</ActionsSlot>}
        {icon && <IconWrapper>{icon}</IconWrapper>}
        <Label variant="heading/xxl">{label}</Label>
      </Content>
    </SectionWrapper>
  );
};

export default HeroSection;
