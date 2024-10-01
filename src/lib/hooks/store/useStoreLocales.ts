import { LOCALES, ZustandStore } from "@/types";
import { create } from "zustand";

export type LocalesStore = {
  locale: LOCALES;
  onChange: (locale: LOCALES) => void;
};

export const useStoreLocales: ZustandStore<LocalesStore> = create((set) => ({
  locale: (localStorage.getItem("i18nextLng") as LOCALES) ?? LOCALES.EN,
  onChange: (locale) =>
    set(() => {
      localStorage.setItem("i18nextLng", locale);
      return { locale };
    }),
}));
