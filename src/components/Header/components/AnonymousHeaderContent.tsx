import { Button } from "@/components/ui";
import { useTranslation } from "react-i18next";
import { LanguageSwitch } from "@/components";
import { useModal } from "@/lib";
export const AnonymousHeaderContent = () => {
  const { t } = useTranslation();
  const { onOpenChange } = useModal();

  const handleLogin = () => {
    onOpenChange(true);
  };

  return (
    <div className="flex gap-2">
      <Button onClick={handleLogin}>{t("auth.login")}</Button>
      <Button variant="secondary">{t("auth.register")}</Button>
      <LanguageSwitch />
    </div>
  );
};
