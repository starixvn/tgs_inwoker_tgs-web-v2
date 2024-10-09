import { ROUTES } from "@/types";

export * from "./template";
export * from "./brand";
export * from "./locales";
export * from "./queryKeys";
export * from "./zustand";
export * from "./auth";
export * from "./currency";
export * from "./timezone";
export * from "./game";
export * from "./routes";
export * from "./socialMedia";
export * from "./localStorage";

export type GetQueryData<T> = T | undefined;

export type MenuItem = {
  url: ROUTES;
  title: string;
  icon: React.ReactNode;
};
