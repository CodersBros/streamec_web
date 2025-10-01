"use client";

import styled from 'styled-components';
import Logo from '@/components/ui/Logo';
import HeaderNav from './HeaderNav.client';
import { variables } from '@/styles/variables';

const HeaderRoot = styled.header`
    position: sticky;
    top: 0;
    z-index: 50;
    background: ${variables.colors.black};
    border-bottom: 1px solid rgba(0,0,0,0.08);
    padding: 12px 24px;
`;

const Row = styled.div`
    display: flex;
    align-items: center;
    gap: 32px;
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
        <Row>
            <Logo width={96} height={26} alt="Streamec logo" />
            <HeaderNav />
        </Row>
    </HeaderRoot>
);

export default Header;