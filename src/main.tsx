import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./reset.css";
import "./layout.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { ELang } from "./types/ILang.ts";
import Home from "./home.tsx";
import Resume from "./resume.tsx";
// import Test from "./test.tsx";
import ItemsProvider from "./Providers/items-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        {Object.values(ELang).map((lang) => (
          <Route
            path={lang + "/:theme?"}
            element={
              <ItemsProvider lang={lang}>
                <Resume lang={lang} />
              </ItemsProvider>
            }
          />
        ))}
        {/* <Route path="/test" element={<Test />} /> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
