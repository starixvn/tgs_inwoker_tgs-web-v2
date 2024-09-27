import { useQuery } from "@tanstack/react-query";

import { game } from "@/service";
import { QUERY_KEYS } from "@/types";
import { useBrandConfig } from "@/lib";

export const useGameProvider = () => {
  const { currency } = useBrandConfig();

  const { isFetching, data } = useQuery({
    queryKey: [QUERY_KEYS.GAME_PROVIDER_LIST, currency],
    queryFn: () => game.getProviderList(currency),
  });

  return {
    isFetching,
    providerList: data ? data.data.data : [],
  };
};
