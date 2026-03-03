import type { IItemSelectorGroup } from "../types/IItemSelectorGroup";
import type { ICategoryKey, IItemIndex } from "../zustand/useItemsStore";
import ItemSelector from "./item-selector";
import "./item-selector-group.css";

const ItemSelectorGroup = <T extends ICategoryKey, K extends IItemIndex<T>>({
  itemSelectorGroup,
}: {
  itemSelectorGroup: IItemSelectorGroup<T, K>;
}) => {
  return (
    <div className="item-selector-group">
      <h2 className="item-selector-group-title">
        {itemSelectorGroup.category}
      </h2>
      {itemSelectorGroup.items.map((item) => (
        <ItemSelector item={item} />
      ))}
    </div>
  );
};

export default ItemSelectorGroup;
