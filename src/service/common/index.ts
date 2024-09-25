import { api, ApiResponse, getHeaders } from "@/service";
import { QueryKeys } from "@/types";
import { GetBrandLanguageDto } from "./types";

const getBrandLanguage = (token?: string): ApiResponse<GetBrandLanguageDto> => {
    if(token) {
        const headers = getHeaders(token);
        return api.get(QueryKeys.BRAND_LANGUAGE, headers)
    }

    return api.get(QueryKeys.BRAND_LANGUAGE);
};

export const common = {
    getBrandLanguage,
}