import type {
  ICategoryItemId,
  ICategoryItemTitle,
  ICategoryKey,
  ICategoryTitle,
} from "../zustand/createCategoryItemsStore";

interface ICategoryItem<T extends ICategoryKey> {
  categoryItemId: ICategoryItemId<T>;
  categoryItemTitle: ICategoryItemTitle<T>;
}

interface ICategoryItemGroup<T extends ICategoryKey> {
  categoryKey: T;
  categoryTitle: ICategoryTitle<T>;
  categoryItems: ICategoryItem<T>[];
}

interface ICategoryItemPanel {
  panelTitle: string;
  categoryItemGroups: ICategoryItemGroup<ICategoryKey>[];
}

type IPanels = ICategoryItemPanel;

export type { ICategoryItemGroup, ICategoryItem, ICategoryItemPanel, IPanels };
