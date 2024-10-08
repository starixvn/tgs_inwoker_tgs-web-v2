import React from "react";
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
      <h2 className="text-xl">{t("common.quickLinks")}</h2>
      <ul className="mt-4 grid gap-4">
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.path}>{t(link.name)}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
