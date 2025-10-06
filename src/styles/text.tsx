import React, { ElementType } from 'react';
import styled, { css } from 'styled-components';
import type { TypographyVariant } from './typography';
import { typographyVariantCss } from './typography';
import { variables } from './variables';

interface TextBaseProps {
  $variant: TypographyVariant;
  $tabletVariant?: TypographyVariant;
  $laptopVariant?: TypographyVariant;
}

export interface TextProps extends Omit<React.HTMLAttributes<HTMLElement>, 'color'> {
  variant?: TypographyVariant;
  $variant?: TypographyVariant;
  tabletVariant?: TypographyVariant;
  $tabletVariant?: TypographyVariant;
  laptopVariant?: TypographyVariant;
  $laptopVariant?: TypographyVariant;
  as?: ElementType;
}

const StyledText = styled.span<TextBaseProps>(({ $variant, $tabletVariant, $laptopVariant }) => css`
  ${typographyVariantCss($variant)}

  ${$tabletVariant && css`
    @media ${variables.media.tablet} {
      ${typographyVariantCss($tabletVariant)}
    }
  `}
  
  ${$laptopVariant && css`
    @media ${variables.media.laptop} {
      ${typographyVariantCss($laptopVariant)}
    }
  `}
`);

const Text = React.forwardRef<HTMLElement, TextProps>(
  ({ variant, $variant, tabletVariant, $tabletVariant, laptopVariant, $laptopVariant, ...rest }, ref) => {
    const finalVariant = $variant || variant;

    if (!finalVariant) {
      console.warn('Text component: no variant provided, falling back to "body/md"');
    }

    return (
      <StyledText
        ref={ref as React.Ref<HTMLSpanElement>}
        $variant={finalVariant || 'body/md'}
        $tabletVariant={$tabletVariant || tabletVariant}
        $laptopVariant={$laptopVariant || laptopVariant}
        {...rest}
      />
    );
  }
);

Text.displayName = 'Text';

export default Text;
