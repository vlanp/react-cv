import { create } from "zustand";
import type { ILanguageItemKey } from "../stackLogos";
import { getBoolean } from "../utils";
import stackLogos from "../stackLogos";

interface ILanguageItemsStoreStates {
  languageItemsStates: Record<ILanguageItemKey, boolean>;
}

interface ILanguageItemsStoreActions {
  setLanguageItemState: (
    languageItemKey: ILanguageItemKey,
    isSelected: boolean,
  ) => void;
}

const setLanguageItemState = (
  languageItemKey: ILanguageItemKey,
  isSelected: boolean,
  languageItemsStates: Record<ILanguageItemKey, boolean>,
) => {
  return {
    ...languageItemsStates,
    [languageItemKey]: isSelected,
  };
};

const getLanguageItemState = (languageItemKey: ILanguageItemKey) => {
  const languageItemTitleValue = localStorage.getItem(languageItemKey);
  try {
    if (languageItemTitleValue) {
      const storedCheckState = getBoolean(languageItemTitleValue);
      return storedCheckState;
    }
    return false;
  } catch {
    return false;
  }
};

const languageItemsKeys = (
  Object.keys(stackLogos) as (keyof typeof stackLogos)[]
).flatMap(
  (languageKey) =>
    Object.keys(stackLogos[languageKey].items) as ILanguageItemKey[],
);

const useLanguageItemsStore = create<
  ILanguageItemsStoreStates & ILanguageItemsStoreActions
>((set) => ({
  languageItemsStates: languageItemsKeys.reduce(
    (acc, languageItemKey) => ({
      ...acc,
      [languageItemKey]: getLanguageItemState(languageItemKey),
    }),
    {} as Record<ILanguageItemKey, boolean>,
  ),
  setLanguageItemState: (languageItemKey, isSelected) =>
    set((state) => ({
      languageItemsStates: setLanguageItemState(
        languageItemKey,
        isSelected,
        state.languageItemsStates,
      ),
    })),
}));

export { useLanguageItemsStore };
