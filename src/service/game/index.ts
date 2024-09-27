import i18n from "@/i18n";
import { api, ApiResponse } from "..";
import { getGameProviderDto, PLATEFORM_TYPE } from "./types";
import { CURRENCY, QUERY_KEYS } from "@/types";
import { isMobileOnly } from "react-device-detect";

const getProviderList = (
  currency: CURRENCY,
): ApiResponse<getGameProviderDto> => {
  const plateformType = isMobileOnly
    ? PLATEFORM_TYPE.MOBILE
    : PLATEFORM_TYPE.PC;

  return api.get(
    `${QUERY_KEYS.GAME_PROVIDER_LIST}?platformtype=${plateformType}&language=${i18n.language}&currency=${currency}`,
  );
};

export const game = {
  getProviderList,
};

export * from "./types";
