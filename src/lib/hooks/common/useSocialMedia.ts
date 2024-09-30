import { common } from "@/service";
import { QUERY_KEYS } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useSocialMedia = () => {
  const { isFetching, data } = useQuery({
    queryKey: [QUERY_KEYS.SOCIAL_MEDIA],
    queryFn: () => common.getSocialMedia(),
  });

  return {
    isFetching,
    socialMediaList: data ? data.data.data : [],
  };
};
