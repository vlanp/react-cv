import { createContext } from "react";
import { type IItemsStore } from "../zustand/useItemsStore";

export const ItemsContext = createContext<IItemsStore | null>(null);

export default ItemsContext;
