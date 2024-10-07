import { useQuery } from "@tanstack/react-query";
import { common } from "@/service";
import { QUERY_KEYS } from "@/types";
import { useHandleError } from "@/lib";

export const useInitLanguage = () => {
  const { isFetching, isError, error } = useQuery({
    queryKey: [QUERY_KEYS.BRAND_LANGUAGE],
    queryFn: () => common.getBrandLanguage(),
  });

  useHandleError({
    isError,
    error,
  });

  return {
    isFetching,
  };
};
