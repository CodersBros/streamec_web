"use client";

import { Text } from '@/styles/typography';
import { variables } from '@/styles/variables';
import React from 'react';
import styled from 'styled-components';


export interface HeroIconActionProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  width?: number;
  accentBg?: string;
  shadow?: string;
  blurPx?: number;
}

const Wrapper = styled.button<{ $width: number; $accentBg: string; $shadow: string; $blurPx: number; }>`
  all: unset;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ $width }) => $width}px;
  border-radius: 30px;
  background: ${({ $accentBg }) => $accentBg};
  border: 1px solid ${variables.colors.accent};
  box-shadow: 
    0px 3px 8px 0px #FF00001A,
    0px 14px 14px 0px #FF000017,
    0px 31px 19px 0px #FF00000D,
    0px 56px 22px 0px #FF000003,
    0px 87px 24px 0px #FF000000;
  backdrop-filter: ${({ $blurPx }) => `blur(${$blurPx}px)`};
  color: #FFD4D4;
  cursor: pointer;
  padding: 10px ${variables.spacing['lg-24']};
  gap: 12px;
  transition: transform .25s ease, box-shadow .25s ease;
  &:hover { transform: translateY(-2px); }
  &:active { transform: translateY(0); }
  &:focus-visible { outline: 2px solid var(--color-accent, #ff5252); outline-offset: 3px; }
`;

const Label = styled(Text).attrs({ $variant: 'label/sm' })`
  color: #FFD4D4;
  font-family: Consolas, Manrope, monospace;
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: -0.32px;
  line-height: 16px;
`;

export const HeroIconAction: React.FC<HeroIconActionProps> = ({
  label,
  width = 235,
  accentBg = '#FF424380',
  shadow = '',
  blurPx = 42,
  ...rest
}) => {
  return (
    <Wrapper
      aria-label={label}
      $width={width}
      $accentBg={accentBg}
      $shadow={shadow}
      $blurPx={blurPx}
      {...rest}
    >
      <Label $variant="label/sm">{label}</Label>
    </Wrapper>
  );
};

export default HeroIconAction;
