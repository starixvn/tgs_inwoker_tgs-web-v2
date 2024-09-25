import { AlertDialog, AlertDialogContent } from "@/components/ui";
import { useModal } from "@/lib";

export const Modal = () => {
  const { children, open, onOpenChange } = useModal();

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>{children}</AlertDialogContent>
    </AlertDialog>
  );
};
