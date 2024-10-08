import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
} from "@/components/ui";
import { useStoreModal } from "@/lib";
import { X } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export const Modal = () => {
  const { children, open, onOpenChange } = useStoreModal();

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogPortal>
        <AlertDialogOverlay
          onClick={() => {
            onOpenChange(false);
          }}
        />
        <AlertDialogContent>
          <VisuallyHidden>
            <AlertDialogTitle />
            <AlertDialogDescription />
          </VisuallyHidden>
          <AlertDialogHeader>
            <X
              onClick={() => onOpenChange(false)}
              className="absolute top-2 right-2 cursor-pointer"
            />
          </AlertDialogHeader>
          {children}
        </AlertDialogContent>
      </AlertDialogPortal>
    </AlertDialog>
  );
};
