import { player } from "@/service";
import { useQuery } from "@tanstack/react-query";
import { useHandleError, useStoreToken } from "@/lib";
import { LOCAL_STORAGE_KEY, QUERY_KEYS } from "@/types";

export const useGetPlayerInfo = () => {
  const { token, clearToken } = useStoreToken();

  const { isFetching, data, isError, error } = useQuery({
    queryKey: [QUERY_KEYS.PLAYER_INFO, token],
    queryFn: () => {
      if (token) {
        return player.getPlayerInfo(token);
      }

      return Promise.resolve(null);
    },
  });

  const onError = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEY.TOKEN);
    clearToken();
  };

  useHandleError({
    onError,
    isError,
    error,
  });

  return {
    data: data ? data?.data.data : undefined,
    isFetching,
  };
};
