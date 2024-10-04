import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { ApiResponseError, auth } from "@/service";
import { useHandleError, useStoreToken } from "@/lib";
import { LOCAL_STORAGE_KEY, ROUTES } from "@/types";

export const useLogout = () => {
  const { token, clearToken } = useStoreToken();
  const { handleError } = useHandleError();
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: () => auth.logout(token),
    onSuccess: () => {
      clearToken();
      navigate(ROUTES.HOME);
      localStorage.removeItem(LOCAL_STORAGE_KEY.TOKEN);
    },
    onError: (error: ApiResponseError) => {
      handleError(error);
    },
  });

  return {
    logout: mutate,
    isPending,
  };
};
