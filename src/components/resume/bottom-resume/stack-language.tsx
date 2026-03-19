import "./stack-language.css";
import type { IDictionary } from "../../../dictionaries/generated";
import type {
  ILanguageItemKey,
  ILanguageItems,
  IStackLogos,
} from "../../../stackLogos";

const StackLanguage = <T extends keyof IStackLogos>({
  dictionary,
  languageKey,
  languageItemsKeys,
  languageItems,
}: {
  dictionary: IDictionary;
  languageKey: T;
  languageItemsKeys: ILanguageItemKey<T>[];
  languageItems: ILanguageItems<T>;
}) => {
  return (
    <div className="language-div">
      <h3>{dictionary[languageKey]}</h3>
      <div className="technos-div">
        {languageItemsKeys.map((languageItemKey) => (
          <div
            key={languageItemKey}
            className={
              // @ts-expect-error issue with conditional distributive types
              languageItems[languageItemKey].size === "little"
                ? "techno-img-little-container"
                : "techno-img-container"
            }
          >
            <img
              width={
                // @ts-expect-error issue with conditional distributive types
                languageItems[languageItemKey].size === "little"
                  ? undefined
                  : "100%"
              }
              height={
                // @ts-expect-error issue with conditional distributive types
                languageItems[languageItemKey].size === "little"
                  ? "100%"
                  : undefined
              }
              // @ts-expect-error issue with conditional distributive types
              src={languageItems[languageItemKey].src}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StackLanguage;
