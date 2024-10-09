import { Outlet } from "react-router";
import { RequireAuth } from "./auth/RequireAuth";
import { Menu } from "@/components";
import { useRWD } from "@/lib";

export const AuthLayout = () => {
  const { isMobile } = useRWD();
  const renderLargeContent = () => (
    <div className="flex-1 grid grid-cols-[200px_1fr] gap-2">
      <Menu />
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );

  return (
    <RequireAuth>{!isMobile ? renderLargeContent() : <Outlet />}</RequireAuth>
  );
};
