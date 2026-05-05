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
  "soft_skills",
] satisfies ICategoryKey[];

type ICategoryItemIndex<T extends ICategoryKey = ICategoryKey> = Extract<
  keyof IDictionary[T]["items"],
  string
>;

type ICategoryItemId<T extends ICategoryKey = ICategoryKey> =
  T extends ICategoryKey ? `${T}_${ICategoryItemIndex<T>}` : never;

const createCategoryItemId = <T extends ICategoryKey>(
  categoryKey: T,
  categoryItemIndex: ICategoryItemIndex<T>,
): ICategoryItemId<T> =>
  `${categoryKey}_${categoryItemIndex}` as ICategoryItemId<T>;

type ICategoryItemTitle<T extends ICategoryKey> =
  IDictionary[T]["items"][ICategoryItemIndex<T>] extends {
    title: infer Title;
  }
    ? Title & string
    : never;

interface ICategoryItemsStoreStates {
  categoryItemsStates: Record<ICategoryItemId, boolean>;
}

interface ICategoryItemsStoreActions {
  setCategoryItemState: (
    categoryItemId: ICategoryItemId,
    isSelected: boolean,
  ) => void;
}

const setCategoryItemState = (
  categoryItem: ICategoryItemId,
  isSelected: boolean,
  categoryItemsStates: Record<ICategoryItemId, boolean>,
) => {
  return {
    ...categoryItemsStates,
    [categoryItem]: isSelected,
  };
};

const getCategoryItemState = (categoryItemId: ICategoryItemId) => {
  const categoryItemTitleValue = localStorage.getItem(categoryItemId);
  try {
    if (categoryItemTitleValue) {
      const storedCheckState = getBoolean(categoryItemTitleValue);
      return storedCheckState;
    }
    return false;
  } catch {
    return false;
  }
};

const createCategoryItemsStore = async (lang: ILang) => {
  const dictionary = await getDictionaryAsync(lang);
  const categoryItemsIds: ICategoryItemId[] = [];
  for (const categoryKey of categoriesKeys) {
    const indexes = Object.keys(
      dictionary[categoryKey]["items"],
    ) as ICategoryItemIndex[];
    indexes.forEach((index) =>
      categoryItemsIds.push(createCategoryItemId(categoryKey, index)),
    );
  }
  return createStore<ICategoryItemsStoreStates & ICategoryItemsStoreActions>(
    (set) => ({
      categoryItemsStates: categoryItemsIds.reduce(
        (acc, key) => {
          acc[key] = getCategoryItemState(key);
          return acc;
        },
        {} as Record<ICategoryItemId<ICategoryKey>, boolean>,
      ),
      setCategoryItemState: (
        categoryItemId: ICategoryItemId<ICategoryKey>,
        isSelected: boolean,
      ) =>
        set((state) => ({
          categoryItemsStates: setCategoryItemState(
            categoryItemId,
            isSelected,
            state.categoryItemsStates,
          ),
        })),
    }),
  );
};

type ICategoryItemsStore = Awaited<ReturnType<typeof createCategoryItemsStore>>;

export type {
  ICategoryWithItems,
  ICategoryKey,
  ICategoryTitle,
  ICategoryItemId,
  ICategoryItemTitle,
  ICategoryItemsStore,
  ICategoryItemsStoreStates,
  ICategoryItemsStoreActions,
  ICategoryItemIndex,
};
export { categoriesKeys, createCategoryItemsStore, createCategoryItemId };
