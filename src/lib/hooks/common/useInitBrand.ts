import { common } from "@/service";
import { QUERY_KEYS } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { useGetPlayerInfo } from "@/lib";

export const useInitBrand = () => {
  const playerInfo = useGetPlayerInfo();
  const { isFetching } = useQuery({
    queryKey: [QUERY_KEYS.BRAND],
    queryFn: () => common.getBrand(),
  });

  return {
    isFetching: isFetching || playerInfo.isFetching,
  };
};
