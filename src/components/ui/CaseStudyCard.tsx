import { Text } from '@/styles/typography';
import React from 'react';
import styled from 'styled-components';

const Card = styled.article`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: var(--surface-neutral, #f7f7f7);
  border-radius: 16px;
  padding: 28px 32px;
  gap: 25px;
`;

const Image = styled.img`
  width: 337px;
  height: 229px;
  border-radius: 8px;
  object-fit: cover;
  flex-shrink: 0;
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

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ imageSrc, title, description1, description2 }) => (
  <Card>
    <Image src={imageSrc} alt={title} />
    <Content>
      <Text variant="heading/md">{title}</Text>
      <Text variant="body/md" color="var(--text-secondary)">{description1}</Text>
      <Text variant="body/md" color="var(--text-secondary)">{description2}</Text>
    </Content>
  </Card>
);

export default CaseStudyCard;
