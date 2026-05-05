import { useEffect, useState } from "react";
import "./home.css";
import type { ILang } from "./types/ILang";
import { getDictionaryAsync } from "./dictionnaries";
import {
  fetchDataIdle,
  fetchDataLoading,
  FetchDataSuccess,
  type IFetchDataState,
} from "./types/IFetchDataState";
import { type IDictionary } from "./dictionaries/generated";
import AppSkeleton from "./resume-skeleton";
import { useParams } from "react-router";
import { ETheme, type ITheme } from "./types/ITheme";
import ItemSelectorPanels from "./components/item-selector-panels";
import {
  categoriesKeys,
  createCategoryItemId,
  type ICategoryKey,
} from "./zustand/createCategoryItemsStore";
import Resume from "./components/resume";
import type { ICategoryItemPanel } from "./types/IPanels";

/* TODO : Resolve issue with links in PDF, which are in the wrong place.
see : https://github.com/eKoopmans/html2pdf.js/issues/725
and : https://github.com/eKoopmans/html2pdf.js/issues/155
It is related to setting width in html2canvas options.
Setting width and height is currently required to put the full A4 page in the PDF. */
function Home({ lang }: { lang: ILang }) {
  const [dictionaryDataState, setDictionaryDataState] =
    useState<IFetchDataState<IDictionary>>(fetchDataIdle);

  const { theme }: { theme?: ITheme } = useParams();

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

  const categoryItemPanel: ICategoryItemPanel = {
    panelTitle: dictionaryDataState.data.resume_fields,
    categoryItemGroups: categoriesKeys.map((categoryKey) => {
      const keys = Object.keys(
        dictionaryDataState.data[categoryKey].items,
      ) as (keyof IDictionary[ICategoryKey]["items"])[];
      return {
        categoryKey: categoryKey,
        categoryTitle: dictionaryDataState.data[categoryKey].title,
        categoryItems: keys.map((key) => ({
          categoryItemId: createCategoryItemId(categoryKey, key),
          categoryItemTitle:
            dictionaryDataState.data[categoryKey].items[key].title,
        })),
      };
    }),
  };

  return (
    <main
      className={
        "main-container " +
        (theme && Object.values(ETheme).includes(theme) ? theme : "")
      }
    >
      <ItemSelectorPanels categoryItemPanel={categoryItemPanel} />
      <Resume
        theme={theme}
        lang={lang}
        dictionaryDataState={dictionaryDataState}
      />
    </main>
  );
}

export default Home;
