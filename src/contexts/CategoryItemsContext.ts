import { createContext } from "react";
import type { ICategoryItemsStore } from "../zustand/createCategoryItemsStore";

export const CategoryItemsContext = createContext<ICategoryItemsStore | null>(
  null,
);

export default CategoryItemsContext;
