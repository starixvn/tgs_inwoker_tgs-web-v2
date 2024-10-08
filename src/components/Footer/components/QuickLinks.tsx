import { Button } from "@/components/ui";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const links = [
  { name: "common.customerService", path: "/customerService" },
  { name: "common.faq", path: "/faq" },
  { name: "common.privacyPolicy", path: "/privacyPolicy" },
  { name: "common.termsAndConditions", path: "/termsAndConditions" },
  { name: "common.responsibleGaming", path: "/responsibleGaming" },
];

export const QuickLinks = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <h2 className="ml-4 text-xl">{t("common.quickLinks")}</h2>
      <ul className="mt-4 grid gap-2">
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.path} className="">
              <Button className="" variant="ghost">
                {t(link.name)}
              </Button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
