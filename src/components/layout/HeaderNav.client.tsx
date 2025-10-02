"use client";
import { landingSections } from '@/data/sections';
import { useActiveSection } from '@/hooks/useActiveSection';
import { variables } from '@/styles/variables';
import styled from 'styled-components';

const Nav = styled.nav``;
const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
  margin: 0;
  padding: 0;
`;
const NavItem = styled.li``;

const NavLink = styled.a<{ $active: boolean }>`
  display: inline-block;
  padding: 4px 0;
  text-decoration: none;
  color: ${({ $active }) => $active ? 'var(--color-accent, ' + variables.colors.accent + ')' : 'var(--color-text, ' + variables.colors.gray414 + ')'};
  font-weight: ${({ $active }) => $active ? 600 : 500};
  position: relative;
  &:after {
    content: '';
    position: absolute;
    left: 0; right: 0; bottom: -2px;
    height: 2px;
    background: var(--color-accent, ${variables.colors.accent});
    opacity: ${({ $active }) => $active ? 1 : 0};
    transition: opacity .2s;
  }
  &:hover { color: var(--color-accent, ${variables.colors.accent}); }
`;

const HeaderNav = () => {
  const active = useActiveSection();
  return (
    <Nav aria-label="Główna nawigacja">
      <NavList>
        {landingSections.map(section => {
          const isActive = active === section.id;
          return (
            <NavItem key={section.id}>
              <NavLink
                href={section.hash}
                $active={isActive}
                aria-current={isActive ? 'page' : undefined}
              >
                {section.label}
              </NavLink>
            </NavItem>
          );
        })}
      </NavList>
    </Nav>
  );
};

export default HeaderNav;
