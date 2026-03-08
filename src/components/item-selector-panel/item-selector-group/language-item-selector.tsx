import type { IStackLogos } from "../../../stackLogos";
import type { ILanguageItem } from "../../../types/IPanels";
import { useLanguageItemsStore } from "../../../zustand/useLanguageItemsStore";
import ItemSelector from "./item-selector";

const LanguageItemSelector = <T extends keyof IStackLogos>({
  languageItem,
}: {
  languageItem: ILanguageItem<T>;
}) => {
  const isSelected = useLanguageItemsStore(
    (state) => state.languageItemsStates[languageItem.languageItemKey],
  );
  const setIsSelected = useLanguageItemsStore(
    (state) => state.setLanguageItemState,
  );

  const handleClick = () => {
    localStorage.setItem(languageItem.languageItemKey, String(!isSelected));
    setIsSelected(languageItem.languageItemKey, !isSelected);
  };

  return (
    <ItemSelector
      isSelected={isSelected}
      handleClick={handleClick}
      itemTitle={languageItem.languageItemKey}
    />
  );
};

export default LanguageItemSelector;
