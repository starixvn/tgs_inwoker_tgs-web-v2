import { AlertDialog, AlertDialogContent } from "@/components/ui";
import { useStoreModal } from "@/lib";

export const Modal = () => {
  const { children, open, onOpenChange } = useStoreModal();

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>{children}</AlertDialogContent>
    </AlertDialog>
  );
};
