import { getGameProviderDto } from "@/service";
import { QUERY_KEYS, GetQueryData } from "@/types";
import { useQueryClient } from "@tanstack/react-query";
import { useBrandConfig } from "@/lib";

export const useGameProvider = () => {
  const { currency } = useBrandConfig();
  const qc = useQueryClient();
  const data = qc.getQueryData([
    QUERY_KEYS.GAME_PROVIDER_LIST,
    currency,
  ]) as GetQueryData<getGameProviderDto>;

  return data?.data;
};
