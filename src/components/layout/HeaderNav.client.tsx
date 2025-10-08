'use client';
import { landingSections } from '@/data/sections';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useNavigateToSection } from '@/hooks/useNavigateToSection';
import { variables } from '@/styles/variables';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';
import { typographyCss } from '../../styles/typography';
import { ButtonOutlinedLight } from '../ui/ButtonOutlinedLight';

const Nav = styled.nav`
  display: none;
  @media ${variables.media.tabletXL} {
    display: block;
  }
`;

const MobileNav = styled.nav`
  display: block;
  @media ${variables.media.tabletXL} {
    display: none;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const MobileNavList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 24px;
  margin: 0;
  padding: 0;
`;
const NavItem = styled.li``;

const NavLink = styled(Link) <{ $active: boolean }>`
  ${typographyCss('nav/item')}
  display: inline-block;
  padding: 4px 0;
  text-decoration: none;
  color: ${({ $active }) =>
    $active ? variables.colors.accent : variables.colors.white};
  font-weight: ${({ $active }) => ($active ? 600 : 500)};
  position: relative;
  transition: color 0.2s ease;
  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -2px;
    height: 2px;
    background: ${variables.colors.accent};
    opacity: ${({ $active }) => ($active ? 1 : 0)};
    transition: opacity 0.2s;
  }
  &:hover {
    color: ${variables.colors.accent};
  }
`;

const MobileNavLink = styled(Link) <{ $active: boolean }>`
  ${typographyCss('nav/item')}
  display: block;
  padding: 16px 0;
  text-decoration: none;
  color: ${variables.colors.white};
  font-weight: ${({ $active }) => ($active ? 600 : 500)};
  font-size: 24px;
  transition: color 0.2s ease;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;

  ${({ $active }) =>
    $active &&
    `
    color: ${variables.colors.accent};
    &:before {
      content: '';
      position: absolute;
      left: -16px;
      top: 50%;
      transform: translateY(-50%);
      width: 4px;
      height: 24px;
      background: ${variables.colors.accent};
      border-radius: 2px;
    }
  `}

  &:hover {
    color: ${variables.colors.accent};
  }
`;

interface HeaderNavProps {
  isMobile?: boolean;
  onLinkClick?: () => void;
}

const HeaderNav = ({ isMobile = false, onLinkClick }: HeaderNavProps) => {
  const active = useActiveSection();
  const pathname = usePathname() || '/';
  const navigateToSection = useNavigateToSection();

  const makeHref = (hash: string) =>
    pathname.startsWith('/legal') ? `/${hash}` : hash;

  const handleNavClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    navigateToSection(sectionId);
  };

  if (isMobile) {
    return (
      <MobileNav aria-label='Mobile navigation'>
        <MobileNavList>
          {landingSections.map(section => {
            const isActive = active === section.id;
            const href = makeHref(section.hash);
            return (
              <NavItem key={section.id}>
                <MobileNavLink
                  $active={isActive}
                  aria-current={isActive ? 'page' : undefined}
                  href={href}
                  scroll={false}
                  prefetch={false}
                  onClick={(e) => {
                    handleNavClick(e, section.id);
                    onLinkClick?.();
                  }}
                >
                  {section.label}
                </MobileNavLink>
              </NavItem>
            );
          })}
        </MobileNavList>
      </MobileNav>
    );
  }

  return (
    <Nav aria-label='Main navigation'>
      <NavList>
        {landingSections.map(section => {
          const isActive = active === section.id;
          const href = makeHref(section.hash);
          return (
            <NavItem key={section.id}>
              {section.id === 'team' ? (
                <ButtonOutlinedLight
                  label={section.label}
                  withIcon={true}
                  size='md'
                  variant={isActive ? 'light' : 'light'}
                  width={210}
                  style={{
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? variables.colors.accent : undefined,
                  }}
                  onClick={(e) => handleNavClick(e, section.id)}
                  accent={variables.colors.accent}
                />
              ) : (
                  <NavLink
                    $active={isActive}
                    aria-current={isActive ? 'page' : undefined}
                    href={href}
                    scroll={false}
                    prefetch={false}
                    onClick={(e) => handleNavClick(e, section.id)}
                  >
                    {section.label}
                  </NavLink>
              )}
            </NavItem>
          );
        })}
      </NavList>
    </Nav>
  );
};

export default HeaderNav;
