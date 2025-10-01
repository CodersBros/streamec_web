"use client";

import { TEAM_MEMBERS } from '@/data/team';
import { Text } from '@/styles/typography';
import React, { useState } from 'react';
import styled from 'styled-components';
import TeamCard from './TeamCard';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  background: var(--surface-alt, #f7f7f7);
  border-radius: 16px;
  padding: 32px;
`;

const FilterBar = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`;

const FilterButton = styled.button<{ $active: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 20px;
  border-radius: 20px;
  border: none;
  background: ${({ $active }) => $active ? 'var(--accent, #BE1011)' : 'var(--surface-alt, #f7f7f7)'};
  color: ${({ $active }) => $active ? 'var(--text-inverse, #fff)' : 'var(--text, #212121)'};
  font-family: 'Manrope', sans-serif;
  font-weight: 600;
  font-size: 15px;
  letter-spacing: -0.2px;
  cursor: pointer;
  box-shadow: ${({ $active }) => $active ? '0 4px 16px rgba(190,16,17,0.10)' : '0 2px 8px rgba(0,0,0,0.04)'};
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  outline: none;
  min-width: 64px;
  justify-content: center;
  text-align: center;
    &:hover, &:focus {
  background: ${({ $active }) => $active ? 'var(--accent, #BE1011)' : 'var(--surface-alt, #f7f7f7)'};
  color: ${({ $active }) => $active ? 'var(--text-inverse, #fff)' : 'var(--accent, #BE1011)'};
      box-shadow: 0 6px 20px rgba(190,16,17,0.12);
    }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 24px;
`;


const getTags = () => Array.from(new Set(TEAM_MEMBERS.map(m => m.tag)));

const TeamFilterSection: React.FC = () => {
  const [activeTag, setActiveTag] = useState<string>('ALL');
  const tags: string[] = ['ALL', ...getTags().filter((tag): tag is string => typeof tag === 'string')];
  const filtered = activeTag === 'ALL' ? TEAM_MEMBERS : TEAM_MEMBERS.filter(m => m.tag === activeTag);

  return (
    <Wrapper>
      <Text variant="heading/lg">Team</Text>
      <FilterBar>
        {tags.map(tag => (
          <FilterButton key={tag} $active={activeTag === tag} onClick={() => setActiveTag(tag || 'ALL')}>
            {tag}
          </FilterButton>
        ))}
      </FilterBar>
      <TeamGrid>
        {filtered.map(member => (
          <TeamCard key={member.id} {...member} />
        ))}
      </TeamGrid>
    </Wrapper>
  );
};

export default TeamFilterSection;
