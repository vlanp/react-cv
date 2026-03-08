import type { IStackLogos } from "../../stackLogos";
import type { ILanguageItemGroup } from "../../types/IPanels";
import ItemSelectorGroup from "./item-selector-group";
import LanguageItemSelector from "./item-selector-group/language-item-selector";

const LanguageItemSelectorGroup = <T extends keyof IStackLogos>({
  languageItemGroup,
}: {
  languageItemGroup: ILanguageItemGroup<T>;
}) => {
  return (
    <ItemSelectorGroup
      groupTitle={languageItemGroup.languageTitle}
      children={languageItemGroup.languageItems.map((item) => (
        <LanguageItemSelector key={item.languageItemKey} languageItem={item} />
      ))}
    />
  );
};

export default LanguageItemSelectorGroup;
