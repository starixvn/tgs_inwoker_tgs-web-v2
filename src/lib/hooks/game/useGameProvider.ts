import { useQuery, useQueryClient } from "@tanstack/react-query";

import { game, GetBrandDto } from "@/service";
import { GetQueryData, QUERY_KEYS } from "@/types";
import { getBrandConfig } from "@/lib";

export const useGameProvider = () => {
  const qc = useQueryClient();
  const brandData = qc.getQueryData([
    QUERY_KEYS.BRAND,
  ]) as GetQueryData<GetBrandDto>;
  const brandCode = brandData?.data.data.code;
  const { currency } = getBrandConfig(brandCode);

  const { isFetching, data } = useQuery({
    queryKey: [QUERY_KEYS.GAME_PROVIDER_LIST, currency],
    queryFn: () => game.getProviderList(currency),
  });

  return {
    isFetching,
    providerList: data ? data.data.data : [],
  };
};
