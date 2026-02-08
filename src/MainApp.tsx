import { useState, useEffect } from "react";
import { Header } from "./shared/Header";
import { Routes, Route, Navigate } from "react-router-dom";
import styled from "styled-components";
import { Home } from "./pages/Home";
import { Footer } from "./shared/Footer";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyles";
import { darkTheme } from "./styles/darkTheme";
import { lightTheme } from "./styles/lightTheme";

const Root = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export default function MainApp() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("milla-theme");
    const shouldUseDark = savedTheme
      ? savedTheme === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;

    setIsDarkMode(shouldUseDark);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("milla-theme")) {
        setIsDarkMode(e.matches);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const handleToggleTheme = () => {
    setIsDarkMode((prev) => {
      const newTheme = !prev;
      localStorage.setItem("milla-theme", newTheme ? "dark" : "light");
      return newTheme;
    });
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Root>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Catch-all redirect from invalid/non-existent URLs */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer isDarkMode={isDarkMode} onToggleTheme={handleToggleTheme} />
      </Root>
    </ThemeProvider>
  );
}
