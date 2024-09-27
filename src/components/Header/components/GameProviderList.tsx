import { useBrandConfig } from "@/lib";
import { getGameProviderDto, ProviderDto } from "@/service";
import { GAME_TYPE_CODE, GetQueryData, QUERY_KEYS } from "@/types";
import { useQueryClient } from "@tanstack/react-query";

type Props = {
  activeGameType: GAME_TYPE_CODE;
};

/**
 * 待確認是否實作
 */
export const GameProviderList = ({ activeGameType }: Props) => {
  const qc = useQueryClient();
  const { currency } = useBrandConfig();
  const data = qc.getQueryData([
    QUERY_KEYS.GAME_PROVIDER_LIST,
    currency,
  ]) as GetQueryData<getGameProviderDto>;
  const providerList = data?.data.data;
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
