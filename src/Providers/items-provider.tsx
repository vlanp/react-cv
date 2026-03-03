import { useEffect, useState, type ReactNode } from "react";
import type { ILang } from "../types/ILang";
import { createItemsStore, type IItemsStore } from "../zustand/useItemsStore";
import AppSkeleton from "../resume-skeleton";
import ItemsContext from "../contexts/ItemsContext";

const ItemsProvider = ({
  children,
  lang,
}: {
  children: ReactNode;
  lang: ILang;
}) => {
  const [itemsStore, setItemsStore] = useState<null | IItemsStore>(null);

  useEffect(() => {
    const updateState = async () => {
      const store = await createItemsStore(lang);
      setItemsStore(store);
    };
    updateState();
  }, [lang]);

  if (!itemsStore) {
    return <AppSkeleton />;
  }

  return (
    <ItemsContext.Provider value={itemsStore}>{children}</ItemsContext.Provider>
  );
};

export default ItemsProvider;
