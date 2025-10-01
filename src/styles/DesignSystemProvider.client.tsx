'use client';

import { createGlobalStyle } from 'styled-components';
// import { designTokensCss } from './variables';

// Klientowy wrapper wstrzykujący CSS variables.
// Jeśli chcesz wstrzykiwać CSS variables, dodaj generator poniżej.
export const GlobalDesignStyles = createGlobalStyle``;

export function DesignSystemProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GlobalDesignStyles />
      {children}
    </>
  );
}

export default DesignSystemProvider;
