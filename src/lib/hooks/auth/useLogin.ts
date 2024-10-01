import { ApiResponseError, auth, LoginPayload } from "@/service";
import { useMutation } from "@tanstack/react-query";
import { useHandleError, useStoreToken } from "@/lib";
import { LOCAL_STORAGE_KEY } from "@/types";

export const useLogin = () => {
  const { onChange } = useStoreToken();
  const { handleError } = useHandleError();
  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: (payload: LoginPayload) => auth.login(payload),
    onSuccess: ({ data }) => {
      if (data.token) {
        onChange(data.token);
        localStorage.setItem(LOCAL_STORAGE_KEY.TOKEN, data.token);
      }
    },
    onError: (error: ApiResponseError) => {
      handleError(error);
    },
  });

  return {
    login: mutate,
    isPending,
    isSuccess,
  };
};
