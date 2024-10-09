import { MenuItem, ROUTES } from "@/types";
import {
  Banknote,
  Crown,
  HandCoins,
  Headphones,
  Inbox,
  LogOut,
  Newspaper,
  Notebook,
  PiggyBank,
  UserRound,
  UsersRound,
} from "lucide-react";
import { Button } from "./ui";
import { useTranslation } from "react-i18next";
import { useLogout } from "@/lib";
import { Link } from "react-router-dom";

export const Menu = () => {
  const { logout } = useLogout();
  const { t } = useTranslation();
  const menuItems: MenuItem[] = [
    {
      url: ROUTES.PROFILE,
      title: "profile.title",
      icon: <UserRound />,
    },
    {
      url: ROUTES.AGENT,
      title: "agent.title",
      icon: <UsersRound />,
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
      url: ROUTES.WAGERING,
      title: "wagering.title",
      icon: <Notebook />,
    },
    {
      url: ROUTES.TRANSFER,
      title: "transfer.title",
      icon: <Banknote />,
    },
    {
      url: ROUTES.REPORT,
      title: "report.title",
      icon: <Newspaper />,
    },
    {
      url: ROUTES.INBOX,
      title: "inbox.title",
      icon: <Inbox />,
    },
    {
      url: ROUTES.VIP,
      title: "vip.title",
      icon: <Crown />,
    },
    {
      url: ROUTES.CONTACT,
      title: "common.contact",
      icon: <Headphones />,
    },
  ];

  return (
    <aside className="w-full p-2 flex flex-col justify-between gap-5 bg-menu-background text-menu-foreground">
      <div>
        {menuItems.map((item, index) => (
          <Link to={item.url} key={index} className="block w-full">
            <Button
              variant="ghost"
              size="lg"
              className="w-full justify-start gap-2 text-lg"
            >
              {item.icon}
              <span>{t(item.title)}</span>
            </Button>
          </Link>
        ))}
      </div>

      <Button
        className="gap-2 text-lg"
        onClick={() => {
          logout();
        }}
      >
        <LogOut />
        <span>{t("auth.logout")}</span>
      </Button>
    </aside>
  );
};
