"use client";

import type { TypographyAlias } from '@/styles/typography';
import { typographyCss } from '@/styles/typography';
import React from 'react';
import styled, { css } from 'styled-components';
import { variables } from '../../styles/variables';
import ArrowUpRight from '../assets/ArrowUpRight';


export type ButtonOutlinedLightSize = 'md' | 'sm';
export type ButtonOutlinedLightVariant = 'dark' | 'light';

export interface ButtonOutlinedLightProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  icon?: React.ReactNode;
  withIcon?: boolean; 
  size?: ButtonOutlinedLightSize;
  variant?: ButtonOutlinedLightVariant;
  accent?: string;
  width?: number;
  withBackdropFilter?: boolean;
  url?: string;
}



const sizeTokens: Record<ButtonOutlinedLightSize, { padY: number; padL: number; padR: number; iconBox: number; gap: number; fontVariant: TypographyAlias; height: number; }> = {
  md: { padY: 0, padL: 24, padR: 0, iconBox: 48, gap: 10, fontVariant: 'body/md', height: 60 },
  sm: { padY: 4, padL: 20, padR: 4, iconBox: 40, gap: 8, fontVariant: 'body/sm', height: 60 },
};

const variantTokens: Record<ButtonOutlinedLightVariant, { borderColor: string; textColor: string; }> = {
  dark: { borderColor: variables.colors.black, textColor: variables.colors.black },
  light: { borderColor: variables.colors.white, textColor: variables.colors.white },
};

const rootStyles = ({ $size, $variant, $width, $withBackdropFilter, $hasIcon }: {
  $size: ButtonOutlinedLightSize;
  $variant: ButtonOutlinedLightVariant;
  $width?: number;
  $withBackdropFilter?: boolean;
  $hasIcon?: boolean;
}) => {
  const sizeT = sizeTokens[$size];
  const variantT = variantTokens[$variant];
  const rightPadding = $hasIcon ? sizeT.padR : sizeT.padL;
  return css`
    padding: ${sizeT.padY}px ${rightPadding}px ${sizeT.padY}px ${sizeT.padL}px;
    gap: ${sizeT.gap}px;
    height: ${sizeT.height}px;
    ${$width ? `width: ${$width}px;` : ''}
    border-color: ${variantT.borderColor};
    color: ${variantT.textColor};
    ${$withBackdropFilter ? 'backdrop-filter: blur(42px);' : ''}
  `;
};

const Root = styled.button<{
  $size: ButtonOutlinedLightSize;
  $variant: ButtonOutlinedLightVariant;
  $width?: number;
  $withBackdropFilter?: boolean;
  $hasIcon?: boolean;
}>`
  all: unset;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  position: relative;
  border: 1px solid;
  border-radius: 30px;
  background: transparent;
  cursor: pointer;
  ${rootStyles};
  transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
  &:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
  }
  &:hover {
    background: ${({ $variant }) =>
    $variant === 'light'
      ? 'rgba(255, 255, 255, 0.06)'
      : 'rgba(0, 0, 0, 0.06)'};
  }
  &:active {
    background: ${({ $variant }) =>
    $variant === 'light'
      ? 'rgba(255, 255, 255, 0.12)'
      : 'rgba(0, 0, 0, 0.12)'};
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
  color: ${variables.colors.white};
`;

const Label = styled.span<{ $variant: TypographyAlias }>`
  ${({ $variant }) => typographyCss($variant)}
  white-space: nowrap;
`;

export const ButtonOutlinedLight: React.FC<ButtonOutlinedLightProps> = ({
  label = 'Meet our Team',
  icon,
  withIcon,
  size = 'md',
  variant = 'light',
  accent,
  width,
  withBackdropFilter = false,
  url,
  className,
  onClick,
  ...rest
}) => {
  const fontVariant = sizeTokens[size].fontVariant;

  const defaultWithIcon = variant === 'dark';
  const shouldShowIcon = withIcon !== undefined ? withIcon : defaultWithIcon;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
    onClick?.(e);
  };

  return (
    <Root
      className={className}
      $size={size}
      $variant={variant}
      $width={width}
      $withBackdropFilter={withBackdropFilter}
      $hasIcon={shouldShowIcon}
      onClick={handleClick}
      {...rest}
    >
      <Label $variant={fontVariant}>{label}</Label>
      {shouldShowIcon && (
        <IconPill $size={size} $accent={accent}>
          {icon ? (
            icon
          ) : (
            <ArrowUpRight
              size={20}
              color={variant === 'light' ? variables.colors.white : variables.colors.black}
            />
          )}
        </IconPill>
      )}
    </Root>
  );
};

export default ButtonOutlinedLight;