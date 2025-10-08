'use client';

import { TEAM_MEMBERS } from '@/data/team';
import { Text } from '@/styles/index.client';
import React, { useState } from 'react';
import styled from 'styled-components';
import { typographyCss } from '../../styles';
import { FlexWrapper, Wrapper } from '../../styles/index.styled';
import { variables } from '../../styles/variables';
import Sparkle from '../assets/Sparkle';
import TeamCard from './TeamCard';

const SectionWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  gap: ${variables.spacing['lg-24']};
  background: ${variables.colors.footerBg};
  max-width: 1440px;
  margin: 0 auto;
`;
const TextWrapper = styled.div`
  border: 1px solid ${variables.colors.accent};
  padding: 10px ${variables.spacing['lg-24']};
  border-radius: 30px;
  max-width: 271px;
  margin: 0 auto 12px auto;
`;
const FilterBar = styled.div`
  display: flex;
  gap: ${variables.spacing['md-16']};
  margin-bottom: ${variables.spacing['lg-24']};
  justify-content: center;
`;

const FilterButton = styled.button<{ $active: boolean }>`
  ${typographyCss('tag/sm')}
  display: inline-flex;
  align-items: center;
  gap: ${variables.spacing['sm-8']};
  padding: ${variables.spacing['sm-8']} 20px;
  border-radius: 20px;
  border: none;
  background: ${({ $active }) =>
    $active ? variables.colors.accent : variables.colors.surfaceAlt};
  color: ${({ $active }) =>
  $active ? variables.colors.white : variables.colors.dark};
  font-weight: 600;
  letter-spacing: -0.2px;
  cursor: pointer;
  box-shadow: ${({ $active }) =>
    $active ? `0 4px 16px rgba(190,16,17,0.10)` : `0 2px 8px rgba(0,0,0,0.04)`};
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  outline: none;
  min-width: ${variables.spacing['xxxl-64']};
  justify-content: center;
  text-align: center;
  border: 1px solid
    ${({ $active }) =>
    $active ? 'transparent' : variables.colors.gray808};
  &:hover,
  &:focus {
    background: ${({ $active }) =>
  $active ? variables.colors.accent : variables.colors.surfaceAlt};
    color: ${({ $active }) =>
  $active ? variables.colors.white : variables.colors.accent};
    box-shadow: 0 6px 20px rgba(190, 16, 17, 0.12);
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: ${variables.spacing['lg-24']};
`;

const getTags = () => Array.from(new Set(TEAM_MEMBERS.map(m => m.tag)));

const TeamFilterSection: React.FC = () => {
  const [activeTag, setActiveTag] = useState<string>('ALL');
  const tags: string[] = [
    'ALL',
    ...getTags().filter((tag): tag is string => typeof tag === 'string'),
  ];
  const filtered =
    activeTag === 'ALL'
      ? TEAM_MEMBERS
      : TEAM_MEMBERS.filter(m => m.tag === activeTag);

  return (
    <SectionWrapper
      $mobilePadding={`0 ${variables.spacing['global-horizontal-mobile']} `}
      $tabletXLPadding={`0 ${variables.spacing['global-horizontal-desktop']}`}
      $tabletPadding={`0 ${variables.spacing['global-horizontal-tablet']}`}
    >
      <TextWrapper>
        <FlexWrapper
          $mobileItems='center'
          $mobileGap={variables.spacing['sm-8']}
        >
          <Sparkle color={variables.colors.accent} />{' '}
          <Text
            $variant={'label/md'}
            style={{ color: variables.colors.accent }}
          >
            PEOPLE BEHIND THE APP
          </Text>
        </FlexWrapper>
      </TextWrapper>
      <Text as='h2' $variant='heading/xl' style={{ textAlign: 'center' }}>
        Meet our Team
      </Text>
      <Wrapper $mobileMaxWidth='660px' $mobileMargin='0 auto'>
        <Text
          as='p'
          $variant={'body/md'}
          style={{
            fontSize: '20px',
            color: variables.colors.gray414,
            textAlign: 'center',
            letterSpacing: '-2%',
          }}
        >
          Behind every solution is a team of dedicated professionals — bringing
          expertise from across Europe to help our customers succeed.
        </Text>
      </Wrapper>
      <FilterBar>
        {tags.map(tag => (
          <FilterButton
            key={tag}
            $active={activeTag === tag}
            onClick={() => setActiveTag(tag || 'ALL')}
          >
            {tag}
          </FilterButton>
        ))}
      </FilterBar>
      <TeamGrid>
        {filtered.map(member => (
          <TeamCard key={member.id} {...member} />
        ))}
      </TeamGrid>
    </SectionWrapper>
  );
};

export default TeamFilterSection;
