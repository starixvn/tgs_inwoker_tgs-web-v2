import { AnnouncementDto } from "@/service";
import { ZustandStore } from "@/types";
import { create } from "zustand";
import { useStorePromoion } from "./useStorePromoion";

export type AnnouncementStore = {
  dialogOpen: boolean;
  onOpenChange: (open: boolean) => void;
  data: AnnouncementDto;
  dontshowAgain: boolean;
  onDontShowAgainChange: (dontshowAgain: boolean) => void;
};

export const isShowPromotion = () => {
  return (
    location.pathname === "/" &&
    !sessionStorage.getItem("dontshowPromotionAgain")
  );
};

export const useStoreAnnouncement: ZustandStore<AnnouncementStore> = create(
  (set) => ({
    dialogOpen: false,
    onOpenChange: () => {
      if (useStoreAnnouncement.getState().dontshowAgain) {
        sessionStorage.setItem("dontshowAgain", "true");
      }
      set(({ dialogOpen }) => {
        if (isShowPromotion()) {
          useStorePromoion.setState({
            dialogOpen: true,
          });
        }

        return {
          dialogOpen: !dialogOpen,
        };
      });
    },
    data: {
      deposits: [],
      mains: [],
      marquees: [],
    },
    dontshowAgain: false,
    onDontShowAgainChange: () =>
      set(({ dontshowAgain }) => ({ dontshowAgain: !dontshowAgain })),
  })
);
