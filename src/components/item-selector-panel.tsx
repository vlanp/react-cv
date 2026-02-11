import type { IItemSelectorGroup } from "../types/IItemSelectorGroup";
import ItemSelectorGroup from "./item-selector-group";
import "./item-selector-panel.css";

const ItemSelectorPanel = ({
  itemSelectorGroupsProps,
}: {
  itemSelectorGroupsProps: IItemSelectorGroup[];
}) => {
  return (
    <div className="item-selector-panel">
      <h1 className="item-selector-panel-title">RiRi</h1>
      <div className="item-selector-groups">
        {itemSelectorGroupsProps.map((itemSelectorGroupProps) => (
          <ItemSelectorGroup itemSelectorGroupProps={itemSelectorGroupProps} />
        ))}
      </div>
    </div>
  );
};

export default ItemSelectorPanel;
