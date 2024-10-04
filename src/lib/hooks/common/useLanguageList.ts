import { GetBrandLanguageDto } from "@/service";
import { QUERY_KEYS, GetQueryData } from "@/types";
import { useQueryClient } from "@tanstack/react-query";

export const useLanguageList = () => {
  const qc = useQueryClient();
  const data = qc.getQueryData([
    QUERY_KEYS.BRAND_LANGUAGE,
  ]) as GetQueryData<GetBrandLanguageDto>;

  return data?.data.data;
};
