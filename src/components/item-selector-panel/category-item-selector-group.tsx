import type { ICategoryItemGroup } from "../../types/IPanels";
import type { ICategoryKey } from "../../zustand/createCategoryItemsStore";
import ItemSelectorGroup from "./item-selector-group";
import CategoryItemSelector from "./item-selector-group/category-item-selector";

const CategoryItemSelectorGroup = <T extends ICategoryKey>({
  categoryItemGroup,
}: {
  categoryItemGroup: ICategoryItemGroup<T>;
}) => {
  return (
    <ItemSelectorGroup
      groupTitle={categoryItemGroup.categoryTitle}
      children={categoryItemGroup.categoryItems.map((item) => (
        <CategoryItemSelector key={item.categoryItemId} categoryItem={item} />
      ))}
    />
  );
};

export default CategoryItemSelectorGroup;
