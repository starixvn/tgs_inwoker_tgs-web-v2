import { common } from "@/service";
import { LOCAL_STORAGE_KEY, QUERY_KEYS, TEMPLATE } from "@/types";
import { useQuery } from "@tanstack/react-query";
import {
  getBrandConfig,
  useGetGameProvider,
  useGetPlayerInfo,
  useGetWallet,
  useHandleError,
  useInitLanguage,
  useStoreTemplate,
} from "@/lib";
import { useEffect } from "react";

export const useInitBrand = () => {
  const { template, onChange } = useStoreTemplate();
  const { isFetching, isError, error, data, isSuccess } = useQuery({
    queryKey: [QUERY_KEYS.BRAND],
    queryFn: () => common.getBrand(),
  });
  const brandCode = data?.data?.code;
  const getPlayerInfo = useGetPlayerInfo();
  const getWallet = useGetWallet();
  const initLanguage = useInitLanguage();
  const getGameProvider = useGetGameProvider();

  useHandleError({
    isError,
    error,
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(TEMPLATE.TWENTY_NIGHT, TEMPLATE.THIRTY_SIX);
    root.classList.add(template);
  }, [template]);

  useEffect(() => {
    if (isSuccess && brandCode) {
      const brandConfig = getBrandConfig(brandCode);
      const currentTemplate = brandConfig.template;

      localStorage.setItem(LOCAL_STORAGE_KEY.TEMPLATE, currentTemplate);
      onChange(currentTemplate);
    }
  }, [isSuccess, brandCode]);

  return {
    isFetching:
      isFetching ||
      getPlayerInfo.isFetching ||
      getWallet.isFetching ||
      initLanguage.isFetching ||
      getGameProvider.isFetching,
  };
};
