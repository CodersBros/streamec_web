'use client';

import { usePathname } from 'next/navigation';
import React, { useMemo } from 'react';
import styled, { css } from 'styled-components';
import { typographyCss } from '../../styles/typography';
import { variables } from '../../styles/variables';
import Footer from './Footer';
import Header from './Header';
import ScrollHashEffect from './ScrollHashEffect';

type Variant = "default" | "prose" | "fullWidth" | "bare";

const HIDDEN_CHROME = ["/(hidden)/print", "/preview"];
const PROSE_PAGES = ["/legal"];
const NO_FOOTER = ["/auth", "/login"];
const FULL_WIDTH = ["/landing", "/partner", "/(hidden)/labs"];

const startsWithAny = (pathname: string, prefixes: string[]) =>
  prefixes.some((p) => pathname.startsWith(p));



const AppShell: React.FC<React.PropsWithChildren> = ({ children }) => {
  const pathname = usePathname() ?? "/";

  const cfg = useMemo(() => {
    const hideChrome = startsWithAny(pathname, HIDDEN_CHROME);
    const prose = startsWithAny(pathname, PROSE_PAGES);
    const noFooter = startsWithAny(pathname, NO_FOOTER);
    const fullWidth = startsWithAny(pathname, FULL_WIDTH);

    const variant: Variant = hideChrome
      ? "bare"
      : prose
        ? "prose"
        : fullWidth
          ? "fullWidth"
          : "default";

    return { hideChrome, noFooter, variant };
  }, [pathname]);

  if (cfg.hideChrome) {
    return <>{children}</>;
  }
  return (
    <Shell role="document">
      <Header />
      <ScrollHashEffect />
      <Main role="main" $variant={cfg.variant}>
        {children}
      </Main>
      {!cfg.noFooter && <Footer />}
    </Shell>
  );
};

export default AppShell;

const { colors, media, spacing } = variables;

const Shell = styled.div`
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  background: ${colors.white};
  color: ${colors.dark};
`;

const Main = styled.main<{ $variant: Variant }>`
  flex: 1 1 auto;

  ${({ $variant }) => {
    switch ($variant) {
      case "prose":
        return proseStyles;
      case "fullWidth":
        return fullWidthStyles;
      case "default":
      default:
        return defaultStyles;
    }
  }}
`;

/** Domyślny kontener (strony ogólne) */
const defaultStyles = css`
  margin: 0 auto;
  width: 100%;
`;

/** Pełna szerokość (landing/partner/labs) */
const fullWidthStyles = css`
  width: 100%;
  padding: ${spacing["sm-8"]} 0;

  @media ${media.tabletXL} {
    padding: ${spacing["lg-24"]} 0;
  }
`;

/** Prose — wąski, czytelny układ tekstów (np. /legal) */
const proseStyles = css`
  margin: 0 auto;
  width: 100%;
  max-width: 760px;
  padding: ${spacing["xl-32"]} ${spacing["global-horizontal-mobile"]};

  @media ${media.tabletXL} {
    padding: ${spacing["xxl-40"]} ${spacing["global-horizontal-tablet"]};
  }

  /* Typografia spójna z Twoimi presetami */
  h1 {
    ${typographyCss("subheading/lg")}; /* 32–40 / 500 Manrope */
    margin: 0 0 ${spacing["md-16"]};
  }
  h2 {
    ${typographyCss("heading/md")};    /* fluid(18,20) / 600 Manrope */
    margin: ${spacing["lg-24"]} 0 ${spacing["sm-8"]};
  }
  h3 {
    ${typographyCss("caption/md")};
    margin: ${spacing["md-16"]} 0 ${spacing["xs-4"]};
  }

  p, ul, ol, blockquote {
    ${typographyCss("body/md")};       /* fluid(14,18) / 400 Manrope */
    margin: ${spacing["md-16"]} 0;
  }

  ul, ol { padding-left: 1.25em; }

  a {
    color: ${colors.accent};
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  hr {
    border: 0;
    border-top: 1px solid ${colors.grayBorder};
    margin: ${spacing["xxl-40"]} 0;
  }

  code, kbd, samp, pre {
    ${typographyCss("code/md")};       /* 16px Consolas */
    background: ${colors.surfaceAlt};
    padding: 0.12em 0.34em;
    border-radius: 6px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: ${spacing["lg-24"]} 0 ${spacing["xxl-40"]};
  }
  th, td {
    text-align: left;
    padding: 0.6em 0.8em;
    border-bottom: 1px solid ${colors.grayBorder};
  }
`;