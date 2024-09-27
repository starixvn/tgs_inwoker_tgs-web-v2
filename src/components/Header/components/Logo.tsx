import { GetBrandDto } from "@/service";
import { GetQueryData, QUERY_KEYS } from "@/types";
import { useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";

export const Logo = () => {
  const qc = useQueryClient();
  const data = qc.getQueryData([QUERY_KEYS.BRAND]) as GetQueryData<GetBrandDto>;
  const brandData = data?.data.data;
  return (
    <Link to="/" className="block w-fit">
      <img src={brandData?.desktopLogoUrl} alt="logo" className="h-8" />
    </Link>
  );
};
