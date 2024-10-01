import { ApiResponse, api } from "@/service";
import { LoginDto } from "./types";
import { QUERY_KEYS } from "@/types";
import { plateformType } from "@/lib";

export type LoginPayload = {
  username: string;
  password: string;
};

const login = (payload: LoginPayload): ApiResponse<LoginDto> => {
  return api.post(QUERY_KEYS.LOGIN, {
    ...payload,
    platformtype: plateformType,
  });
};

export const auth = {
  login,
};
