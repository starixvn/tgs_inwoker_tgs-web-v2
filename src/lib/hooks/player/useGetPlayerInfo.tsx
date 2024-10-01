import { player } from "@/service";
import { useQuery } from "@tanstack/react-query";
import { useStoreToken } from "@/lib";
import { QUERY_KEYS } from "@/types";

export const useGetPlayerInfo = () => {
  const { token } = useStoreToken();
  const { isFetching, data } = useQuery({
    queryKey: [QUERY_KEYS.PLAYER_INFO, token],
    queryFn: () => {
      if (token) {
        return player.getPlayerInfo(token);
      }

      return Promise.resolve(null);
    },
  });

  return {
    data: data ? data?.data.data : undefined,
    isFetching,
  };
};
