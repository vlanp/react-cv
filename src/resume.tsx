import { useEffect, useState } from "react";
import "./resume.css";
import type { ILang } from "./types/ILang";
import { getDictionaryAsync } from "./dictionnaries";
import {
  fetchDataIdle,
  fetchDataLoading,
  FetchDataSuccess,
  type IFetchDataState,
} from "./types/IFetchDataState";
import type { IDictionary } from "./dictionaries/generated";
import AppSkeleton from "./resume-skeleton";
import LeftResume from "./resume/left-resume";
import RightResume from "./resume/right-resume";
import html2pdf from "html2pdf.js";
import { FaDownload } from "react-icons/fa6";

function Resume({ lang }: { lang: ILang }) {
  const [dictionaryDataState, setDictionaryDataState] =
    useState<IFetchDataState<IDictionary>>(fetchDataIdle);

  const generatePdf = () => {
    const areaCV = document.getElementById("area-cv");

    if (!areaCV) return;

    const currentWidth = areaCV.offsetWidth;
    const currentHeight = areaCV.offsetHeight;

    const opt = {
      margin: 0,
      filename: "myResumeCV-dark.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: {
        scale: 4,
        useCORS: true,
        width: currentWidth,
        height: currentHeight,
      },
      jsPDF: {
        format: "a4",
        orientation: "portrait",
      },
    };

    html2pdf(areaCV, opt);
  };

  useEffect(() => {
    const loadDictionaryAsync = async () => {
      setDictionaryDataState(fetchDataLoading);
      const dictionary = await getDictionaryAsync(lang);
      setDictionaryDataState(new FetchDataSuccess(dictionary));
    };
    loadDictionaryAsync();
  }, [lang]);

  if (dictionaryDataState.status !== "fetchDataSuccess") {
    return <AppSkeleton />;
  }

  return (
    <main className="main-container">
      <section className="resume-section" id="area-cv">
        <FaDownload
          id="download-button"
          title="Generate PDF"
          onClick={generatePdf}
        />
        <LeftResume dictionary={dictionaryDataState.data} />
        <RightResume dictionary={dictionaryDataState.data} />
      </section>
    </main>
  );
}

export default Resume;
