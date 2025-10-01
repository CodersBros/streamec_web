'use client';

import React from 'react';
import styled from 'styled-components';
import LowerFooter from './Footer/LowerFooter';
import UpperFooter from './Footer/UpperFooter';





const FooterWrapper = styled.footer`
    width: 100%;
    min-height: 120px;
    background: var(--footer-bg, #f8f8f8);
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-end;
    padding: 32px 0 0 0;
    gap: 0;
`;



const Footer: React.FC = () => (
    <FooterWrapper>
        <UpperFooter />
        <LowerFooter />
    </FooterWrapper>
);

export default Footer;