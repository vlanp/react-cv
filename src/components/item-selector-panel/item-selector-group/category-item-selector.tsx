import useCategoryItemsContext from "../../../hooks/useCategoryItemsContext";
import type { ICategoryItem } from "../../../types/IPanels";
import type { ICategoryKey } from "../../../zustand/createCategoryItemsStore";
import ItemSelector from "./item-selector";

const CategoryItemSelector = <T extends ICategoryKey>({
  categoryItem,
}: {
  categoryItem: ICategoryItem<T>;
}) => {
  const isSelected = useCategoryItemsContext(
    (state) => state.categoryItemsStates[categoryItem.categoryItemId],
  );
  const setIsSelected = useCategoryItemsContext(
    (state) => state.setCategoryItemState,
  );

  const handleClick = () => {
    localStorage.setItem(categoryItem.categoryItemId, String(!isSelected));
    setIsSelected(categoryItem.categoryItemId, !isSelected);
  };

  return (
    <ItemSelector
      isSelected={isSelected}
      handleClick={handleClick}
      itemTitle={categoryItem.categoryItemTitle}
    />
  );
};

export type ICategoryItemSelector = typeof CategoryItemSelector;

export default CategoryItemSelector;
