import type { IDictionary } from "./dictionaries/generated";
import { ELang, type ILang } from "./types/ILang";

const dictionaries = {
  [ELang.EN]: () =>
    import("./dictionaries/generated/en").then((module) => module.enDictionary),
  [ELang.FR]: () =>
    import("./dictionaries/generated/fr").then((module) => module.frDictionary),
} satisfies Record<ILang, () => Promise<IDictionary>>;

export const getDictionaryAsync = async (locale: ILang): Promise<IDictionary> =>
  dictionaries[locale]();
