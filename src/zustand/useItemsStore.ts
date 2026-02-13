import { dictionariesKeys, type IDictionary } from "../dictionaries/generated";
import { create } from "zustand";
import { getBoolean } from "../utils";

type IGroup = Extract<keyof IDictionary, `${string}_section`>;

type IGroupTitle = IGroup extends `${infer GroupTitle}_section`
  ? GroupTitle
  : never;

const availablesGroupsTitles = [
  "education",
  "experience",
  "projects",
  "social",
] satisfies IGroupTitle[];

type IAvailableGroupTitle = (typeof availablesGroupsTitles)[number];

type IGroupItem<T extends IGroupTitle> = Extract<
  keyof IDictionary,
  `${T}${number}_title`
>;

type IGroupItemValue<T extends IGroupTitle> = IDictionary[IGroupItem<T>];

function isAvailableGroupItem(
  key: keyof IDictionary,
  title?: IAvailableGroupTitle,
): key is IGroupItem<IAvailableGroupTitle> {
  if (title) {
    return new RegExp(`^${title}\\d+_title`).test(key);
  }
  return availablesGroupsTitles.some((title) =>
    new RegExp(`^${title}\\d+_title`).test(key),
  );
}

const availablesGroupsItems = dictionariesKeys.filter((key) =>
  isAvailableGroupItem(key),
);

interface IItemsStoreStates {
  itemsStates: Record<IGroupItem<IAvailableGroupTitle>, boolean>;
}

interface IItemsStoreActions {
  setItemState: (
    item: IGroupItem<IAvailableGroupTitle>,
    isSelected: boolean,
  ) => void;
}

const setItemState = (
  item: IGroupItem<IAvailableGroupTitle>,
  isSelected: boolean,
  itemsStates: Record<IGroupItem<IAvailableGroupTitle>, boolean>,
) => {
  return {
    ...itemsStates,
    [item]: isSelected,
  };
};

const getItemState = (itemName: string) => {
  const itemValue = localStorage.getItem(itemName);
  try {
    if (itemValue) {
      const storedCheckState = getBoolean(itemValue);
      return storedCheckState;
    }
    return false;
  } catch {
    return false;
  }
};

const useItemsStore = create<IItemsStoreStates & IItemsStoreActions>((set) => ({
  itemsStates: availablesGroupsItems.reduce(
    (acc, key) => {
      acc[key] = getItemState(key);
      return acc;
    },
    {} as Record<IGroupItem<IAvailableGroupTitle>, boolean>,
  ),
  setItemState: (item: IGroupItem<IAvailableGroupTitle>, isSelected: boolean) =>
    set((state) => ({
      itemsStates: setItemState(item, isSelected, state.itemsStates),
    })),
}));

export type {
  IGroup,
  IGroupTitle,
  IGroupItem,
  IAvailableGroupTitle,
  IGroupItemValue,
};
export { availablesGroupsTitles, useItemsStore, isAvailableGroupItem };
