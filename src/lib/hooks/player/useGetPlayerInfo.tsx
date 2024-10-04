import { ApiResponseError, player } from "@/service";
import { useQuery } from "@tanstack/react-query";
import { useHandleError, useStoreToken } from "@/lib";
import { LOCAL_STORAGE_KEY, QUERY_KEYS } from "@/types";
import { useEffect } from "react";

export const useGetPlayerInfo = () => {
  const { token, clearToken } = useStoreToken();
  const { handleError } = useHandleError();
  const { isFetching, data, isError, error } = useQuery({
    queryKey: [QUERY_KEYS.PLAYER_INFO, token],
    queryFn: () => {
      if (token) {
        return player.getPlayerInfo(token);
      }

      return Promise.resolve(null);
    },
  });

  useEffect(() => {
    if (isError) {
      localStorage.removeItem(LOCAL_STORAGE_KEY.TOKEN);
      clearToken();
      handleError(error as ApiResponseError);
    }
  }, [isError]);

  return {
    data: data ? data?.data.data : undefined,
    isFetching,
  };
};
