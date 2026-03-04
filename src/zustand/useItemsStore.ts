import { type IDictionary } from "../dictionaries/generated";
import { createStore } from "zustand";
import { getBoolean } from "../utils";
import type { ILang } from "../types/ILang";
import { getDictionaryAsync } from "../dictionnaries";

interface ICategoryWithItems {
  title: string;
  items: object;
}

type ICategoryKey = {
  [K in keyof IDictionary]: IDictionary[K] extends ICategoryWithItems
    ? K
    : never;
}[keyof IDictionary];

type ICategoryTitle<T extends ICategoryKey> = IDictionary[T]["title"];

const categoriesKeys = [
  "educations",
  "experiences",
  "projects",
] satisfies ICategoryKey[];

// type IItemTitleKey<T extends ICategoryKey> = `${T}_items_title${}`

// type ISectionItemTitleValue<T extends ISectionCategory> =
//   IDictionary[ISectionItemTitleKey<T>];

// function isAvailableSectionItemTitleKey(
//   key: keyof IDictionary,
//   category?: IAvailableSectionCategory,
// ): key is ISectionItemTitleKey<IAvailableSectionCategory> {
//   if (category) {
//     return new RegExp(`^${category}\\d+_title`).test(key);
//   }
//   return availablesSectionsCategories.some((category) =>
//     new RegExp(`^${category}\\d+_title`).test(key),
//   );
// }

// const availablesSectionsItemsTitlesKeys = dictionariesKeys.filter((key) =>
//   isAvailableSectionItemTitleKey(key),
// );

// type ISectionItemKey<T extends ISectionCategory> = Extract<
//   keyof IDictionary,
//   `${T}${number}_${string}`
// >;

// function isAvailableSectionItemKey(
//   key: keyof IDictionary,
//   category?: IAvailableSectionCategory,
// ): key is ISectionItemKey<IAvailableSectionCategory> {
//   if (category) {
//     return new RegExp(`^${category}\\d+_.*$`).test(key);
//   }
//   return availablesSectionsCategories.some((category) =>
//     new RegExp(`^${category}\\d+_.*$`).test(key),
//   );
// }

type IItemIndex<T extends ICategoryKey = ICategoryKey> = Extract<
  keyof IDictionary[T]["items"],
  string
>;

type IItemId<T extends ICategoryKey = ICategoryKey> = T extends ICategoryKey
  ? `${T}_${IItemIndex<T>}`
  : never;

const createItemId = <T extends ICategoryKey>(
  categoryKey: T,
  itemIndex: IItemIndex<T>,
): IItemId<T> => `${categoryKey}_${itemIndex}` as IItemId<T>;

type IItemTitle<T extends ICategoryKey> =
  IDictionary[T]["items"][IItemIndex<T>] extends {
    title: infer Title;
  }
    ? Title & string
    : never;

interface IItemsStoreStates {
  itemsStates: Record<IItemId, boolean>;
}

interface IItemsStoreActions {
  setItemState: (item: IItemId, isSelected: boolean) => void;
}

const setItemState = (
  item: IItemId,
  isSelected: boolean,
  itemsStates: Record<IItemId, boolean>,
) => {
  return {
    ...itemsStates,
    [item]: isSelected,
  };
};

const getItemState = (itemId: IItemId) => {
  const itemTitleValue = localStorage.getItem(itemId);
  try {
    if (itemTitleValue) {
      const storedCheckState = getBoolean(itemTitleValue);
      return storedCheckState;
    }
    return false;
  } catch {
    return false;
  }
};

const createItemsStore = async (lang: ILang) => {
  const dictionary = await getDictionaryAsync(lang);
  const itemsIds: IItemId[] = [];
  for (const categoryKey of categoriesKeys) {
    const indexes = Object.keys(
      dictionary[categoryKey]["items"],
    ) as IItemIndex[];
    indexes.forEach((index) => itemsIds.push(createItemId(categoryKey, index)));
  }
  return createStore<IItemsStoreStates & IItemsStoreActions>((set) => ({
    itemsStates: itemsIds.reduce(
      (acc, key) => {
        acc[key] = getItemState(key);
        return acc;
      },
      {} as Record<IItemId<ICategoryKey>, boolean>,
    ),
    setItemState: (item: IItemId<ICategoryKey>, isSelected: boolean) =>
      set((state) => ({
        itemsStates: setItemState(item, isSelected, state.itemsStates),
      })),
  }));
};

type IItemsStore = Awaited<ReturnType<typeof createItemsStore>>;

export type {
  ICategoryWithItems,
  ICategoryKey,
  ICategoryTitle,
  IItemId,
  IItemTitle,
  IItemsStore,
  IItemsStoreStates,
  IItemsStoreActions,
  IItemIndex,
};
export { categoriesKeys, createItemsStore, createItemId };
