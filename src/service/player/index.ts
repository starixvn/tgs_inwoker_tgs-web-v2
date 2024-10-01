import { QUERY_KEYS } from "@/types";
import { api, ApiResponse, getHeaders } from "@/service";
import { GetPlayerInfoDto } from "./types";

const getPlayerInfo = (token: string): ApiResponse<GetPlayerInfoDto> => {
  const headers = getHeaders(token);
  return api.get(QUERY_KEYS.PLAYER_INFO, headers);
};

export const player = {
  getPlayerInfo,
};
