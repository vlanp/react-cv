import type { IDictionary } from "../dictionaries/generated";
import type {
  ICategoryKey,
  IItemId,
  IItemIndex,
} from "../zustand/useItemsStore";

interface IItem<T extends ICategoryKey, K extends IItemIndex<T>> {
  itemId: IItemId<T, K>;
  itemTitle: IDictionary[T]["items"][K] extends { title: infer Title }
    ? Title
    : never;
}

interface IItemSelectorGroup<T extends ICategoryKey, K extends IItemIndex<T>> {
  category: T;
  items: IItem<T, K>[];
}

export type { IItemSelectorGroup, IItem };
