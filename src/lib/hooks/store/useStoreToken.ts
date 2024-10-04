import { ZustandStore, LOCAL_STORAGE_KEY } from "@/types";
import { create } from "zustand";

export type TokenStore = {
  token: string;
  onChange: (token: string) => void;
  clearToken: () => void;
};

export const useStoreToken: ZustandStore<TokenStore> = create((set) => ({
  token: localStorage.getItem(LOCAL_STORAGE_KEY.TOKEN) ?? "",
  onChange: (token) => set(() => ({ token })),
  clearToken: () => set(() => ({ token: "" })),
}));
