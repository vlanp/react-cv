import type { IItemSelectorGroup } from "../types/IItemSelectorGroup";
import ItemSelector from "./item-selector";
import "./item-selector-group.css";

const ItemSelectorGroup = ({
  itemSelectorGroupProps,
}: {
  itemSelectorGroupProps: IItemSelectorGroup;
}) => {
  return (
    <div className="item-selector-group">
      <h2 className="item-selector-group-title">
        {itemSelectorGroupProps.title}
      </h2>
      {itemSelectorGroupProps.items.map((item) => (
        <ItemSelector itemName={item} />
      ))}
    </div>
  );
};

export default ItemSelectorGroup;
