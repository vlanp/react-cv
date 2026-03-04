import type { IItemSelectorGroup } from "../types/IItemSelectorGroup";
import type { ICategoryKey } from "../zustand/useItemsStore";
import ItemSelector from "./item-selector";
import "./item-selector-group.css";

const ItemSelectorGroup = <T extends ICategoryKey>({
  itemSelectorGroup,
}: {
  itemSelectorGroup: IItemSelectorGroup<T>;
}) => {
  return (
    <div className="item-selector-group">
      <h2 className="item-selector-group-title">
        {itemSelectorGroup.categoryTitle}
      </h2>
      {itemSelectorGroup.items.map((item) => (
        <ItemSelector key={item.itemId} item={item} />
      ))}
    </div>
  );
};

export default ItemSelectorGroup;
