import { Loading, HoverCard } from "@/components";
import { Button } from "@/components/ui";
import { useGameProvider, useGetNavItemList } from "@/lib";

export const GameProviderList = () => {
  const { providerList, isFetching } = useGameProvider();
  const navItemList = useGetNavItemList(providerList);

  if (isFetching) {
    return <Loading />;
  }

  return (
    <div className="w-full">
      {navItemList.map((navItem) => {
        const trigger = (
          <Button key={navItem.key} variant="ghost" className="font-bold">
            {navItem.label}
          </Button>
        );

        return (
          <HoverCard trigger={trigger}>
            <div>{navItem.label}</div>
          </HoverCard>
        );
      })}
    </div>
  );
};
