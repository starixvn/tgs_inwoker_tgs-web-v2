import { common } from "@/service";
import { QUERY_KEYS } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useInitBrand = () => {
  const { isLoading } = useQuery({
    queryKey: [QUERY_KEYS.BRAND],
    queryFn: () => common.getBrand(),
  });

  return {
    isLoading,
  };
};
