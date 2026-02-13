import type {
  IAvailableSectionCategory,
  ISectionItemTitleKey,
  ISectionItemTitleValue,
} from "../zustand/useItemsStore";

interface IItemTitle<T extends IAvailableSectionCategory> {
  itemTitleKey: ISectionItemTitleKey<T>;
  itemTitleValue: ISectionItemTitleValue<T>;
}

interface IItemSelectorGroup<T extends IAvailableSectionCategory> {
  category: T;
  itemsTitles: IItemTitle<T>[];
}

export type { IItemSelectorGroup, IItemTitle };
