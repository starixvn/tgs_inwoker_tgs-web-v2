import { common } from "@/service";
import { QUERY_KEYS } from "@/types";
import { useQuery } from "@tanstack/react-query";
import {
  useGetAnnouncement,
  useGetGameProvider,
  useGetPlayerInfo,
  useGetPromotions,
  useGetWallet,
  useHandleError,
  useInitLanguage,
} from "@/lib";

export const useInitBrand = () => {
  const { isFetching, isError, error } = useQuery({
    queryKey: [QUERY_KEYS.BRAND],
    queryFn: () => common.getBrand(),
  });
  const getPlayerInfo = useGetPlayerInfo();
  const getWallet = useGetWallet();
  const initLanguage = useInitLanguage();
  const getGameProvider = useGetGameProvider();
  const getAnnouncement = useGetAnnouncement();
  const getPromoions = useGetPromotions();

  useHandleError({
    isError,
    error,
  });

  return {
    isFetching:
      isFetching ||
      getPlayerInfo.isFetching ||
      getWallet.isFetching ||
      initLanguage.isFetching ||
      getGameProvider.isFetching ||
      getAnnouncement.isFetching ||
      getPromoions.isFetching,
  };
};
