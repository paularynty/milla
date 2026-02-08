import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MainApp from "./MainApp.tsx";
import { LanguageProvider } from "./LanguageProvider.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <MainApp />
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>,
);
