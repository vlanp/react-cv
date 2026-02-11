import { useState } from "react";
import "./item-selector.css";
import { FaRegSquare } from "react-icons/fa6";
import { FaRegSquareCheck } from "react-icons/fa6";

const ItemSelector = ({ itemName }: { itemName: string }) => {
  const [checkState, setCheckState] = useState<boolean>(false);

  const handleClick = () => {
    setCheckState((pv) => !pv);
  };

  return (
    <div
      className="item-selector small-size-text normal-color-text text-with-icon hover"
      onClick={handleClick}
    >
      {checkState ? (
        <FaRegSquareCheck className="icon" />
      ) : (
        <FaRegSquare className="icon" />
      )}
      <span>{itemName}</span>
    </div>
  );
};

export default ItemSelector;
