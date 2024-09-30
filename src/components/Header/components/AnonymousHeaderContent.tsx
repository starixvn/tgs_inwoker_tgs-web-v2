import { Button } from "@/components/ui";
import { useTranslation } from "react-i18next";
import { LanguageSwitch } from "@/components";
import { useRWD } from "@/lib";
import { Link } from "react-router-dom";
import { ROUTES } from "@/types";
export const AnonymousHeaderContent = () => {
  const { isMobile } = useRWD();
  const { t } = useTranslation();

  return (
    <div className="flex gap-2">
      <Link to={ROUTES.LOGIN}>
        <Button>{t("auth.login")}</Button>
      </Link>
      <Link to={ROUTES.REGISTER}>
        <Button variant="secondary">{t("auth.register")}</Button>
      </Link>
      {!isMobile && <LanguageSwitch />}
    </div>
  );
};
