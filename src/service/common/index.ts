import { api, ApiResponse, getHeaders } from "@/service";
import { QUERY_KEYS } from "@/types";
import { GetBrandDto, GetBrandLanguageDto } from "./types";

const getBrandLanguage = (token?: string): ApiResponse<GetBrandLanguageDto> => {
  if (token) {
    const headers = getHeaders(token);
    return api.get(QUERY_KEYS.BRAND_LANGUAGE, headers);
  }

  return api.get(QUERY_KEYS.BRAND_LANGUAGE);
};

const getBrand = (): ApiResponse<GetBrandDto> => {
  return api.get(QUERY_KEYS.BRAND);
};

export const common = {
  getBrandLanguage,
  getBrand,
};

export * from "./types";
