import { Button } from "@/components/ui";
import { useTranslation } from "react-i18next";
import { LanguageSwitch } from "@/components";
import { useRWD } from "@/lib";
import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "@/types";

export const AnonymousHeaderContent = () => {
  const { isMobile } = useRWD();
  const { t } = useTranslation();
  const location = useLocation();
  const currentPath = location.pathname;
  const loginUrl = `${ROUTES.LOGIN}?redirectUrl=${currentPath}`;

  return (
    <div className="flex gap-2">
      <Link to={loginUrl}>
        <Button>{t("auth.login")}</Button>
      </Link>
      <Link to={ROUTES.REGISTER}>
        <Button variant="secondary">{t("auth.register")}</Button>
      </Link>
      {!isMobile && <LanguageSwitch />}
    </div>
  );
};
