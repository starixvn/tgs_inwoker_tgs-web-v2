import { LanguageSwitch, Loading } from "@/components";
import { Button } from "@/components/ui";
import { usePlayerInfo, useRWD, useWallet } from "@/lib";
import { useLogout } from "@/lib/hooks/auth/useLogout";
import { ROUTES } from "@/types";
import { Inbox, LogOut } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const content: {
  url: ROUTES;
  label: string;
  variant?: "secondary";
}[] = [
  { url: ROUTES.TRANSFER, label: "transfer.title" },
  { url: ROUTES.DEPOSIT, label: "deposit.title", variant: "secondary" },
  { url: ROUTES.WITHDRAWAL, label: "withdraw.title", variant: "secondary" },
];

export const AccountHeaderContent = () => {
  const { isLargeSize } = useRWD();
  const playerInfo = usePlayerInfo();
  const { balance } = useWallet();
  const { t } = useTranslation();
  const { logout, isPending } = useLogout();

  if (isPending) {
    return <Loading />;
  }

  const renderLargeSizeContent = () => (
    <>
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
      <Button
        size="icon"
        variant="ghost"
        onClick={() => {
          logout();
        }}
      >
        <LogOut />
      </Button>
    </>
  );

  return (
    <div className="text-header-text flex gap-2 items-center">
      <Link to={ROUTES.PROFILE}>{playerInfo?.username}</Link>
      <span>{balance}</span>
      <LanguageSwitch />
      {isLargeSize && renderLargeSizeContent()}
    </div>
  );
};
