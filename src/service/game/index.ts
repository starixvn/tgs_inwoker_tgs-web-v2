import i18n from "@/i18n";
import { api, ApiResponse } from "@/service";
import { getGameProviderDto } from "./types";
import { CURRENCY, QUERY_KEYS } from "@/types";
import { plateformType } from "@/lib";

const getProviderList = (
  currency: CURRENCY,
): ApiResponse<getGameProviderDto> => {
  return api.get(
    `${QUERY_KEYS.GAME_PROVIDER_LIST}?platformtype=${plateformType}&language=${i18n.language}&currency=${currency}`,
  );
};

export const game = {
  getProviderList,
};

export * from "./types";
