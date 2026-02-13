import "./item-selector.css";
import { FaRegSquare } from "react-icons/fa6";
import { FaRegSquareCheck } from "react-icons/fa6";
import {
  useItemsStore,
  type IAvailableGroupTitle,
} from "../zustand/useItemsStore";
import type { IItem } from "../types/IItemSelectorGroup";

const ItemSelector = ({ item }: { item: IItem<IAvailableGroupTitle> }) => {
  const isSelected = useItemsStore((state) => state.itemsStates[item.itemKey]);
  const setIsSelected = useItemsStore((state) => state.setItemState);

  const handleClick = () => {
    localStorage.setItem(item.itemKey, String(!isSelected));
    setIsSelected(item.itemKey, !isSelected);
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
      <span>{item.itemValue}</span>
    </div>
  );
};

export default ItemSelector;
