import { AxiosResponse } from "axios";

export * from "./template";
export * from "./brand";
export * from "./locales";
export * from "./queryKeys";
export * from "./zustand";
export * from "./auth";
export * from "./currency";
export * from "./timezone";

export type GetQueryData<T> = AxiosResponse<T> | undefined;
