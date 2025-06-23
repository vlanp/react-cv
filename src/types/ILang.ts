const ELang = {
  FR: "fr",
  EN: "en",
} as const;
type ILang = (typeof ELang)[keyof typeof ELang];

export type { ILang };
export { ELang };
