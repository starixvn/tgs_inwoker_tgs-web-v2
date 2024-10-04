import { usePlayerInfo, useWallet } from "@/lib";
import { ROUTES } from "@/types";
import { Link } from "react-router-dom";

export const AccountHeaderContent = () => {
  const playerInfo = usePlayerInfo();
  const { balance } = useWallet();

  return (
    <div className="text-header-text flex gap-2 items-center">
      <Link to={ROUTES.PROFILE}>{playerInfo?.username}</Link>
      <span>{balance}</span>
    </div>
  );
};
