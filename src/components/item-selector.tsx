import "./item-selector.css";
import { FaRegSquare } from "react-icons/fa6";
import { FaRegSquareCheck } from "react-icons/fa6";
import useItemsContext from "../hooks/useItemsContext";
import type { ICategoryKey } from "../zustand/useItemsStore";
import type { IItem } from "../types/IItemSelectorGroup";

const ItemSelector = <T extends ICategoryKey>({ item }: { item: IItem<T> }) => {
  const isSelected = useItemsContext((state) => state.itemsStates[item.itemId]);
  const setIsSelected = useItemsContext((state) => state.setItemState);

  const handleClick = () => {
    localStorage.setItem(item.itemId, String(!isSelected));
    setIsSelected(item.itemId, !isSelected);
  };

  return (
    <div
      className="item-selector small-size-text normal-color-text text-with-icon hover"
      onClick={handleClick}
    >
      {isSelected ? (
        <FaRegSquareCheck className="icon" />
      ) : (
        <FaRegSquare className="icon" />
      )}
      <span className="item-selector-item">{item.itemTitle}</span>
    </div>
  );
};

export default ItemSelector;
