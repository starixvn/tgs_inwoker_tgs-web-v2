import { GetBrandDto } from "@/service";
import { QUERY_KEYS, GetQueryData } from "@/types";
import { useQueryClient } from "@tanstack/react-query";

export const useBrandData = () => {
  const qc = useQueryClient();
  const brandData = qc.getQueryData([
    QUERY_KEYS.BRAND,
  ]) as GetQueryData<GetBrandDto>;

  return brandData?.data;
};
