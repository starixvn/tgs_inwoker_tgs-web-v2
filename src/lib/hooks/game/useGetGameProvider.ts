import { useQuery } from "@tanstack/react-query";

import { game } from "@/service";
import { QUERY_KEYS } from "@/types";
import { useBrandConfig } from "@/lib";

export const useGetGameProvider = () => {
  const { currency } = useBrandConfig();

  const { isFetching } = useQuery({
    queryKey: [QUERY_KEYS.GAME_PROVIDER_LIST, currency],
    queryFn: () => game.getProviderList(currency),
  });

  return {
    isFetching,
  };
};
