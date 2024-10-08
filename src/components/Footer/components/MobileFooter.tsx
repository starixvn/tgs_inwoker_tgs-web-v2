import { ROUTES } from "@/types";
import { Gift, HandCoins, House, PiggyBank, UserRound } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

type Link = {
  url: ROUTES;
  title: string;
  icon: React.ReactNode;
};

export const MobileFooter = () => {
  const { t } = useTranslation();
  const links: Link[] = [
    {
      url: ROUTES.HOME,
      title: "common.home",
      icon: <House />,
    },
    {
      url: ROUTES.DEPOSIT,
      title: "deposit.title",
      icon: <PiggyBank />,
    },
    {
      url: ROUTES.WITHDRAWAL,
      title: "withdraw.title",
      icon: <HandCoins />,
    },
    {
      url: ROUTES.PROMOTION,
      title: "common.promotion",
      icon: <Gift />,
    },
    {
      url: ROUTES.PROFILE,
      title: "common.account",
      icon: <UserRound />,
    },
  ];

  return (
    <>
      {links.map((link, index) => (
        <Link
          to={link.url}
          key={index}
          className="flex flex-col items-center justify-center gap-1"
        >
          {link.icon}
          <span className="text-xs">{t(link.title)}</span>
        </Link>
      ))}
    </>
  );
};
