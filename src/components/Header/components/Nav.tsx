import { HoverCard } from "@/components";
import { Button } from "@/components/ui";
import { useGameProvider, useGetNavItemList } from "@/lib";
import { Link } from "react-router-dom";
import { GameProviderList } from "./GameProviderList";

export const Nav = () => {
  const providerList = useGameProvider();
  const navItemList = useGetNavItemList(providerList);

  return (
    <div className="w-full flex gap-1">
      {navItemList.map((navItem, i) => {
        const trigger = (
          <Link to={navItem.routePath} className="block" key={i}>
            <Button variant="ghost" className="font-bold">
              {navItem.label}
            </Button>
          </Link>
        );

        if (navItem.isHoverCard) {
          return (
            <HoverCard trigger={trigger} key={i}>
              <GameProviderList activeGameType={navItem.gameType} />
            </HoverCard>
          );
        }

        return trigger;
      })}
    </div>
  );
};
