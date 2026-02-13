import type {
  IAvailableGroupTitle,
  IGroupItem,
  IGroupItemValue,
} from "../zustand/useItemsStore";

interface IItem<T extends IAvailableGroupTitle> {
  itemKey: IGroupItem<T>;
  itemValue: IGroupItemValue<T>;
}

interface IItemSelectorGroup<T extends IAvailableGroupTitle> {
  title: T;
  items: IItem<T>[];
}

export type { IItemSelectorGroup, IItem };
