import { useQuery } from "@tanstack/react-query";

import { game } from "@/service";
import { QUERY_KEYS } from "@/types";
import { useBrandConfig, useHandleError } from "@/lib";

export const useGetGameProvider = () => {
  const { currency } = useBrandConfig();

  const { isFetching, isError, error } = useQuery({
    queryKey: [QUERY_KEYS.GAME_PROVIDER_LIST, currency],
    queryFn: () => game.getProviderList(currency),
  });

  useHandleError({
    isError,
    error,
  });

  return {
    isFetching,
  };
};
