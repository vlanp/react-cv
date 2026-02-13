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
import { dictionariesKeys, type IDictionary } from "./dictionaries/generated";
import AppSkeleton from "./resume-skeleton";
import LeftResume from "./resume/left-resume";
import RightResume from "./resume/right-resume";
import { FaDownload } from "react-icons/fa6";
import { useParams } from "react-router";
import { ETheme, type ITheme } from "./types/ITheme";
import html2pdf from "html2pdf.js";
import ItemSelectorPanel from "./components/item-selector-panel";
import {
  availablesGroupsTitles,
  isAvailableGroupItem,
} from "./zustand/useItemsStore";

/* TODO : Resolve issue with links in PDF, which are in the wrong place.
see : https://github.com/eKoopmans/html2pdf.js/issues/725
and : https://github.com/eKoopmans/html2pdf.js/issues/155
It is related to setting width in html2canvas options.
Setting width and height is currently required to put the full A4 page in the PDF. */
function Resume({ lang }: { lang: ILang }) {
  const [dictionaryDataState, setDictionaryDataState] =
    useState<IFetchDataState<IDictionary>>(fetchDataIdle);

  const { theme } = useParams();

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
    let currentTheme: ITheme = ETheme.LIGHT;
    if (theme && Object.values(ETheme).includes(theme as ITheme)) {
      currentTheme = theme as ITheme;
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      currentTheme = ETheme.DARK;
    }
    const currentWidth = areaCV.offsetWidth;
    const opt = {
      margin: 0,
      filename: `CV-Valentin-GUILLAUME-${lang}-${currentTheme}.pdf`,
      image: { type: "jpeg", quality: 1 },
      enableLinks: false,
      html2canvas: {
        scale: 2,
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
    } as const;
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
      <ItemSelectorPanel
        title={dictionaryDataState.data.ResumeFields}
        itemSelectorGroupsProps={availablesGroupsTitles.map(
          (availableGroupTitle) => ({
            title: availableGroupTitle,
            items: dictionariesKeys
              .filter((key) => isAvailableGroupItem(key, availableGroupTitle))
              .map((key) => ({
                itemKey: key,
                itemValue: dictionaryDataState.data[key],
              })),
          }),
        )}
      />
      <section
        className={
          "resume-section " +
          (theme && Object.values(ETheme).includes(theme as ITheme)
            ? theme
            : "")
        }
        id="area-cv"
      >
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
