import { useQuery } from "@tanstack/react-query";
import { common } from "@/service";
import { QueryKeys } from "@/types";

export const useInitLanguage = () => {
  const { data, isLoading } = useQuery({
    queryKey: [QueryKeys.BRAND_LANGUAGE],
    queryFn: () => common.getBrandLanguage(),
  });

  return {
    languageList: data?.data.data ?? [],
    isLoading,
  };
};
