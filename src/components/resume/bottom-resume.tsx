import type { IDictionary } from "../../dictionaries/generated";
import stackLogos, { type ILanguageItemKey } from "../../stackLogos";
import { useLanguageItemsStore } from "../../zustand/useLanguageItemsStore";
import "./bottom-resume.css";
import StackLanguage from "./bottom-resume/stack-language";

const BottomResume = ({ dictionary }: { dictionary: IDictionary }) => {
  const languageItemsStates = useLanguageItemsStore(
    (state) => state.languageItemsStates,
  );

  const typescriptItemsKeys = (
    Object.keys(stackLogos.typescript.items) as ILanguageItemKey<"typescript">[]
  ).filter((key) => languageItemsStates[key]);
  const kotlinItemsKeys = (
    Object.keys(stackLogos.kotlin.items) as ILanguageItemKey<"kotlin">[]
  ).filter((key) => languageItemsStates[key]);
  const pythonItemsKeys = (
    Object.keys(stackLogos.python.items) as ILanguageItemKey<"python">[]
  ).filter((key) => languageItemsStates[key]);
  const otherTechnoItemsKeys = (
    Object.keys(
      stackLogos.other_technos.items,
    ) as ILanguageItemKey<"other_technos">[]
  ).filter((key) => languageItemsStates[key]);

  return (
    <section className="resume-bottom-section">
      {typescriptItemsKeys.length > 0 && (
        <StackLanguage
          dictionary={dictionary}
          languageKey={"typescript"}
          languageItemsKeys={typescriptItemsKeys}
          languageItems={stackLogos.typescript.items}
        />
      )}
      {kotlinItemsKeys.length > 0 && (
        <StackLanguage
          dictionary={dictionary}
          languageKey={"kotlin"}
          languageItemsKeys={kotlinItemsKeys}
          languageItems={stackLogos.kotlin.items}
        />
      )}
      {pythonItemsKeys.length > 0 && (
        <StackLanguage
          dictionary={dictionary}
          languageKey={"python"}
          languageItemsKeys={pythonItemsKeys}
          languageItems={stackLogos.python.items}
        />
      )}
      {otherTechnoItemsKeys.length > 0 && (
        <StackLanguage
          dictionary={dictionary}
          languageKey={"other_technos"}
          languageItemsKeys={otherTechnoItemsKeys}
          languageItems={stackLogos.other_technos.items}
        />
      )}
    </section>
  );
};

export default BottomResume;
