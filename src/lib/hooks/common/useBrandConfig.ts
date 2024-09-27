import { getBrandConfig } from "@/lib";
import { GetBrandDto } from "@/service";
import { QUERY_KEYS, GetQueryData } from "@/types";
import { useQueryClient } from "@tanstack/react-query";

export const useBrandConfig = () => {
  const qc = useQueryClient();
  const brandData = qc.getQueryData([
    QUERY_KEYS.BRAND,
  ]) as GetQueryData<GetBrandDto>;
  const brandCode = brandData?.data.data.code;

  return getBrandConfig(brandCode);
};
