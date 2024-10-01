import i18n, { InitOptions } from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import { LOCAL_STORAGE_KEY, LOCALES } from "./types";
/**
 * @todo 確認是否需要檢查瀏覽器語言
 */
// import LanguageDetector from "i18next-browser-languagedetector";

//localstorage language
const language = localStorage.getItem(LOCAL_STORAGE_KEY.i18n);
const options: InitOptions = {
  backend: {
    loadPath: `./locales/{{lng}}.json`,
  },
  fallbackLng: [language || LOCALES.EN],
  interpolation: {
    escapeValue: false,
    formatSeparator: ".",
  },
  debug: false,
};

i18n
  // .use(LanguageDetector)
  .use(HttpBackend)
  .use(initReactI18next)
  .init(options);

export default i18n;
