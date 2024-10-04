import { LOCAL_STORAGE_KEY } from "@/types";
import axios, { AxiosResponse } from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Token: localStorage.getItem(LOCAL_STORAGE_KEY.TOKEN) ?? "",
  },
});

export const getHeaders = (token: string) => {
  return {
    headers: {
      Token: token,
    },
  };
};

export type ApiResponse<T> = Promise<AxiosResponse<T>>;

export * from "./common";
export * from "./types";
export * from "./game";
export * from "./auth";
export * from "./player";
