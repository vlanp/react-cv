import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./reset.css";
import "./layout.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { ELang } from "./types/ILang.ts";
import Home from "./home.tsx";
import Resume from "./resume.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path={ELang.EN} element={<Resume lang={ELang.EN} />} />
        <Route path={ELang.FR} element={<Resume lang={ELang.FR} />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
