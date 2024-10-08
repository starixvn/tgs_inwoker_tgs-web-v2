import { LOCAL_STORAGE_KEY } from "@/types";
import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.PROD ? "/api/" : import.meta.env.VITE_API_URL,
  headers: {
    Token: localStorage.getItem(LOCAL_STORAGE_KEY.TOKEN) ?? "",
  },
});

api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response) {
      console.error("伺服器回應錯誤:", error.response.data);
      return Promise.reject(error.response.data);
    } else if (error.request) {
      console.error("請求沒有回應:", error.request);
    } else {
      console.error("錯誤:", error.message);
    }
    return Promise.reject(error);
  },
);

export const getHeaders = (token: string) => {
  return {
    headers: {
      Token: token,
    },
  };
};

export type ApiResponse<T> = Promise<T>;

export * from "./common";
export * from "./types";
export * from "./game";
export * from "./auth";
export * from "./player";
export * from "./wallet";
