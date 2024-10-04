import { GetPlayerInfoDto } from "@/service";
import { QUERY_KEYS, GetQueryData } from "@/types";
import { useQueryClient } from "@tanstack/react-query";
import { useStoreToken } from "@/lib";

export const usePlayerInfo = () => {
  const { token } = useStoreToken();
  const qc = useQueryClient();
  const data = qc.getQueryData([
    QUERY_KEYS.PLAYER_INFO,
    token,
  ]) as GetQueryData<GetPlayerInfoDto>;

  return data?.data.data;
};
