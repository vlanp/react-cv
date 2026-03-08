import "./item-selector-group.css";
import type { ICategoryItemSelector } from "./item-selector-group/category-item-selector";

const ItemSelectorGroup = ({
  groupTitle,
  children,
}: {
  groupTitle: string;
  children: ReturnType<ICategoryItemSelector>[];
}) => {
  return (
    <div className="item-selector-group">
      <h2 className="item-selector-group-title">{groupTitle}</h2>
      {children}
    </div>
  );
};

export default ItemSelectorGroup;
