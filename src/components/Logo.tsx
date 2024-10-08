import { cn } from "@/lib";
import { GetBrandDto } from "@/service";
import { GetQueryData, QUERY_KEYS, ROUTES } from "@/types";
import { useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { AspectRatio } from "./ui";

type Props = {
  className?: string;
};

export const Logo = ({ className }: Props) => {
  const qc = useQueryClient();
  const data = qc.getQueryData([QUERY_KEYS.BRAND]) as GetQueryData<GetBrandDto>;
  const brandData = data?.data.data;
  return (
    <Link
      to={ROUTES.HOME}
      className={cn("flex items-center justify-center", className)}
    >
      <AspectRatio ratio={100 / 30}>
        <img
          src={brandData?.desktopLogoUrl}
          alt="logo"
          className="w-full object-cover"
        />
      </AspectRatio>
    </Link>
  );
};
