import { useQuery } from "@tanstack/react-query";
import { common } from "@/service";
import { QUERY_KEYS } from "@/types";

export const useInitLanguage = () => {
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEYS.BRAND_LANGUAGE],
    queryFn: () => common.getBrandLanguage(),
  });

  return {
    languageList: data?.data.data ?? [],
    isLoading,
  };
};
