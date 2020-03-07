import { createGlobalStyle } from 'styled-components';

import { theme } from '../config';
import typography from './typography';
import { space } from './rhythm';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roobert';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local('Roobert Medium'), local('Roobert-Medium'), url(asset('fonts/Roobert-Medium.woff2')) format('woff2'), url(asset('fonts/Roobert-Medium.woff')) format('woff');
  }
  @font-face {
    font-family: 'Roobert';
    font-style: normal;
    font-weight: 200;
    font-display: swap;
    src: local('Roobert Light'), local('Roobert-Light'), url(asset('fonts/Roobert-Light.woff2')) format('woff2'), url(asset('fonts/Roobert-Light.woff')) format('woff');
  }
  @font-face {
    font-family: 'Roobert';
    font-style: italic;
    font-weight: 200;
    font-display: swap;
    src: local('Roobert Light'), local('Roobert-LightItalic'), url(asset('fonts/Roobert-LightItalic.woff2')) format('woff2'), url({{ asset('fonts/Roobert-LightItalic.woff')) format('woff');
  }

  html, body {
    color: ${theme.colors.neutro900};
    font-family: ${theme.typography.family};
    font-size: ${theme.typography.minSize};
    font-weight: 300;
    line-height: ${space()};
    text-size-adjust: 100%;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html, body {height:100%;}

  body {
    color: ${theme.colors.primary900}
    line-height: 1.5;
    letter-spacing: .3px;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul,
  ol,
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  ul,
  ol {
    list-style: none;
    padding: 0;
  }

  a {
    text-decoration-skip-ink: auto;
  }

  img {
    max-width: 100%;
    display: block;
  }

  article > * + * {
    margin-top: 1em;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  #__next {
    height: 100%;
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  ${typography}
`;

export default GlobalStyle;
