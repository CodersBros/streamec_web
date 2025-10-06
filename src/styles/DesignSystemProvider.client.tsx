'use client';

import { createGlobalStyle } from 'styled-components';

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
