import { useMutation } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { ApiResponseError, auth, LoginPayload } from "@/service";
import { useHandleError, useStoreToken } from "@/lib";
import { LOCAL_STORAGE_KEY, ROUTES } from "@/types";

export const useLogin = () => {
  const { onChange } = useStoreToken();
  const { handleError } = useHandleError();
  const location = useLocation();
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: (payload: LoginPayload) => auth.login(payload),
    onSuccess: ({ data }, payload) => {
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

      if (location.search.includes("?redirectUrl=")) {
        navigate(location.search.replace("?redirectUrl=", ""));
        return;
      }

      navigate(ROUTES.HOME);
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
