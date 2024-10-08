import { cn, useBrandData } from "@/lib";
import { ROUTES } from "@/types";
import { Link } from "react-router-dom";
import { AspectRatio } from "./ui";

type Props = {
  className?: string;
};

export const Logo = ({ className }: Props) => {
  const brandData = useBrandData();
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
