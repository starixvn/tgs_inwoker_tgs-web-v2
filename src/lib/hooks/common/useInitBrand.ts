import { common } from "@/service";
import { QUERY_KEYS } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useInitBrand = () => {
  const { isFetching } = useQuery({
    queryKey: [QUERY_KEYS.BRAND],
    queryFn: () => common.getBrand(),
  });

  return {
    isFetching,
  };
};
