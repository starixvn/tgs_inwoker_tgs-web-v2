import { GAME_TYPE_CODE } from "@/types";

export enum GAME_TYPE_KEY {
  CARD_GAME = "cardGame",
  EGAME = "egame",
  ESPORTS = "esports",
  FISHING = "fishing",
  LIVE_CASINO = "liveCasino",
  LOTTERY = "lottery",
  SABONG = "sabong",
  SLOT = "slot",
  SPORTS = "sports",
}

export type GameTypeItem = {
  key: GAME_TYPE_KEY;
  localeKey: string;
  gameType: GAME_TYPE_CODE;
};
