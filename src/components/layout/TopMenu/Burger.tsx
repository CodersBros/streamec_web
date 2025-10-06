import React from 'react'

import { variables } from '@/styles/variables'
import styled from 'styled-components'


const Hamburger = styled.a<{ $opened?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 48px;
  height: 48px;
  border: none;
  z-index: 101;
  background: ${variables.colors.accent};
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  & span {
    display: block;
    position: absolute;
    left: 50%;
    width: 20px;
    height: 2px;
    background: ${variables.colors.white};
    border-radius: 1px;
    transform-origin: center center;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    will-change: transform, opacity;
    backface-visibility: hidden;
    margin-left: -10px;
    
    &:first-child {
      top: ${({ $opened }) => ($opened ? '50%' : '16px')};
      transform: ${({ $opened }) =>
    $opened
      ? 'translateY(-50%) rotate(45deg)'
      : 'translateY(0) rotate(0)'
  };
    }
    
    &:nth-child(2) {
      top: 50%;
      transform: translateY(-50%);
      opacity: ${({ $opened }) => ($opened ? '0' : '1')};
      width: ${({ $opened }) => ($opened ? '0' : '20px')};
    }
    
    &:nth-child(3) {
      top: ${({ $opened }) => ($opened ? '50%' : '30px')};
      transform: ${({ $opened }) =>
    $opened
      ? 'translateY(-50%) rotate(-45deg)'
      : 'translateY(0) rotate(0)'
  };
    }
  }
  
  @media ${variables.media.tabletXL} {
    display: none;
  }
`
interface BurgerProps {
  opened: boolean
  toggle: () => void

}

const Burger: React.FC<BurgerProps> = ({ opened, toggle }) => {

  return (
    <Hamburger
      role='button'
      className={opened ? 'is-active' : ''}
      aria-label='menu'
      aria-expanded='false'
      data-target='#topNavBar'
      $opened={opened}
      onClick={toggle}

    >
      <span aria-hidden='true' />
      <span aria-hidden='true' />
      <span aria-hidden='true' />
    </Hamburger>
  )
}
export default Burger
