import { LanguageSwitch } from "@/components";
import { Button } from "@/components/ui";
import { usePlayerInfo, useRWD, useWallet } from "@/lib";
import { ROUTES } from "@/types";
import { Inbox, LogOut } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const content: {
  url: ROUTES;
  label: string;
  variant?: "secondary";
}[] = [
  { url: ROUTES.TRANSFER, label: "transfer.title", variant: "secondary" },
  { url: ROUTES.DEPOSIT, label: "deposit.title" },
  { url: ROUTES.WITHDRAWAL, label: "withdraw.title" },
];

export const AccountHeaderContent = () => {
  const { isLargeSize } = useRWD();
  const playerInfo = usePlayerInfo();
  const { balance } = useWallet();
  const { t } = useTranslation();

  if (!isLargeSize) {
    return (
      <div className="text-header-text flex gap-2 items-center">
        <Link to={ROUTES.PROFILE}>{playerInfo?.username}</Link>
        <span>{balance}</span>
        <LanguageSwitch />
      </div>
    );
  }

  return (
    <div className="text-header-text flex gap-2 items-center">
      <Link to={ROUTES.PROFILE}>{playerInfo?.username}</Link>
      <span>{balance}</span>
      <LanguageSwitch />
      {content.map((item) => (
        <Link className="" key={item.url} to={item.url}>
          <Button variant={item.variant}>{t(item.label)}</Button>
        </Link>
      ))}
      <Link to={ROUTES.INBOX}>
        <Button size="icon" variant="ghost">
          <Inbox />
        </Button>
      </Link>
      <Button size="icon" variant="ghost" onClick={() => {}}>
        <LogOut />
      </Button>
    </div>
  );
};
