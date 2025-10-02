"use client";

import Logo from '@/components/ui/Logo';
import { variables } from '@/styles/variables';
import styled, { css } from 'styled-components';
import HeaderNav from './HeaderNav.client';

export const responsiveContainerPadding = css`
  padding-inline:  max(calc((100% - 1440px) / 2), 0px);
  
`;

const HeaderRoot = styled.header`
    position: fixed;
    top: 0;
    z-index: 50;
    background: ${variables.colors.black};
    border-bottom: 1px solid rgba(0,0,0,0.08);
    width: 100%;
`;
const HeaderWrapper = styled.div`
${responsiveContainerPadding}
`
const Row = styled.div`

    display: flex;
    align-items: center;
    gap: 32px;
    padding: 12px 120px;
`;

const SkipLink = styled.a`
    position: absolute;
    left: -9999px;
    top: auto;
    &:focus {
        left: 8px;
        top: 8px;
  background: var(--color-accent, #6366f1);
        color: var(--color-text-inverse, #fff);
        padding: 4px 8px;
        border-radius: 4px;
    }
`;


const Header = () => (
    <HeaderRoot>
        <SkipLink href="#main">Przejdź do treści</SkipLink>
        <HeaderWrapper>
            <Row>
                <Logo width={183} height={64} alt="Streamec logo" />
            <HeaderNav />
            </Row> 
        </HeaderWrapper>

    </HeaderRoot>
);

export default Header;