import { ApiResponse, api, getHeaders } from "@/service";
import { LoginDto, LogoutDto } from "./types";
import { QUERY_KEYS } from "@/types";
import { plateformType } from "@/lib";

export type LoginPayload = {
  username: string;
  password: string;
  isRemember: boolean;
};

const login = (payload: LoginPayload): ApiResponse<LoginDto> => {
  return api.post(QUERY_KEYS.LOGIN, {
    username: payload.username,
    password: payload.password,
    platformtype: plateformType,
  });
};

const logout = (token: string): ApiResponse<LogoutDto> => {
  const headers = getHeaders(token);
  return api.delete(QUERY_KEYS.LOGOUT, headers);
};

export const auth = {
  login,
  logout,
};
