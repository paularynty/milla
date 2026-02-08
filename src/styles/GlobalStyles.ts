import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont;
    background: #fff;
    color: #212121;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;