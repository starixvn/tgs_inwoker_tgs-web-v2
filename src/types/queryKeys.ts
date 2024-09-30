/**
 * useQuery 的 queryKey 參數
 * 統一使用 api 的 URL
 * @see https://raypro.atlassian.net/wiki/spaces/~805807228/pages/513671184/Api
 */
export enum QUERY_KEYS {
  //init
  BRAND_LANGUAGE = "brandlanguage",
  BRAND = "brand",
  SOCIAL_MEDIA = "brand/social",

  //game
  GAME_PROVIDER_LIST = "GameProvider/list",
}
