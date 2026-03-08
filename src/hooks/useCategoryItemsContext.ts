import { useContext } from "react";
import { useStore } from "zustand";
import CategoryItemsContext from "../contexts/CategoryItemsContext";
import type {
  ICategoryItemsStoreStates,
  ICategoryItemsStoreActions,
} from "../zustand/createCategoryItemsStore";

function useCategoryItemsContext<T>(
  selector: (
    state: ICategoryItemsStoreStates & ICategoryItemsStoreActions,
  ) => T,
): T {
  const categoryItemsStore = useContext(CategoryItemsContext);
  if (!categoryItemsStore)
    throw new Error("Missing CategoryItemsContext.Provider in the tree");
  return useStore(categoryItemsStore, selector);
}

export default useCategoryItemsContext;
