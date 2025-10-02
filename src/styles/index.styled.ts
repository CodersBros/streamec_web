import styled from 'styled-components';
import { variables } from './variables';

export const Wrapper = styled.div<{
  $mobilePadding?: string;
  $mobileWidth?: string;
  $mobileMaxWidth?: string;
  $mobileMargin?: string;
  $mobileBasis?: string;
  $mobileHeight?: string;
  $tabletWidth?: string;
  $tabletMaxWidth?: string;
  $tabletMargin?: string;
  $tabletBasis?: string;
  $tabletPadding?: string;
  $tabletHeight?: string;
  $tabletXLWidth?: string;
  $tabletXLMaxWidth?: string;
  $tabletXLMargin?: string;
  $tabletXLBasis?: string;
  $tabletXLPadding?: string;
  $tabletXLHeight?: string;
  $laptopWidth?: string;
  $laptopMaxWidth?: string;
  $laptopMargin?: string;
  $laptopPadding?: string;
  $laptoptMaxWidth?: string;
  $laptopBasis?: string;
  $laptopHeight?: string;
  $desktopWidth?: string;
  $desktopMaxWidth?: string;
  $desktopMargin?: string;
  $desktopPadding?: string;
  $desktoptMaxWidth?: string;
  $desktopBasis?: string;
  $desktopHeight?: string;
}>`
  position: relative;
  padding: ${({ $mobilePadding }) => $mobilePadding};
  width: ${({ $mobileWidth }) => $mobileWidth};
  height: ${({ $mobileHeight }) => $mobileHeight};
  max-width: ${({ $mobileMaxWidth }) => $mobileMaxWidth};
  margin: ${({ $mobileMargin }) => $mobileMargin};
  flex-basis: ${({ $mobileBasis }) => $mobileBasis};

  @media ${variables.media.tablet} {
    width: ${({ $tabletWidth }) => $tabletWidth};
    height: ${({ $tabletHeight }) => $tabletHeight};
    max-width: ${({ $tabletMaxWidth }) => $tabletMaxWidth};
    margin: ${({ $tabletMargin }) => $tabletMargin};
    padding: ${({ $tabletPadding }) => $tabletPadding};
    flex-basis: ${({ $tabletBasis }) => $tabletBasis};
  }
  @media ${variables.media.tabletXL} {
    width: ${({ $tabletXLWidth }) => $tabletXLWidth};
    height: ${({ $tabletXLHeight }) => $tabletXLHeight};
    max-width: ${({ $tabletXLMaxWidth }) => $tabletXLMaxWidth};
    margin: ${({ $tabletXLMargin }) => $tabletXLMargin};
    padding: ${({ $tabletXLPadding }) => $tabletXLPadding};
    flex-basis: ${({ $tabletXLBasis }) => $tabletXLBasis};
  }
  @media ${variables.media.laptop} {
    width: ${({ $laptopWidth }) => $laptopWidth};
    height: ${({ $laptopHeight }) => $laptopHeight};
    max-width: ${({ $laptoptMaxWidth }) => $laptoptMaxWidth};
    margin: ${({ $laptopMargin }) => $laptopMargin};
    padding: ${({ $laptopPadding }) => $laptopPadding};
    flex-basis: ${({ $laptopBasis }) => $laptopBasis};
  }
  @media ${variables.media.desktop} {
    width: ${({ $desktopWidth }) => $desktopWidth};
    height: ${({ $desktopHeight }) => $desktopHeight};
    max-width: ${({ $desktoptMaxWidth }) => $desktoptMaxWidth};
    margin: ${({ $desktopMargin }) => $desktopMargin};
    padding: ${({ $desktopPadding }) => $desktopPadding};
    flex-basis: ${({ $desktopBasis }) => $desktopBasis};
  }
`;

export const FlexWrapper = styled.div<{
  $desktopDirection?: string;
  $desktopContent?: string;
  $desktopItems?: string;
  $desktopGap?: string;
  $desktopWrap?: string;
  $desktopBasis?: string;
  $laptopDirection?: string;
  $laptopContent?: string;
  $laptopItems?: string;
  $laptopGap?: string;
  $laptopWrap?: string;
  $laptopBasis?: string;
  $tabletXLDirection?: string;
  $tabletXLContent?: string;
  $tabletXLItems?: string;
  $tabletXLGap?: string;
  $tabletXLWrap?: string;
  $tabletXLBasis?: string;
  $tabletDirection?: string;
  $tabletContent?: string;
  $tabletItems?: string;
  $tabletGap?: string;
  $tabletWrap?: string;
  $tabletBasis?: string;
  $mobileDirection?: string;
  $mobileContent?: string;
  $mobileItems?: string;
  $mobileGap?: string;
  $mobileWrap?: string;
  $mobileBasis?: string;
}>`
  display: flex;
  flex-direction: ${({ $mobileDirection }) => $mobileDirection};
  justify-content: ${({ $mobileContent }) => $mobileContent};
  align-items: ${({ $mobileItems }) => $mobileItems};
  gap: ${({ $mobileGap }) => $mobileGap};
  flex-wrap: ${({ $mobileWrap }) => $mobileWrap};
  flex-basis: ${({ $mobileBasis }) => $mobileBasis};

  @media ${variables.media.tablet} {
    flex-direction: ${({ $tabletDirection }) => $tabletDirection};
    justify-content: ${({ $tabletContent }) => $tabletContent};
    align-items: ${({ $tabletItems }) => $tabletItems};
    gap: ${({ $tabletGap }) => $tabletGap};
    flex-wrap: ${({ $tabletWrap }) => $tabletWrap};
    flex-basis: ${({ $tabletBasis }) => $tabletBasis};
  }

  @media ${variables.media.tabletXL} {
    flex-direction: ${({ $tabletXLDirection }) => $tabletXLDirection};
    justify-content: ${({ $tabletXLContent }) => $tabletXLContent};
    align-items: ${({ $tabletXLItems }) => $tabletXLItems};
    gap: ${({ $tabletXLGap }) => $tabletXLGap};
    flex-wrap: ${({ $tabletXLWrap }) => $tabletXLWrap};
    flex-basis: ${({ $tabletXLBasis }) => $tabletXLBasis};
  }
  @media ${variables.media.laptop} {
    flex-direction: ${({ $laptopDirection }) => $laptopDirection};
    justify-content: ${({ $laptopContent }) => $laptopContent};
    align-items: ${({ $laptopItems }) => $laptopItems};
    gap: ${({ $laptopGap }) => $laptopGap};
    flex-wrap: ${({ $laptopWrap }) => $laptopWrap};
    flex-basis: ${({ $laptopBasis }) => $laptopBasis};
  }
`;
