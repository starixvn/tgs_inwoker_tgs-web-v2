import { ZustandStore } from "@/types";
import { create } from "zustand";

export type TokenStore = {
  token: string;
  onChange: (token: string) => void;
};

export const useStoreToken: ZustandStore<TokenStore> = create((set) => ({
  token: "",
  onChange: (token) => set(() => ({ token })),
}));
