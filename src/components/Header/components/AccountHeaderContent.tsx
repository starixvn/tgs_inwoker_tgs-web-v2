import { usePlayerInfo } from "@/lib";
import { ROUTES } from "@/types";
import { Link } from "react-router-dom";

export const AccountHeaderContent = () => {
  const playerInfo = usePlayerInfo();

  return (
    <div className="text-header-text">
      <Link to={ROUTES.PROFILE}>{playerInfo?.username}</Link>
      <span>{/* todo add wallet */}</span>
    </div>
  );
};
