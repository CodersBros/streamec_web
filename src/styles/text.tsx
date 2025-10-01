import React, { ElementType } from 'react';
import styled from 'styled-components';
import type { TypographyVariant } from './typography';
import { typographyVariantCss } from './typography';

// API publiczne: <Text variant="body/md" />
// Implementacja: transient prop ($variant) zapobiega przeciekaniu do DOM.
interface TextBaseProps {
  $variant: TypographyVariant;
}

export interface TextProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'color'> {
  variant: TypographyVariant;
  as?: ElementType;
}

const StyledText = styled.span<TextBaseProps>`
  ${({ $variant }) => typographyVariantCss($variant)}
`;

const Text: React.FC<TextProps> = ({ variant, children, ...rest }) => {
  return (
    <StyledText $variant={variant} {...rest}>
      {children}
    </StyledText>
  );
};

export default Text;
