import { announcement } from "@/service";
import { useQuery } from "@tanstack/react-query";
import {
  isShowPromotion,
  useStoreAnnouncement,
  useStorePromoion,
  useStoreToken,
} from "@/lib";
import { QUERY_KEYS } from "@/types";
import i18n from "@/i18n";

export const useGetAnnouncement = () => {
  const { token } = useStoreToken();

  const { isFetching, data } = useQuery({
    queryKey: [`${QUERY_KEYS.ANNOUNCEMENT_LIST}${i18n.language}`, token],
    queryFn: () => announcement.getAnnouncementList(token, i18n.language),
  });
  const isShowAnnouncement = () => {
    let res = false;
    res =
      data.mains.length > 0 &&
      location.pathname === "/" &&
      !sessionStorage.getItem("dontshowAgain");
    if (!res) {
      if (isShowPromotion()) {
        useStorePromoion.setState({
          dialogOpen: true,
        });
      }
    }
    return res;
  };

  if (!isFetching) {
    useStoreAnnouncement.setState({
      dialogOpen: isShowAnnouncement(),
      data: data,
    });
  }
  return {
    isFetching,
  };
};
