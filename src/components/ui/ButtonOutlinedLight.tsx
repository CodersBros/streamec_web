"use client";

import { typographyCss } from '@/styles/typography';
import Image from 'next/image';
import React from 'react';
import styled, { css } from 'styled-components';
import type { TypographyAlias } from '@/styles/typography';


export type ButtonOutlinedLightSize = 'md' | 'sm';

export interface ButtonOutlinedLightProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  icon?: React.ReactNode; // custom override ikony strzałki
  withIcon?: boolean; // szybkie wyłączenie ikony
  size?: ButtonOutlinedLightSize;
  accent?: string; // override accent color pigułki
}



const sizeTokens: Record<ButtonOutlinedLightSize, { padY: number; padL: number; padR: number; iconBox: number; gap: number; fontVariant: TypographyAlias; }> = {
  md: { padY: 6, padL: 24, padR: 4, iconBox: 48, gap: 10, fontVariant: 'body/md' },
  sm: { padY: 4, padL: 20, padR: 4, iconBox: 40, gap: 8, fontVariant: 'body/sm' },
};

const rootStyles = ({ $size }: { $size: ButtonOutlinedLightSize }) => {
  const t = sizeTokens[$size];
  return css`
    padding: ${t.padY}px ${t.padR}px ${t.padY}px ${t.padL}px;
    gap: ${t.gap}px;
  `;
};

const Root = styled.button<{ $size: ButtonOutlinedLightSize }>`
  all: unset;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  position: relative;
  border: 1px solid var(--color-text-inverse);
  border-radius: 30px;
  background: transparent;
  cursor: pointer;
  ${rootStyles};
  transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
  color: var(--color-text-inverse);
  &:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
  }
  &:hover {
    background: rgba(255,255,255,0.06);
  }
  &:active {
    background: rgba(255,255,255,0.12);
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const IconPill = styled.span<{ $size: ButtonOutlinedLightSize; $accent?: string }>`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  background: ${({ $accent }) => $accent || 'var(--color-accent)'};
  backdrop-filter: blur(42px);
  ${({ $size }) => css`width: ${sizeTokens[$size].iconBox}px; height: ${sizeTokens[$size].iconBox}px;`}
  color: var(--color-text-inverse);
`;

const Label = styled.span<{ $variant: TypographyAlias }>`
  ${({ $variant }) => typographyCss($variant)}
  color: var(--color-text-inverse);
  white-space: nowrap;
`;

export const ButtonOutlinedLight: React.FC<ButtonOutlinedLightProps> = ({
  label = 'Meet our Team',
  icon,
  withIcon = true,
  size = 'md',
  accent,
  className,
  ...rest
}) => {
  const fontVariant = sizeTokens[size].fontVariant;
  return (
    <Root className={className} $size={size} {...rest}>
      <Label $variant={fontVariant}>{label}</Label>
      {withIcon && (
        <IconPill $size={size} $accent={accent}>
          {icon || (
            <Image
              src="/icons/ArrowUpRight.svg"
              alt="Arrow up right"
              width={20}
              height={20}
              aria-hidden
            />
          )}
        </IconPill>
      )}
    </Root>
  );
};

export default ButtonOutlinedLight;