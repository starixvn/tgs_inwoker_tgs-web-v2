import { useGameProvider } from "@/lib";
import { ProviderDto } from "@/service";
import { GAME_TYPE_CODE } from "@/types";

type Props = {
  activeGameType: GAME_TYPE_CODE;
};

/**
 * 待確認是否實作
 */
export const GameProviderList = ({ activeGameType }: Props) => {
  const providerList = useGameProvider();
  const filteredProviderList = providerList?.filter((provider: ProviderDto) =>
    provider.gametypes.includes(activeGameType),
  );

  return (
    <div>
      {filteredProviderList?.map((provider) => (
        <div key={provider.code}>
          <div>{provider.name}</div>
        </div>
      ))}
    </div>
  );
};
