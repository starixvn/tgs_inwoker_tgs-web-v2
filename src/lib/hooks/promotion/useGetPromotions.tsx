import { promotion } from "@/service";
import { useQuery } from "@tanstack/react-query";
import { useStoreToken } from "@/lib";
import { QUERY_KEYS } from "@/types";

export const useGetPromotions = () => {
  const { token } = useStoreToken();

  const { isFetching, data } = useQuery({
    queryKey: [QUERY_KEYS.PROMOTION_LIST, token],
    queryFn: () => promotion.getPromoionList(token),
  });
  console.log(data);

  const isShowPromotion = () => {
    let res = false;
    res =
      // data.mains.length > 0 &&
      location.pathname === "/" &&
      !sessionStorage.getItem("dontshowPromotionAgain");
    return res;
  };
  return {
    isShowPromotion,
    isFetching,
  };
};
