import type { IDictionary } from "../dictionaries/generated";
import type { ILanguageItemKey, IStackLogos } from "../stackLogos";
import type {
  ICategoryItemId,
  ICategoryItemTitle,
  ICategoryKey,
  ICategoryTitle,
} from "../zustand/createCategoryItemsStore";

interface ICategoryItem<T extends ICategoryKey> {
  categoryItemId: ICategoryItemId<T>;
  categoryItemTitle: ICategoryItemTitle<T>;
}

interface ICategoryItemGroup<T extends ICategoryKey> {
  categoryKey: T;
  categoryTitle: ICategoryTitle<T>;
  categoryItems: ICategoryItem<T>[];
}

interface ICategoryItemPanel {
  panelTitle: string;
  categoryItemGroups: ICategoryItemGroup<ICategoryKey>[];
}

interface ILanguageItem<T extends keyof IStackLogos> {
  languageItemKey: ILanguageItemKey<T>;
}

interface ILanguageItemGroup<T extends keyof IStackLogos> {
  languageKey: T;
  languageTitle: IDictionary[T];
  languageItems: ILanguageItem<T>[];
}

interface ILanguageItemPanel {
  panelTitle: string;
  languageItemGroups: ILanguageItemGroup<keyof IStackLogos>[];
}

type IPanels = ILanguageItemPanel | ICategoryItemPanel;

export type {
  ICategoryItemGroup,
  ICategoryItem,
  ILanguageItemGroup,
  ILanguageItem,
  ICategoryItemPanel,
  ILanguageItemPanel,
  IPanels,
};
