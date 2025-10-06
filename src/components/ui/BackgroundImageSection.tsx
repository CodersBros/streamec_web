import { Text } from '@/styles/typography';
import { variables } from '@/styles/variables';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

export interface BackgroundImageSectionProps {
  backgroundSrc: string;
  alt?: string;
  heading?: string;
  description?: string;
  actions?: React.ReactNode;
  overlayColor?: string;
  minHeight?: number;
  maxContentWidth?: number;
  priority?: boolean;
  quality?: number;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const SectionOuter = styled.section<{ $minHeight: number }>`
  position: relative;
  width: 100%;
  min-height: ${({ $minHeight }) => $minHeight}px;
  overflow: hidden;
  border-radius: ${variables.spacing['md-16']};
`;

const Background = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  > span,
  > img {
    position: absolute !important;
    inset: 0;
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
    object-position: center;
  }
`;

const Overlay = styled.div<{ $overlayColor: string }>`
  position: absolute;
  inset: 0;
  background: ${({ $overlayColor }) => $overlayColor};
  z-index: 1;
`;

const Content = styled.div<{ $maxContentWidth: number }>`
  position: relative;
  z-index: 2;
  margin: 0 auto;
  padding: 60px ${variables.spacing['global-horizontal-mobile']};
  max-width: ${({ $maxContentWidth }) => $maxContentWidth}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  gap: ${variables.spacing['lg-24']};
  color: ${variables.colors.white};

  @media ${variables.media.tablet} {
    padding: 60px ${variables.spacing['global-horizontal-mobile']};
  }
  @media ${variables.media.tabletXL} {
    padding: 60px ${variables.spacing['global-horizontal-desktop']};
  }
`;

const Description = styled(Text)`
  color: inherit;
  margin: 0;
  max-width: 800px;
`;

const ActionsSlot = styled.div`
  display: flex;
  gap: ${variables.spacing['sm-8']};
  flex-wrap: wrap;
  justify-content: center;
`;

const ChildrenSlot = styled.div`
  width: 100%;
`;

const BackgroundImageSection: React.FC<BackgroundImageSectionProps> = ({
  backgroundSrc,
  alt = '',
  heading,
  description,
  actions,
  overlayColor = 'rgba(0,0,0,0.5)',
  minHeight = 420,
  maxContentWidth = 1200,
  priority = false,
  quality,
  className,
  style,
  children,
}) => {
  return (
    <SectionOuter className={className} style={style} $minHeight={minHeight}>
      <Background>
        <Image
          src={backgroundSrc}
          alt={alt}
          fill
          priority={priority}
          quality={quality}
          sizes='100vw'
        />
      </Background>
      <Overlay $overlayColor={overlayColor} />
      <Content $maxContentWidth={maxContentWidth}>
        {heading && (
          <Text as='h2' $variant='subheading/lg'>
            {heading}
          </Text>
        )}
        {description && (
          <Description $variant='body/md'>{description}</Description>
        )}
        {actions && <ActionsSlot>{actions}</ActionsSlot>}
        {children && <ChildrenSlot>{children}</ChildrenSlot>}
      </Content>
    </SectionOuter>
  );
};

export default BackgroundImageSection;
