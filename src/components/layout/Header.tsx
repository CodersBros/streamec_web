"use client";

import Logo from '@/components/ui/Logo';
import useMobileMenu from '@/hooks/useMobileMenu';
import { variables } from '@/styles/variables';
import styled, { css } from 'styled-components';
import HeaderNav from './HeaderNav.client';
import Burger from './TopMenu/Burger';

export const responsiveContainerPadding = css`
  padding-inline:  max(calc((100% - 1440px) / 2), 0px);
  
`;

const HeaderRoot = styled.header`
    position: fixed;
    top: 0;
    z-index: 100;
    background: ${variables.colors.black};
    border-bottom: 1px solid rgba(0,0,0,0.08);
    width: 100%;
    transition: transform 0.3s ease-in-out;
`;

const MobileMenu = styled.div<{ $isOpen: boolean }>`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 80%;
    max-width: 400px;
    background: ${variables.colors.black};
    z-index: 90;
    transform: ${({ $isOpen }) => $isOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
    overflow-y: auto;
    padding: 100px ${variables.spacing['global-horizontal-mobile']} ${variables.spacing['global-horizontal-mobile']};
    box-shadow: ${({ $isOpen }) => $isOpen ? '-4px 0 20px rgba(0, 0, 0, 0.5)' : 'none'};
    
    @media ${variables.media.tablet} {
        padding: 100px ${variables.spacing['global-horizontal-tablet']} ${variables.spacing['global-horizontal-tablet']};
    }
    
    @media ${variables.media.tabletXL} {
        display: none;
    }
`;

const MobileMenuOverlay = styled.div<{ $isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 80;
    opacity: ${({ $isOpen }) => $isOpen ? 1 : 0};
    visibility: ${({ $isOpen }) => $isOpen ? 'visible' : 'hidden'};
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
    
    @media ${variables.media.tabletXL} {
        display: none;
    }
`;
const HeaderWrapper = styled.div`
${responsiveContainerPadding}
`
const Row = styled.div`

    display: flex;
    align-items: center;
    gap: 32px;
    padding: 12px ${variables.spacing['global-horizontal-mobile']};
    justify-content: space-between;

    @media ${variables.media.tablet} {
        padding: 12px ${variables.spacing['global-horizontal-tablet']};
    }
    @media ${variables.media.tabletXL} {
        padding: 12px ${variables.spacing['global-horizontal-desktop']};
    }
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


const Header = () => {
    const { isOpen, toggleMenu, closeMenu } = useMobileMenu();

    return (
        <>
            <HeaderRoot>
                <SkipLink href="#main">Przejdź do treści</SkipLink>
                <HeaderWrapper>
                    <Row>
                        <Logo width={183} height={64} alt="Streamec logo" />
                        <Burger opened={isOpen} toggle={toggleMenu} />
                        <HeaderNav />
                    </Row>
                </HeaderWrapper>
            </HeaderRoot>
            <MobileMenuOverlay $isOpen={isOpen} onClick={toggleMenu} />
            <MobileMenu $isOpen={isOpen}>
                <HeaderNav isMobile={true} onLinkClick={closeMenu} />
            </MobileMenu>
        </>
    );
};

export default Header;