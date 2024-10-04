import { common } from "@/service";
import { QUERY_KEYS } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { useGetPlayerInfo, useGetWallet } from "@/lib";

export const useInitBrand = () => {
  const { isFetching } = useQuery({
    queryKey: [QUERY_KEYS.BRAND],
    queryFn: () => common.getBrand(),
  });
  const getPlayerInfo = useGetPlayerInfo();
  const getWallet = useGetWallet();

  return {
    isFetching: isFetching || getPlayerInfo.isFetching || getWallet.isFetching,
  };
};
