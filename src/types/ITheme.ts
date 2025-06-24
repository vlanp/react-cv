const ETheme = {
  LIGHT: "light",
  DARK: "dark",
} as const;
type ITheme = (typeof ETheme)[keyof typeof ETheme];

export type { ITheme };
export { ETheme };
