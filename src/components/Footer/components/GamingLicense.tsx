import { Logo, SocialMediaList } from "@/components";
import { GetBrandDto } from "@/service";
import { QUERY_KEYS, GetQueryData } from "@/types";
import { useQueryClient } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";

export const GamingLicense = () => {
  const { t } = useTranslation();
  const qc = useQueryClient();
  const brandData = qc.getQueryData([
    QUERY_KEYS.BRAND,
  ]) as GetQueryData<GetBrandDto>;
  const brandCode = brandData?.data.data.code;

  return (
    <div className="w-full flex flex-col gap-4">
      <h2 className="text-xl">{t("common.gamingLicense")}</h2>
      <Logo className="w-[200px]" />
      <p>{`${brandCode} Copyright© 2020 ${brandCode} Casino `}</p>
      <p>Co.Group</p>
      <p>All Rights Reserved</p>
      <h2 className="text-xl">{t("common.followUs")}</h2>
      <SocialMediaList />
    </div>
  );
};
