import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  Button,
  Checkbox,
} from "@/components/ui";
import { useStoreAnnouncement } from "@/lib";
import { X } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { t } from "i18next";

export const AnnouncementModal = () => {
  const {
    dialogOpen,
    onOpenChange,
    data,
    dontshowAgain,
    onDontShowAgainChange,
  } = useStoreAnnouncement();
  const announcement = data?.mains[0];

  return (
    <AlertDialog open={dialogOpen} onOpenChange={onOpenChange}>
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
          <div className="flex flex-col gap-4">
            <div className="text-2xl font-bold">{announcement?.subject}</div>
            <div className="text-xl">{announcement?.content}</div>
            <div className="flex items-center gap-2">
              <Checkbox
                checked={dontshowAgain}
                onCheckedChange={(checked: boolean) => {
                  onDontShowAgainChange(checked);
                }}
              />
              <div>{t("common.donotshowagain")}</div>
            </div>
            <Button onClick={() => onOpenChange(false)}>
              {t("common.close")}
            </Button>
          </div>
        </AlertDialogContent>
      </AlertDialogPortal>
    </AlertDialog>
  );
};
