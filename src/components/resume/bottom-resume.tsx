import type { IDictionary } from "../../dictionaries/generated";
import stackLogos, { type ILanguageItemKey } from "../../stackLogos";
import { useLanguageItemsStore } from "../../zustand/useLanguageItemsStore";
import "./bottom-resume.css";

const BottomResume = ({ dictionary }: { dictionary: IDictionary }) => {
  const languageItemsStates = useLanguageItemsStore(
    (state) => state.languageItemsStates,
  );

  const typescriptItemsId = (
    Object.keys(stackLogos.typescript.items) as ILanguageItemKey<"typescript">[]
  ).filter((key) => languageItemsStates[key]);
  const kotlinItemsId = (
    Object.keys(stackLogos.kotlin.items) as ILanguageItemKey<"kotlin">[]
  ).filter((key) => languageItemsStates[key]);
  const pythonItemsId = (
    Object.keys(stackLogos.python.items) as ILanguageItemKey<"python">[]
  ).filter((key) => languageItemsStates[key]);
  const otherTechnoItemsId = (
    Object.keys(
      stackLogos.other_technos.items,
    ) as ILanguageItemKey<"other_technos">[]
  ).filter((key) => languageItemsStates[key]);

  return (
    <section className="resume-bottom-section">
      {typescriptItemsId.length > 0 && (
        <div className="language-div">
          <h3>{dictionary.typescript}</h3>
          <div className="technos-div">
            {typescriptItemsId.map((itemId) => (
              <div key={itemId} className="techno-img-container">
                <img width={"100%"} src={stackLogos.typescript.items[itemId]} />
              </div>
            ))}
          </div>
        </div>
      )}
      {kotlinItemsId.length > 0 && (
        <div className="language-div">
          <h3>{dictionary.kotlin}</h3>
          <div className="technos-div">
            {kotlinItemsId.map((itemId) => (
              <div key={itemId} className="techno-img-container">
                <img width={"100%"} src={stackLogos.kotlin.items[itemId]} />
              </div>
            ))}
          </div>
        </div>
      )}
      {pythonItemsId.length > 0 && (
        <div className="language-div">
          <h3>{dictionary.python}</h3>
          <div className="technos-div">
            {pythonItemsId.map((itemId) => (
              <div key={itemId} className="techno-img-container">
                <img width={"100%"} src={stackLogos.python.items[itemId]} />
              </div>
            ))}
          </div>
        </div>
      )}
      {otherTechnoItemsId.length > 0 && (
        <div className="language-div">
          <h3>{dictionary.other_technos}</h3>
          <div className="technos-div">
            {otherTechnoItemsId.map((itemId) => (
              <div key={itemId} className="techno-img-container">
                <img
                  width={"100%"}
                  src={stackLogos.other_technos.items[itemId]}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default BottomResume;
