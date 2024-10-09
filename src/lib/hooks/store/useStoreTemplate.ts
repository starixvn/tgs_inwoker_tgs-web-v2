import { LOCAL_STORAGE_KEY, TEMPLATE, ZustandStore } from "@/types";
import { create } from "zustand";

export type TemplateStore = {
  template: TEMPLATE;
  onChange: (template: TEMPLATE) => void;
};

export const useStoreTemplate: ZustandStore<TemplateStore> = create((set) => ({
  template:
    (localStorage.getItem(LOCAL_STORAGE_KEY.TEMPLATE) as TEMPLATE) ??
    TEMPLATE.TWENTY_NIGHT,
  onChange: (template) =>
    set(() => {
      return { template };
    }),
}));
