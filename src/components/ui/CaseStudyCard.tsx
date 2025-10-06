import { Text } from '@/styles/typography';
import React from 'react';
import styled from 'styled-components';
import { variables } from '../../styles/variables';

const Card = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${variables.colors.footerBg};
  border-radius: 16px;
  padding: 28px 32px;
  gap: 25px;
  @media ${variables.media.tabletXL} {
    flex-direction: row;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  flex-shrink: 0;

  @media ${variables.media.tablet} {
    width: 100%;
    height: 100%;
    object-fit: fill;
    flex-shrink: 1;
  }
   @media ${variables.media.tabletXL} {
    width: 337px;
    height: 229px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`;

type CaseStudyCardProps = {
  imageSrc: string;
  title: string;
  description1: string;
  description2: string;
};

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  imageSrc,
  title,
  description1,
  description2,
}) => (
  <Card>
    <Image src={imageSrc} alt={title} />
    <Content>
      <Text $variant='heading/md' style={{ color: variables.colors.black }}>
        {title}
      </Text>
      <Text $variant='body/md' style={{ color: variables.colors.gray808 }}>
        {description1}
      </Text>
      <Text $variant='body/md' style={{ color: variables.colors.gray808 }}>
        {description2}
      </Text>
    </Content>
  </Card>
);

export default CaseStudyCard;
