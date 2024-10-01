import axios, { AxiosResponse } from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const getHeaders = (token: string) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export type ApiResponse<T> = Promise<AxiosResponse<T>>;

export * from "./common";
export * from "./types";
export * from "./game";
export * from "./auth";
