import { auth, LoginPayload } from "@/service";
import { useMutation } from "@tanstack/react-query";

export const useLogin = () => {
  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: (payload: LoginPayload) => auth.login(payload),
    onSuccess: (res) => {
      console.log(res);
    },
  });

  return {
    login: mutate,
    isPending,
    isSuccess,
  };
};
