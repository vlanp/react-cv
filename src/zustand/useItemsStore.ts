import { dictionariesKeys, type IDictionary } from "../dictionaries/generated";
import { create } from "zustand";
import { getBoolean } from "../utils";

type ISectionKey = Extract<keyof IDictionary, `${string}_section`>;

type ISectionCategory = ISectionKey extends `${infer SectionCategory}_section`
  ? SectionCategory
  : never;

const availablesSectionsCategories = [
  "education",
  "experience",
  "projects",
  "social",
] satisfies ISectionCategory[];

type IAvailableSectionCategory = (typeof availablesSectionsCategories)[number];

type ISectionItemTitleKey<T extends ISectionCategory> = Extract<
  keyof IDictionary,
  `${T}${number}_title`
>;

type ISectionItemTitleValue<T extends ISectionCategory> =
  IDictionary[ISectionItemTitleKey<T>];

function isAvailableSectionItemTitleKey(
  key: keyof IDictionary,
  title?: IAvailableSectionCategory,
): key is ISectionItemTitleKey<IAvailableSectionCategory> {
  if (title) {
    return new RegExp(`^${title}\\d+_title`).test(key);
  }
  return availablesSectionsCategories.some((title) =>
    new RegExp(`^${title}\\d+_title`).test(key),
  );
}

const availablesSectionsItemsTitlesKeys = dictionariesKeys.filter((key) =>
  isAvailableSectionItemTitleKey(key),
);

interface IItemsStoreStates {
  itemsStates: Record<ISectionItemTitleKey<IAvailableSectionCategory>, boolean>;
}

interface IItemsStoreActions {
  setItemState: (
    item: ISectionItemTitleKey<IAvailableSectionCategory>,
    isSelected: boolean,
  ) => void;
}

const setItemState = (
  item: ISectionItemTitleKey<IAvailableSectionCategory>,
  isSelected: boolean,
  itemsStates: Record<ISectionItemTitleKey<IAvailableSectionCategory>, boolean>,
) => {
  return {
    ...itemsStates,
    [item]: isSelected,
  };
};

const getItemState = (itemTitleKey: string) => {
  const itemTitleValue = localStorage.getItem(itemTitleKey);
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

const useItemsStore = create<IItemsStoreStates & IItemsStoreActions>((set) => ({
  itemsStates: availablesSectionsItemsTitlesKeys.reduce(
    (acc, key) => {
      acc[key] = getItemState(key);
      return acc;
    },
    {} as Record<ISectionItemTitleKey<IAvailableSectionCategory>, boolean>,
  ),
  setItemState: (
    item: ISectionItemTitleKey<IAvailableSectionCategory>,
    isSelected: boolean,
  ) =>
    set((state) => ({
      itemsStates: setItemState(item, isSelected, state.itemsStates),
    })),
}));

export type {
  ISectionKey,
  ISectionCategory,
  ISectionItemTitleKey,
  IAvailableSectionCategory,
  ISectionItemTitleValue,
};
export {
  availablesSectionsCategories,
  useItemsStore,
  isAvailableSectionItemTitleKey,
};
