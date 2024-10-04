import { api, ApiResponse, getHeaders } from "@/service";
import { GetWalletDto } from "./types";
import { QUERY_KEYS } from "@/types";

const getWallet = (token: string): ApiResponse<GetWalletDto> => {
  const headers = getHeaders(token);
  return api.get(QUERY_KEYS.WALLET, headers);
};

export const wallet = {
  getWallet,
};

export * from "./types";
