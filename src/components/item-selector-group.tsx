import type { IItemSelectorGroup } from "../types/IItemSelectorGroup";
import type { IAvailableSectionCategory } from "../zustand/useItemsStore";
import ItemSelector from "./item-selector";
import "./item-selector-group.css";

const ItemSelectorGroup = <T extends IAvailableSectionCategory>({
  itemSelectorGroup,
}: {
  itemSelectorGroup: IItemSelectorGroup<T>;
}) => {
  return (
    <div className="item-selector-group">
      <h2 className="item-selector-group-title">
        {itemSelectorGroup.category}
      </h2>
      {itemSelectorGroup.itemsTitles.map((itemTitle) => (
        <ItemSelector itemTitle={itemTitle} />
      ))}
    </div>
  );
};

export default ItemSelectorGroup;
