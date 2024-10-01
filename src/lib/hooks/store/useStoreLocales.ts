import { LOCALES, ZustandStore, LOCAL_STORAGE_KEY } from "@/types";
import { create } from "zustand";

export type LocalesStore = {
  locale: LOCALES;
  onChange: (locale: LOCALES) => void;
};

export const useStoreLocales: ZustandStore<LocalesStore> = create((set) => ({
  locale:
    (localStorage.getItem(LOCAL_STORAGE_KEY.i18n) as LOCALES) ?? LOCALES.EN,
  onChange: (locale) =>
    set(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY.i18n, locale);
      return { locale };
    }),
}));
