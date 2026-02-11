import { useEffect, useState } from "react";
import "./item-selector.css";
import { FaRegSquare } from "react-icons/fa6";
import { FaRegSquareCheck } from "react-icons/fa6";
import { getBoolean } from "../utils";

const ItemSelector = ({ itemName }: { itemName: string }) => {
  const [checkState, setCheckState] = useState<boolean>(false);

  const handleClick = () => {
    localStorage.setItem(itemName, String(!checkState));
    setCheckState((pv) => !pv);
  };

  useEffect(() => {
    const itemValue = localStorage.getItem(itemName);
    try {
      if (itemValue) {
        const storedCheckState = getBoolean(itemValue);
        setCheckState(storedCheckState);
      }
    } catch {
      setCheckState(false);
    }
  }, [itemName]);

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
