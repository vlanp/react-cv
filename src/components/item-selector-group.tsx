import type { IItemSelectorGroup } from "../types/IItemSelectorGroup";
import type { IAvailableGroupTitle } from "../zustand/useItemsStore";
import ItemSelector from "./item-selector";
import "./item-selector-group.css";

const ItemSelectorGroup = <T extends IAvailableGroupTitle>({
  itemSelectorGroupProps,
}: {
  itemSelectorGroupProps: IItemSelectorGroup<T>;
}) => {
  return (
    <div className="item-selector-group">
      <h2 className="item-selector-group-title">
        {itemSelectorGroupProps.title}
      </h2>
      {itemSelectorGroupProps.items.map((item) => (
        <ItemSelector item={item} />
      ))}
    </div>
  );
};

export default ItemSelectorGroup;
