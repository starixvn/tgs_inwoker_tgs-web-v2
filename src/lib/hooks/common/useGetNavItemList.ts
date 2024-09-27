import { GameTypeItem, GAME_TYPE_KEY } from "../game/types";
import { GAME_TYPE_CODE } from "@/types";
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

type Route = {
  navType: "route";
  routePath: string;
};

type Action = {
  navType: "action";
  callback: () => void;
};

export type NavItem = {
  key: string;
  label: string;
  router?: string;
  routePath?: string;
  gameType: GAME_TYPE_CODE;
} & (Route | Action);

export const useGetNavItemList = (providerList: ProviderDto[]): NavItem[] => {
  const { t } = useTranslation();
  const navItemList: NavItem[] = [];
  const promotion: NavItem = {
    key: "promotion",
    label: t("common.promotion"),
    navType: "action",
    gameType: GAME_TYPE_CODE.NONE,
    router: "promotion-list",
    callback: () => {
      // history.push("/promotion-list");
    },
  };
  const vip: NavItem = {
    key: "VIP",
    label: "VIP",
    navType: "action",
    gameType: GAME_TYPE_CODE.NONE,
    router: "vip",
    callback: () => {
      // history.push("/vip");
    },
  };

  for (const gameTypeItem of gameTypeList) {
    if (providerList.length) {
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
      key: gameTypeItem.key,
      label: t(gameTypeItem.localeKey),
      navType: "action",
      gameType: gameTypeItem.gameType,
      router: gameTypeItem.key,
      callback: () => {
        //   handleChangeGameType(gameTypeItem.gameType);
        //   history.push(`/main/${gameTypeItem.key}`);
      },
    };
    navItemList.push(navItem);
  }

  console.log(navItemList);
  return [...navItemList, promotion, vip];
};
