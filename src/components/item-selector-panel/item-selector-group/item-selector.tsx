import "./item-selector.css";
import { FaRegSquare } from "react-icons/fa6";
import { FaRegSquareCheck } from "react-icons/fa6";

const ItemSelector = ({
  isSelected,
  handleClick,
  itemTitle,
}: {
  isSelected: boolean;
  handleClick: () => void;
  itemTitle: string;
}) => {
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
      <span className="item-selector-item">{itemTitle}</span>
    </div>
  );
};

export default ItemSelector;
