import { X } from "lucide-react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { ROUTES } from "@/types";
import { LanguageSwitch } from "@/components";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  Button,
} from "@/components/ui";

type Props = {
  children: React.ReactNode;
};

type AuthRoute = ROUTES.LOGIN | ROUTES.REGISTER;
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
};

export const AuthDialog = ({ children }: Props) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        navigate(ROUTES.HOME);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <AlertDialog open>
      <AlertDialogContent>
        <Link to={ROUTES.HOME} className="block w-fit ml-auto">
          <Button size="icon" variant="ghost">
            <X />
          </Button>
        </Link>
        <AlertDialogTitle>
          {t(authConfig[pathname as AuthRoute].title)}
        </AlertDialogTitle>
        {children}
        <AlertDialogDescription className="flex gap-2 justify-center items-center">
          <p>{t(authConfig[pathname as AuthRoute].description)}</p>
          <Link
            to={authConfig[pathname as AuthRoute].redirectUrl}
            className="text-dialog-foreground font-bold"
          >
            {t(authConfig[pathname as AuthRoute].redirectText)}
          </Link>
        </AlertDialogDescription>
        <LanguageSwitch />
      </AlertDialogContent>
    </AlertDialog>
  );
};
