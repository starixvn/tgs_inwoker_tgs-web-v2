import { api, ApiResponse, getHeaders } from "@/service";
import { QUERY_KEYS } from "@/types";
import { GetBrandDto, GetBrandLanguageDto, GetSocialMediaDto } from "./types";

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

const getSocialMedia = (): ApiResponse<GetSocialMediaDto> => {
  return api.get(QUERY_KEYS.SOCIAL_MEDIA);
};

export const common = {
  getBrandLanguage,
  getBrand,
  getSocialMedia,
};

export * from "./types";
