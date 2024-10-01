import { useToast } from "@/lib";
import { ApiResponseError } from "@/service";

export const useHandleError = () => {
  const { toast } = useToast();
  const handleError = (error: ApiResponseError) => {
    const errorCode = error.response?.data.err.toString();
    const description = error.response?.data.errmsgid;

    toast({
      title: `Error: ${errorCode}`,
      description,
      variant: "destructive",
    });
  };

  return {
    handleError,
  };
};
