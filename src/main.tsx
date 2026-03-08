import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./reset.css";
import "./layout.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { ELang } from "./types/ILang.ts";
import LangRedirect from "./lang-redirect.tsx";
import Home from "./home.tsx";
// import Test from "./test.tsx";
import CategoryItemsProvider from "./Providers/category-items-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<LangRedirect />} />
        {Object.values(ELang).map((lang) => (
          <Route
            path={lang + "/:theme?"}
            element={
              <CategoryItemsProvider lang={lang}>
                <Home lang={lang} />
              </CategoryItemsProvider>
            }
          />
        ))}
        {/* <Route path="/test" element={<Test />} /> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
