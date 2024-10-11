import { useMutation } from "@tanstack/react-query";
import { ApiResponseError, auth, LoginPayload } from "@/service";
import { useHandleError, useRedirectUrl, useStoreToken } from "@/lib";
import { LOCAL_STORAGE_KEY } from "@/types";

export const useLogin = () => {
  const { onChange } = useStoreToken();
  const { handleError } = useHandleError();
  const { handleRedirect } = useRedirectUrl();

  const { mutate, isPending } = useMutation({
    mutationFn: (payload: LoginPayload) => auth.login(payload),
    onSuccess: (data, payload) => {
      if (data.token) {
        onChange(data.token);
        localStorage.setItem(LOCAL_STORAGE_KEY.TOKEN, data.token);

        if (payload.isRemember) {
          localStorage.setItem(LOCAL_STORAGE_KEY.USERNAME, payload.username);
          localStorage.setItem(LOCAL_STORAGE_KEY.REMEMBER_ME, "true");
        } else {
          localStorage.removeItem(LOCAL_STORAGE_KEY.USERNAME);
          localStorage.removeItem(LOCAL_STORAGE_KEY.REMEMBER_ME);
        }
      }

      handleRedirect();
    },
    onError: (error: ApiResponseError) => {
      handleError(error);
    },
  });

  return {
    login: mutate,
    isPending,
  };
};
