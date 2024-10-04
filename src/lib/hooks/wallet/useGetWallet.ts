import { useHandleError, useStoreToken } from "@/lib";
import { ApiResponseError, wallet } from "@/service";
import { QUERY_KEYS } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export const useGetWallet = () => {
  const { handleError } = useHandleError();
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

  useEffect(() => {
    if (isError) {
      handleError(error as ApiResponseError);
    }
  }, [isError]);

  return {
    data,
    isFetching,
  };
};
