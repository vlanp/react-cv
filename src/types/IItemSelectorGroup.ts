import type {
  ICategoryKey,
  ICategoryTitle,
  IItemId,
  IItemTitle,
} from "../zustand/useItemsStore";

interface IItem<T extends ICategoryKey> {
  itemId: IItemId<T>;
  itemTitle: IItemTitle<T>;
}

interface IItemSelectorGroup<T extends ICategoryKey> {
  categoryKey: T;
  categoryTitle: ICategoryTitle<T>;
  items: IItem<T>[];
}

export type { IItemSelectorGroup, IItem };
