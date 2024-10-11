import { useTranslation } from "react-i18next";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { ROUTES } from "@/types";
import { LanguageSwitch, SocialMediaList } from "@/components";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  ScrollArea,
} from "@/components/ui";
import { useState } from "react";

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
  const [open, setOpen] = useState(true);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Dialog
      open={open}
      onOpenChange={(open) => {
        setOpen(open);
        if (!open) {
          /**
           * @todo 確認要導向首頁還是點擊前的頁面
           * 1. /promotion -> /login -> /promotion => 會有無限循環的問題
           * 2. /promotion -> /login -> /home
           *
           * 目前為導向首頁
           */
          navigate(ROUTES.HOME);
        }
      }}
    >
      <DialogContent className="sm:p-6 p-4 flex flex-col sm:max-w-xl max-w-full h-full sm:h-auto">
        <ScrollArea className="px-4">
          <div className="flex flex-col gap-5 max-w-sm mx-auto w-full">
            <DialogTitle className="text-dialog-foreground text-4xl text-center">
              {t(authConfig[pathname as AuthRoute].title).toUpperCase()}
            </DialogTitle>
            {children}
            <DialogDescription className="flex gap-2 justify-center items-center">
              <span>{t(authConfig[pathname as AuthRoute].description)}</span>
              <Link
                to={authConfig[pathname as AuthRoute].redirectUrl}
                className="text-dialog-foreground font-bold"
              >
                {t(authConfig[pathname as AuthRoute].redirectText)}
              </Link>
            </DialogDescription>
            <div className="w-fit mx-auto">
              <SocialMediaList />
            </div>
            <LanguageSwitch className="mx-auto" mode="outline" />
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
