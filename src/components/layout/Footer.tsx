'use client';

import React from 'react';
import styled, { css } from 'styled-components';
import { FlexWrapper, Wrapper } from '../../styles/index.styled';
import { variables } from '../../styles/variables';
import LowerFooter from './Footer/LowerFooter';
import UpperFooter from './Footer/UpperFooter';

export const responsiveContainerPadding = css`
  padding-inline: max(calc((100% - 1440px) / 2), 0px);
`;
const FooterWrapper = styled.footer`
  ${responsiveContainerPadding}
  width: 100%;
  min-height: 120px;
  background: ${variables.colors.black};
`;

const Footer: React.FC = () => (
  <FooterWrapper id='contact'>
    <Wrapper $tabletXLPadding='60px 120px' $tabletPadding='60px 60px' $mobilePadding={`60px ${variables.spacing['global-horizontal-mobile']}`}>
      <FlexWrapper
        $mobileDirection='column'
        $mobileItems='stretch'
        $mobileGap={variables.spacing['xl-32']}
      >
        <UpperFooter />
        <LowerFooter />
      </FlexWrapper>
    </Wrapper>
  </FooterWrapper>
);

export default Footer;
