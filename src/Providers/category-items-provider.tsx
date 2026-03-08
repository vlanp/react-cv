import { useEffect, useState, type ReactNode } from "react";
import type { ILang } from "../types/ILang";
import AppSkeleton from "../resume-skeleton";
import CategoryItemsContext from "../contexts/CategoryItemsContext";
import {
  createCategoryItemsStore,
  type ICategoryItemsStore,
} from "../zustand/createCategoryItemsStore";

const CategoryItemsProvider = ({
  children,
  lang,
}: {
  children: ReactNode;
  lang: ILang;
}) => {
  const [categoryItemsStore, setCategoryItemsStore] =
    useState<null | ICategoryItemsStore>(null);

  useEffect(() => {
    const updateState = async () => {
      const store = await createCategoryItemsStore(lang);
      setCategoryItemsStore(store);
    };
    updateState();
  }, [lang]);

  if (!categoryItemsStore) {
    return <AppSkeleton />;
  }

  return (
    <CategoryItemsContext.Provider value={categoryItemsStore}>
      {children}
    </CategoryItemsContext.Provider>
  );
};

export default CategoryItemsProvider;
