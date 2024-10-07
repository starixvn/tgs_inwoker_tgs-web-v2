import { GameTypeItem, GAME_TYPE_KEY } from "../game/types";
import { GAME_TYPE_CODE, ROUTES } from "@/types";
import { ProviderDto } from "@/service";
import { useTranslation } from "react-i18next";

const mapGameTypeCode: Record<GAME_TYPE_KEY, GAME_TYPE_CODE> = {
  [GAME_TYPE_KEY.SPORTS]: GAME_TYPE_CODE.SPORTS,
  [GAME_TYPE_KEY.SLOT]: GAME_TYPE_CODE.SLOT,
  [GAME_TYPE_KEY.LIVE_CASINO]: GAME_TYPE_CODE.LIVELOBBY,
  [GAME_TYPE_KEY.SABONG]: GAME_TYPE_CODE.COCKFIGHT,
  [GAME_TYPE_KEY.EGAME]: GAME_TYPE_CODE.TABLEGAME,
  [GAME_TYPE_KEY.FISHING]: GAME_TYPE_CODE.FISH,
  [GAME_TYPE_KEY.CARD_GAME]: GAME_TYPE_CODE.QIPAILOBBY,
  [GAME_TYPE_KEY.LOTTERY]: GAME_TYPE_CODE.LOTTERYLOBBY,
  [GAME_TYPE_KEY.ESPORTS]: GAME_TYPE_CODE.ESPORTS,
};

const gameTypeList: GameTypeItem[] = Object.values(GAME_TYPE_KEY).map((key) => {
  return {
    key,
    localeKey: `game.gameType.${key}`,
    gameType: mapGameTypeCode[key],
  };
});

export type NavItem = {
  label: string;
  routePath: ROUTES | GAME_TYPE_KEY;
  gameType: GAME_TYPE_CODE;
  isHoverCard: boolean;
};

export const useGetNavItemList = (providerList?: ProviderDto[]): NavItem[] => {
  const { t } = useTranslation();
  const navItemList: NavItem[] = [];

  const promotion: NavItem = {
    label: t("common.promotion"),
    gameType: GAME_TYPE_CODE.NONE,
    routePath: ROUTES.PROMOTION,
    isHoverCard: false,
  };

  const vip: NavItem = {
    label: "VIP",
    gameType: GAME_TYPE_CODE.NONE,
    isHoverCard: false,
    routePath: ROUTES.VIP,
  };

  for (const gameTypeItem of gameTypeList) {
    if (providerList?.length) {
      const hasData = providerList.filter((provider) => {
        //因虛擬體育是歸類在體育底下,體育分類有無資料的判斷要加上虛擬體育
        if (gameTypeItem.gameType === GAME_TYPE_CODE.SPORTS) {
          return (
            provider.gametypes.includes(GAME_TYPE_CODE.SPORTS) ||
            provider.gametypes.includes(GAME_TYPE_CODE.RNGSPORTS)
          );
        }
        return provider.gametypes.includes(gameTypeItem.gameType);
      });
      if (hasData.length === 0) continue;
    }

    const navItem: NavItem = {
      isHoverCard: true,
      label: t(gameTypeItem.localeKey),
      gameType: gameTypeItem.gameType,
      routePath: gameTypeItem.key,
    };

    navItemList.push(navItem);
  }

  return [...navItemList, promotion, vip];
};
