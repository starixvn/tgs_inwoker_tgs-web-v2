import { MenuItem, ROUTES } from "@/types";
import { Banknote, Crown, Gift, HandCoins, PiggyBank } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const MobileFooter = () => {
  const { t } = useTranslation();
  const links: MenuItem[] = [
    {
      url: ROUTES.VIP,
      title: "vip.title",
      icon: <Crown />,
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
      url: ROUTES.TRANSFER,
      title: "transfer.title",
      icon: <Banknote />,
    },
    {
      url: ROUTES.PROMOTION,
      title: "common.promotion",
      icon: <Gift />,
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
