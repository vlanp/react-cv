import { FaDownload } from "react-icons/fa6";
import { ETheme, type ITheme } from "../types/ITheme";
import BottomResume from "./resume/bottom-resume";
import LeftResume from "./resume/left-resume";
import RightResume from "./resume/right-resume";
import type { FetchDataSuccess } from "../types/IFetchDataState";
import type { IDictionary } from "../dictionaries/generated";
import html2pdf from "html2pdf.js";

const Resume = ({
  theme,
  lang,
  dictionaryDataState,
}: {
  theme?: ITheme;
  lang: string;
  dictionaryDataState: FetchDataSuccess<IDictionary>;
}) => {
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

  return (
    <section
      className={
        "resume-section " +
        (theme && Object.values(ETheme).includes(theme as ITheme) ? theme : "")
      }
      id="area-cv"
    >
      <FaDownload
        id="download-button"
        title="Generate PDF"
        onClick={generatePdf}
      />
      <div className="top-resume-div">
        <LeftResume dictionary={dictionaryDataState.data} />
        <RightResume dictionary={dictionaryDataState.data} />
      </div>
      <BottomResume dictionary={dictionaryDataState.data} />
    </section>
  );
};

export default Resume;
