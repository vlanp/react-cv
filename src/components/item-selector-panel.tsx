import { useState } from "react";
import type { IItemSelectorGroup } from "../types/IItemSelectorGroup";
import ItemSelectorGroup from "./item-selector-panel/item-selector-group";
import "./item-selector-panel.css";
import { FaSquareCaretDown } from "react-icons/fa6";
import { FaSquareCaretUp } from "react-icons/fa6";
import type { ICategoryKey } from "../zustand/useItemsStore";

const ItemSelectorPanel = <T extends ICategoryKey>({
  title,
  itemSelectorGroups,
}: {
  title: string;
  itemSelectorGroups: IItemSelectorGroup<T>[];
}) => {
  const [show, setShow] = useState<boolean>(false);

  const handleClick = () => {
    setShow((pv) => !pv);
  };

  return (
    <>
      <div className={"item-selector-panel" + (show ? "" : " hide")}>
        <h1 className="item-selector-panel-title">{title}</h1>
        <div className="item-selector-groups">
          {itemSelectorGroups.map((itemSelectorGroup) => (
            <ItemSelectorGroup
              key={itemSelectorGroup.categoryKey}
              itemSelectorGroup={itemSelectorGroup}
            />
          ))}
        </div>
      </div>
      <p
        className="item-selector small-size-text normal-color-text text-with-icon hover"
        onClick={handleClick}
      >
        {show ? (
          <FaSquareCaretDown className="large-icon" />
        ) : (
          <FaSquareCaretUp className="large-icon" />
        )}
      </p>
    </>
  );
};

export default ItemSelectorPanel;
