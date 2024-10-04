import { GetWalletDto } from "@/service";
import { QUERY_KEYS, GetQueryData } from "@/types";
import { useQueryClient } from "@tanstack/react-query";
import { currency, useBrandConfig, useStoreToken } from "@/lib";

export const useWallet = () => {
  const { token } = useStoreToken();
  const brandConfig = useBrandConfig();
  const qc = useQueryClient();
  const data = qc.getQueryData([
    QUERY_KEYS.WALLET,
    token,
  ]) as GetQueryData<GetWalletDto>;
  const value = data?.data.data.main ?? 0;

  return {
    balance: currency.formatCurrency({
      locale: brandConfig.language,
      currency: brandConfig.currency,
      value,
    }),
  };
};
