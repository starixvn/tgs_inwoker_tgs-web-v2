import i18n from "@/i18n";
import { api, ApiResponse } from "..";
import { getGameProviderDto } from "./types";
import { CURRENCY, QUERY_KEYS } from "@/types";

/**
 * @see tgs-web-nx\libs\config\src\config\config.js
 */
const PLATFORMTYPE_PC = 1;

const getProviderList = (
  currency: CURRENCY,
): ApiResponse<getGameProviderDto> => {
  return api.get(
    `${QUERY_KEYS.GAME_PROVIDER_LIST}?platformtype=${PLATFORMTYPE_PC}&language=${i18n.language}&currency=${currency}`,
  );
};

export const game = {
  getProviderList,
};

export * from "./types";
