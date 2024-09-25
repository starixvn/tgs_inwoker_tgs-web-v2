import { ZustandStore } from "@/types";
import { create } from "zustand";

export type ModalStore = {
  children: React.ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const useModal: ZustandStore<ModalStore> = create((set) => ({
  open: false,
  onOpenChange: () => set(({ open }) => ({ open: !open })),
  children: null,
}));
