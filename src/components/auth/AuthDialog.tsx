import { AlertDialog, AlertDialogContent } from "@/components/ui";

type Props = {
    children: React.ReactNode;
};


export const AuthDialog = ({
    children
}: Props) => {
    return (
        <AlertDialog open>
            <AlertDialogContent>
                {children}
            </AlertDialogContent>
        </AlertDialog>
    )
};