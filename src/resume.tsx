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
import { useParams } from "react-router";
import { ETheme, type ITheme } from "./types/ITheme";

function Resume({ lang }: { lang: ILang }) {
  const [dictionaryDataState, setDictionaryDataState] =
    useState<IFetchDataState<IDictionary>>(fetchDataIdle);

  const { theme } = useParams();

  console.log(theme);

  const generatePdf = async () => {
    const styleSheets = Array.from(document.styleSheets);
    const deletedMediaRules: [CSSMediaRule, Record<number, string>][] = [];

    styleSheets.forEach((sheet) => {
      const rules = Array.from(sheet.cssRules);
      rules.forEach((rule) => {
        if (rule instanceof CSSMediaRule) {
          const temp: [CSSMediaRule, Record<number, string>] = [
            rule,
            {} as Record<number, string>,
          ];

          Object.keys(rule.cssRules)
            .map((stringIndex) => Number(stringIndex))
            .sort((a, b) => b - a) // Need to sort or indexes are going to be wrong during delete
            .forEach((index) => {
              temp[1][index] = rule.cssRules[index].cssText;
              rule.deleteRule(Number(index));
            });

          deletedMediaRules.push(temp);
        }
      });
    });

    const areaCV = document.getElementById("area-cv");
    if (!areaCV) return;
    const currentWidth = areaCV.offsetWidth;
    const opt = {
      margin: 0,
      filename: "myResumeCV-dark.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: {
        scale: 4,
        useCORS: true,
        width: currentWidth,
        height: currentWidth * (29.7 / 21),
        windowWidth: 1920,
        windowHeight: 1080,
      },
      jsPDF: {
        format: "a4",
        orientation: "portrait",
      },
      pagebreak: { mode: "avoid-all" },
    };
    await html2pdf(areaCV, opt);

    deletedMediaRules.forEach((deletedMediaRule) => {
      const cssRules = deletedMediaRule[1];
      const mediaRule = deletedMediaRule[0];
      Object.keys(cssRules).forEach((index) => {
        const ruleText = cssRules[Number(index)];
        mediaRule.insertRule(ruleText, Number(index));
      });
    });
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
    <main
      className={
        "main-container " +
        (theme && Object.values(ETheme).includes(theme as ITheme) ? theme : "")
      }
    >
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
