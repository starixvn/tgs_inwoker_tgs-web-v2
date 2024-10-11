import { Dialog, DialogContent } from "@/components/ui";
import { useStoreModal } from "@/lib";

export const Modal = () => {
  const { children, open, onOpenChange } = useStoreModal();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};
