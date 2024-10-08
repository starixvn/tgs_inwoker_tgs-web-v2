import { Promotion } from "@/service";
import { ZustandStore } from "@/types";
import { create } from "zustand";

export type PromotionStore = {
  dialogOpen: boolean;
  onOpenChange: (open: boolean) => void;
  data: Promotion[];
  dontshowAgain: boolean;
  onDontShowAgainChange: (dontshowAgain: boolean) => void;
};

export const useStorePromoion: ZustandStore<PromotionStore> = create((set) => ({
  dialogOpen: false,
  onOpenChange: () => {
    if (useStorePromoion.getState().dontshowAgain) {
      sessionStorage.setItem("dontshowPromotionAgain", "true");
    }
    set(({ dialogOpen }) => ({ dialogOpen: !dialogOpen }));
  },
  data: [],
  dontshowAgain: false,
  onDontShowAgainChange: () =>
    set(({ dontshowAgain }) => ({ dontshowAgain: !dontshowAgain })),
}));
