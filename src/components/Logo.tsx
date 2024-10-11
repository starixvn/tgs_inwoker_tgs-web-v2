import { cn, useBrandData } from "@/lib";
import { ROUTES } from "@/types";
import { Link } from "react-router-dom";

type Props = {
  className?: string;
};

export const Logo = ({ className }: Props) => {
  const brandData = useBrandData();
  return (
    <Link
      to={ROUTES.HOME}
      className={cn(
        "flex items-center justify-center bg-center bg-contain bg-no-repeat aspect-logo",
        className,
      )}
      style={{
        backgroundImage: `url("${brandData?.desktopLogoUrl}")`,
      }}
    />
  );
};
