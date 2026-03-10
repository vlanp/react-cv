import typescriptSrc from "./assets/stackLogos/typescript.png";
import axiosSrc from "./assets/stackLogos/typescript/axios.png";
import cloudinarySrc from "./assets/stackLogos/typescript/cloudinary.png";
import expoSrc from "./assets/stackLogos/typescript/expo.png";
import expressSrc from "./assets/stackLogos/typescript/express.png";
import mongodbSrc from "./assets/stackLogos/typescript/mongodb.png";
import nodejsSrc from "./assets/stackLogos/typescript/nodejs.png";
import reactNativeSrc from "./assets/stackLogos/typescript/react-native.png";
import reactSrc from "./assets/stackLogos/typescript/react.png";
import viteSrc from "./assets/stackLogos/typescript/vite.png";
import zustandSrc from "./assets/stackLogos/typescript/zustand.png";

import pythonSrc from "./assets/stackLogos/python.png";
import chatgptSrc from "./assets/stackLogos/python/chatgpt.png";
import customTkinterSrc from "./assets/stackLogos/python/custom-tkinter.png";
import seleniumSrc from "./assets/stackLogos/python/selenium.png";
import torSrc from "./assets/stackLogos/python/tor.png";

import kotlinSrc from "./assets/stackLogos/kotlin.png";
import hiltSrc from "./assets/stackLogos/kotlin/hilt.png";
import osmdroidSrc from "./assets/stackLogos/kotlin/osmdroid.png";

import androidStudioSrc from "./assets/stackLogos/others/android-studio.png";
import androidSrc from "./assets/stackLogos/others/android.png";
import css3Src from "./assets/stackLogos/others/css3.png";
import githubSrc from "./assets/stackLogos/others/github.png";
import html5Src from "./assets/stackLogos/others/html5.png";
import mySqlWorkbenchSrc from "./assets/stackLogos/others/mysql-workbench.png";
import netlifySrc from "./assets/stackLogos/others/netlify.png";
import northflankSrc from "./assets/stackLogos/others/northflank.png";
import powerBiSrc from "./assets/stackLogos/others/power-bi.png";
import pycharmSrc from "./assets/stackLogos/others/pycharm.png";
import vscodeSrc from "./assets/stackLogos/others/vscode.png";

// TODO Resolve issue with conditional distributive types

const stackLogos = {
  typescript: {
    src: typescriptSrc,
    items: {
      axios: { src: axiosSrc, size: "medium" },
      cloudinary: { src: cloudinarySrc, size: "medium" },
      expo: { src: expoSrc, size: "medium" },
      express: { src: expressSrc, size: "medium" },
      mongodb: { src: mongodbSrc, size: "medium" },
      nodejs: { src: nodejsSrc, size: "medium" },
      reactNative: { src: reactNativeSrc, size: "medium" },
      react: { src: reactSrc, size: "medium" },
      vite: { src: viteSrc, size: "medium" },
      zustand: { src: zustandSrc, size: "medium" },
    },
  },
  python: {
    src: pythonSrc,
    items: {
      chatgpt: { src: chatgptSrc, size: "medium" },
      customTkinter: { src: customTkinterSrc, size: "medium" },
      selenium: { src: seleniumSrc, size: "medium" },
      tor: { src: torSrc, size: "medium" },
    },
  },
  kotlin: {
    src: kotlinSrc,
    items: {
      hilt: { src: hiltSrc, size: "medium" },
      osmdroid: { src: osmdroidSrc, size: "medium" },
    },
  },
  other_technos: {
    items: {
      androidStudio: { src: androidStudioSrc, size: "medium" },
      android: { src: androidSrc, size: "medium" },
      css3: { src: css3Src, size: "little" },
      github: { src: githubSrc, size: "medium" },
      html5: { src: html5Src, size: "little" },
      mySqlWorkbench: { src: mySqlWorkbenchSrc, size: "medium" },
      netlify: { src: netlifySrc, size: "medium" },
      northflank: { src: northflankSrc, size: "medium" },
      powerBi: { src: powerBiSrc, size: "medium" },
      pycharm: { src: pycharmSrc, size: "medium" },
      vscode: { src: vscodeSrc, size: "medium" },
    },
  },
};

export type IStackLogos = typeof stackLogos;

export type ILanguageItems<T extends keyof IStackLogos = keyof IStackLogos> =
  T extends keyof IStackLogos ? IStackLogos[T]["items"] : never;

// export type ILanguageItems2<T extends keyof IStackLogos = keyof IStackLogos> = {
//   [P in T]: IStackLogos[T]["items"];
// }[T];

export type ILanguageItemKey<T extends keyof IStackLogos = keyof IStackLogos> =
  T extends keyof IStackLogos ? keyof ILanguageItems<T> : never;

// export type ILanguageItemKey2<T extends keyof IStackLogos = keyof IStackLogos> =
//   { [P in T]: keyof ILanguageItems2<T> }[T];

// type IObj<T extends keyof IStackLogos = keyof IStackLogos> = T extends keyof IStackLogos ? ILanguageItems2<T>[ILanguageItemKey2<T>] : never;

// const riri: IObj
// riri.src // ok

// const test = <T extends keyof IStackLogos>(
//   languageKey: T,
//   languageItemKey: ILanguageItemKey2<T>,
// ) => {
//   const toto: ILanguageItems2<T> = stackLogos[languageKey].items;

//   const titi: IObj<T> = toto[languageItemKey]; // Impossible d'assigner le type 'ILanguageItems2<T>[ILanguageItemKey2<T>]' au type 'IObj<T>'.
//   const milou = toto[languageItemKey].src // La propriété 'src' n'existe pas sur le type 'ILanguageItems2<T>[ILanguageItemKey2<T>]'.
// };

// const toto: ILanguageItems2<"typescript"> = stackLogos.typescript.items;

// const tate: ILanguageItemKey2<"typescript"> = "axios";

// const titi = toto[tate].src; // ok

export default stackLogos;
