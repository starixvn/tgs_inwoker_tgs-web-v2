import { GameTypeIcon, Logo } from "@/components";
import {
  Sheet,
  SheetTrigger,
  Button,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui";
import {
  useGameProvider,
  useGetNavItemList,
  useLogout,
  useStoreToken,
} from "@/lib";
import { ROUTES } from "@/types";
import { AlignJustify } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const MobileMenu = () => {
  const { token } = useStoreToken();
  const [open, setOpen] = useState(false);
  const providerList = useGameProvider();
  const navItemList = useGetNavItemList(providerList);
  const navigate = useNavigate();
  const { logout } = useLogout();
  const { t } = useTranslation();

  const handleOnClick = (url: string) => {
    setOpen(false);
    navigate(url);
  };

  const handleLogout = () => {
    logout();
    setOpen(false);
    navigate(ROUTES.HOME);
  };

  return (
    <Sheet
      open={open}
      onOpenChange={(open) => {
        setOpen(open);
      }}
    >
      <SheetTrigger asChild onClick={() => setOpen(true)}>
        <Button size="icon" variant="ghost" className="text-header-text">
          <AlignJustify />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col justify-between">
        <SheetHeader>
          <SheetTitle>
            <Logo className="w-24" />
          </SheetTitle>
          <div className="flex flex-col mt-5">
            {navItemList.map((navItem, i) => {
              if (!navItem.isHoverCard) return null;
              return (
                <Button
                  variant="ghost"
                  onClick={() => handleOnClick(navItem.routePath)}
                  className="justify-start text-md gap-2 px-0 text-menu-foreground"
                  key={i}
                >
                  <GameTypeIcon gameType={navItem.gameType} />
                  {navItem.label}
                </Button>
              );
            })}
          </div>
        </SheetHeader>

        {token && (
          <Button onClick={handleLogout} className="mt-auto">
            {t("auth.logout")}
          </Button>
        )}
      </SheetContent>
    </Sheet>
  );
};
