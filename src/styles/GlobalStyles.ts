import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    border-color: ${({ theme }) => theme.colors.border};
    outline-color: ${({ theme }) => theme.colors.ring ?? "rgba(0,0,0,0.5)"};
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }

  a {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.accent};
    text-decoration: inherit;
  }

  a:hover {
    opacity: 0.85;
  }

  h1 {
    font-size: 3.2em;
    line-height: 1.1;
  }

  button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;

    font-size: 1em;
    font-weight: 500;
    font-family: inherit;

    background-color: ${({ theme }) => theme.colors.backgroundElevated};
    color: ${({ theme }) => theme.colors.text};

    cursor: pointer;
    transition: border-color 0.25s;
  }

  button:hover {
    border-color: ${({ theme }) => theme.colors.accent};
  }

  button:focus,
  button:focus-visible {
    outline: 4px solid ${({ theme }) => theme.colors.outlineFocused};
    outline-offset: 2px;
  }
`;
