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

type IItemIndex<T extends ICategoryKey> = Extract<
  keyof IDictionary[T]["items"],
  string
>;

type IItemId<T extends ICategoryKey, K extends IItemIndex<T>> = `${T}_${K}`;

interface IItemsStoreStates {
  itemsStates: Record<IItemId<ICategoryKey, IItemIndex<ICategoryKey>>, boolean>;
}

interface IItemsStoreActions {
  setItemState: (
    item: IItemId<ICategoryKey, IItemIndex<ICategoryKey>>,
    isSelected: boolean,
  ) => void;
}

const setItemState = (
  item: IItemId<ICategoryKey, IItemIndex<ICategoryKey>>,
  isSelected: boolean,
  itemsStates: Record<IItemId<ICategoryKey, IItemIndex<ICategoryKey>>, boolean>,
) => {
  return {
    ...itemsStates,
    [item]: isSelected,
  };
};

const getItemState = (
  itemId: IItemId<ICategoryKey, IItemIndex<ICategoryKey>>,
) => {
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

const createItemId = <T extends ICategoryKey, K extends IItemIndex<T>>(
  categoryKey: T,
  itemIndex: K,
): IItemId<T, K> => `${categoryKey}_${itemIndex}`;

const createItemsStore = async <
  T extends ICategoryKey,
  K extends IItemIndex<T>,
>(
  lang: ILang,
) => {
  const dictionary = await getDictionaryAsync(lang);
  const itemsIds: IItemId<T, K>[] = [];
  for (const categoryKey of categoriesKeys) {
    const indexes = Object.keys(dictionary[categoryKey]["items"]) as IItemIndex<
      typeof categoryKey
    >[];
    indexes.forEach((index) => itemsIds.push(createItemId(categoryKey, index)));
  }
  return createStore<IItemsStoreStates & IItemsStoreActions>((set) => ({
    itemsStates: itemsIds.reduce(
      (acc, key) => {
        acc[key] = getItemState(key);
        return acc;
      },
      {} as Record<IItemId<ICategoryKey, IItemIndex<ICategoryKey>>, boolean>,
    ),
    setItemState: (
      item: IItemId<ICategoryKey, IItemIndex<ICategoryKey>>,
      isSelected: boolean,
    ) =>
      set((state) => ({
        itemsStates: setItemState(item, isSelected, state.itemsStates),
      })),
  }));
};

type IItemsStore = Awaited<ReturnType<typeof createItemsStore>>;

export type {
  ICategoryWithItems,
  ICategoryKey,
  IItemId,
  IItemsStore,
  IItemsStoreStates,
  IItemsStoreActions,
  IItemIndex,
};
export { categoriesKeys, createItemsStore, createItemId };
