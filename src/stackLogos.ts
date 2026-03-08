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

const stackLogos = {
  typescript: {
    src: typescriptSrc,
    items: {
      axios: axiosSrc,
      cloudinary: cloudinarySrc,
      expo: expoSrc,
      express: expressSrc,
      mongodb: mongodbSrc,
      nodejs: nodejsSrc,
      reactNative: reactNativeSrc,
      react: reactSrc,
      vite: viteSrc,
      zustand: zustandSrc,
    },
  },
  python: {
    src: pythonSrc,
    items: {
      chatgpt: chatgptSrc,
      customTkinter: customTkinterSrc,
      selenium: seleniumSrc,
      tor: torSrc,
    },
  },
  kotlin: {
    src: kotlinSrc,
    items: {
      hilt: hiltSrc,
      osmdroid: osmdroidSrc,
    },
  },
  other_technos: {
    items: {
      androidStudio: androidStudioSrc,
      android: androidSrc,
      css3: css3Src,
      github: githubSrc,
      html5: html5Src,
      mySqlWorkbench: mySqlWorkbenchSrc,
      netlify: netlifySrc,
      northflank: northflankSrc,
      powerBi: powerBiSrc,
      pycharm: pycharmSrc,
      vscode: vscodeSrc,
    },
  },
};

export type IStackLogos = typeof stackLogos;

export type ILanguageItemKey<T extends keyof IStackLogos = keyof IStackLogos> =
  T extends keyof IStackLogos ? keyof IStackLogos[T]["items"] : never;

export default stackLogos;
