import "./item-selector.css";
import { FaRegSquare } from "react-icons/fa6";
import { FaRegSquareCheck } from "react-icons/fa6";
import {
  useItemsStore,
  type IAvailableSectionCategory,
} from "../zustand/useItemsStore";
import type { IItemTitle } from "../types/IItemSelectorGroup";

const ItemSelector = ({
  itemTitle,
}: {
  itemTitle: IItemTitle<IAvailableSectionCategory>;
}) => {
  const isSelected = useItemsStore(
    (state) => state.itemsStates[itemTitle.itemTitleKey],
  );
  const setIsSelected = useItemsStore((state) => state.setItemState);

  const handleClick = () => {
    localStorage.setItem(itemTitle.itemTitleKey, String(!isSelected));
    setIsSelected(itemTitle.itemTitleKey, !isSelected);
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
      <span className="item-selector-item">{itemTitle.itemTitleValue}</span>
    </div>
  );
};

export default ItemSelector;
