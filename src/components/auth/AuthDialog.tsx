import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

import { ROUTES } from "@/types";
import { CloseButton, LanguageSwitch, SocialMediaList } from "@/components";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  ScrollArea,
} from "@/components/ui";

type Props = {
  children: React.ReactNode;
};

type AuthRoute = ROUTES.LOGIN | ROUTES.REGISTER | ROUTES.FORGET_PASSWORD;
type Config = {
  title: string;
  description: string;
  redirectUrl: AuthRoute;
  redirectText: string;
};

const authConfig: Record<AuthRoute, Config> = {
  [ROUTES.LOGIN]: {
    title: "auth.login",
    description: "auth.description.login",
    redirectUrl: ROUTES.REGISTER,
    redirectText: "auth.register",
  },
  [ROUTES.REGISTER]: {
    title: "auth.register",
    description: "auth.description.register",
    redirectUrl: ROUTES.LOGIN,
    redirectText: "auth.login",
  },
  [ROUTES.FORGET_PASSWORD]: {
    title: "auth.forgetPassword",
    description: "auth.description.forgetPassword",
    redirectUrl: ROUTES.LOGIN,
    redirectText: "auth.login",
  },
};

export const AuthDialog = ({ children }: Props) => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  return (
    <AlertDialog open>
      <AlertDialogContent className="gap-5 bg-dialog-background sm:max-w-xl max-w-full h-full sm:h-auto">
        <CloseButton />
        <ScrollArea>
          <div className="flex flex-col gap-5 max-w-sm mx-auto w-full">
            <AlertDialogTitle className="text-dialog-foreground text-4xl text-center">
              {t(authConfig[pathname as AuthRoute].title).toUpperCase()}
            </AlertDialogTitle>
            {children}
            <AlertDialogDescription className="flex gap-2 justify-center items-center">
              <span>{t(authConfig[pathname as AuthRoute].description)}</span>
              <Link
                to={authConfig[pathname as AuthRoute].redirectUrl}
                className="text-dialog-foreground font-bold"
              >
                {t(authConfig[pathname as AuthRoute].redirectText)}
              </Link>
            </AlertDialogDescription>
            <div className="w-fit mx-auto">
              <SocialMediaList />
            </div>
            <LanguageSwitch className="mx-auto" mode="outline" />
          </div>
        </ScrollArea>
      </AlertDialogContent>
    </AlertDialog>
  );
};
