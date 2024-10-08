import { api, getHeaders } from "@/service";
import { QUERY_KEYS } from "@/types";

const getPromoionList = async (token: string) => {
  const headers = getHeaders(token);
  const response = await api.get(QUERY_KEYS.PROMOTION_LIST, headers);
  return response.data.data;
};

export const promotion = {
  getPromoionList,
};

export * from "./types";
