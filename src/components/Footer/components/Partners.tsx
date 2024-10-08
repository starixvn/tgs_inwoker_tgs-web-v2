import { useGameProvider } from "@/lib";
import { useTranslation } from "react-i18next";

export const Partners = () => {
  const providerList = useGameProvider();
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <h2 className="text-xl">{t("common.partners")}</h2>
      <ul className="mt-4 flex flex-wrap gap-2 text-sm">
        {providerList?.map((row) => (
          <li
            key={row.code}
            className="rounded-full border border-solid border-footer-foreground py-2 px-5"
          >
            {row.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
