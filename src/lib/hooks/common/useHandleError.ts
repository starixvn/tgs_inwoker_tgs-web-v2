import { useToast } from "@/lib";
import { ApiResponseError } from "@/service";
import { useEffect } from "react";

type Props = {
  isError: boolean;
  error: Error | null;
  onError?: () => void;
};

/**
 * 1. 處理 useQuery 錯誤 請傳入props
 * 2. 處理 useMutation 錯誤 不需要傳入任何參數 請解構 handleError 另外使用
 */
export const useHandleError = (props?: Props) => {
  const { toast } = useToast();
  const handleUnknownError = () => {
    toast({
      title: "Error",
      description: "Unknown error",
      variant: "destructive",
    });
  };
  const handleError = (error?: ApiResponseError) => {
    if (!error) {
      handleUnknownError();
      return;
    }

    try {
      const errorCode = error.response?.data.err.toString();
      const description = error.response?.data.errmsgid;

      toast({
        title: `Error: ${errorCode}`,
        description,
        variant: "destructive",
      });
    } catch (e) {
      console.log(e);
      handleUnknownError();
    }
  };

  useEffect(() => {
    if (!props?.error) return;

    if (props?.isError) {
      if (props?.onError) {
        props.onError();
      }
      handleError(props?.error as ApiResponseError);
    }
  }, [props?.isError, props?.error]);

  return {
    handleError,
  };
};
