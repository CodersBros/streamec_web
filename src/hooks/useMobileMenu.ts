import { useCallback, useEffect, useState } from 'react';
import { variables } from '../styles/variables';

interface UseMobileMenuReturn {
  isOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
  toggleMenu: () => void;
}

/**
 * Hook for controlling mobile menu with slide-down animation.
 *
 * @returns {UseMobileMenuReturn} Object with menu control functions
 */
const useMobileMenu = (): UseMobileMenuReturn => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = useCallback(() => {
    setIsOpen(true);

    document.body.style.overflow = 'hidden';
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);

    document.body.style.overflow = '';
  }, []);

  const toggleMenu = useCallback(() => {
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }, [isOpen, openMenu, closeMenu]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const tabletWidth = parseInt(variables.media.tablet, 10);
      if (window.innerWidth >= tabletWidth && isOpen) {
        closeMenu();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen, closeMenu]);

  return { isOpen, openMenu, closeMenu, toggleMenu };
};

export default useMobileMenu;
