import { useContext } from "react";
import { useStore } from "zustand";
import type {
  IItemsStoreActions,
  IItemsStoreStates,
} from "../zustand/useItemsStore";
import ItemsContext from "../contexts/ItemsContext";

function useItemsContext<T>(
  selector: (state: IItemsStoreStates & IItemsStoreActions) => T,
): T {
  const itemsStore = useContext(ItemsContext);
  if (!itemsStore) throw new Error("Missing ItemsContext.Provider in the tree");
  return useStore(itemsStore, selector);
}

export default useItemsContext;
