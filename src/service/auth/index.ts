import { ApiResponse, api } from "@/service";
import { LoginDto } from "./types";
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

export const auth = {
  login,
};
