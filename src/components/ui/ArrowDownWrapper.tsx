
import styled from 'styled-components';
import { variables } from '../../styles/variables';

import React, { useEffect, useRef } from 'react';
import ArrowDown from '../assets/ArrowDown';

const SvgWrapper = styled.div<{ $animate?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid ${variables.colors.white}; 
  width: 88px;
  height: 88px;
  position: absolute;
  bottom: 0;
  right: 10px;
  z-index: 2;
  cursor: pointer;
  svg {
    transition: transform 0.4s cubic-bezier(.68,-0.55,.27,1.55);
    transform: translateY(0);
    ${({ $animate }) => $animate && `transform: translateY(18px);`}
  }
`



const SCROLL_OFFSET = 150;

const scrollToFirstSection = () => {
  const el = document.getElementById('services');
  if (!el) return;

  const targetPosition = el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  const duration = 800;
  let startTime: number | null = null;

  const easeInOutCubic = (t: number): number => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeInOutCubic(progress);

    window.scrollTo(0, startPosition + distance * ease);

    if (progress < 1) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};


const ArrowDownWrapper = () => {
  const [animate, setAnimate] = React.useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const trigger = () => {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 400);
    };
    trigger();
    timerRef.current = setInterval(trigger, 4000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <SvgWrapper onClick={scrollToFirstSection} $animate={animate}>
      <ArrowDown color={variables.colors.white} />
    </SvgWrapper>
  );
}

export default ArrowDownWrapper;