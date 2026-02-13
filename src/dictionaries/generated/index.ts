// Auto-generated index file
import { frDictionary, type IFrDictionary } from './fr';
import { enDictionary, type IEnDictionary } from './en';

export type IDictionary = IFrDictionary | IEnDictionary;

export const dictionariesKeys = [
  ...new Set([...Object.keys(frDictionary),...Object.keys(enDictionary)])
  ] as (keyof IDictionary)[];
