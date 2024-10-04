import { useToast } from "@/lib";
import { ApiResponseError } from "@/service";

export const useHandleError = () => {
  const { toast } = useToast();
  const handleError = (error?: ApiResponseError) => {
    if (!error) {
      toast({
        title: "Error",
        description: "Unknown error",
        variant: "destructive",
      });
      return;
    }

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
