import { useHandleError, useStoreToken } from "@/lib";
import { wallet } from "@/service";
import { QUERY_KEYS } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useGetWallet = () => {
  const { token } = useStoreToken();
  const { data, isFetching, isError, error } = useQuery({
    queryKey: [QUERY_KEYS.WALLET, token],
    queryFn: () => {
      if (token) {
        return wallet.getWallet(token);
      }

      return Promise.resolve(null);
    },
  });

  useHandleError({
    isError,
    error,
  });

  return {
    data,
    isFetching,
  };
};
