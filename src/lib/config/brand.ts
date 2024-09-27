import { BRAND_CODE, TEMPLATE, CURRENCY, LOCALES, TIMEZONE } from "@/types";

export interface TemplateConfig {
  template: TEMPLATE;
  timeZone: TIMEZONE;
  language: LOCALES;
  currency: CURRENCY;
}

/**
 * 整合以下兩個 config
 * @alias BRAND_CODE 請帶入 enum BRAND_CODE
 * @see tgs-web-nx\libs\config\src\config\brand.ts
 * @see https://app12.srvptt.com/config_${BRAND_CODE}.json
 */
export const brandConfig: Record<BRAND_CODE, TemplateConfig> = {
  [BRAND_CODE.GPI]: {
    template: TEMPLATE.TWENTY_NIGHT,
    timeZone: TIMEZONE.TW,
    language: LOCALES.EN,
    currency: CURRENCY.USD,
  },
  [BRAND_CODE.MOPH]: {
    template: TEMPLATE.TWENTY_NIGHT,
    timeZone: TIMEZONE.PH,
    language: LOCALES.PH,
    currency: CURRENCY.PHP,
  },
  [BRAND_CODE.SBO]: {
    template: TEMPLATE.THIRTY_SIX,
    timeZone: TIMEZONE.ID,
    language: LOCALES.ID,
    currency: CURRENCY.IDR,
  },
};

/**
 * 取得品牌設定 Fallback 為 GPI
 * @param brandCode
 * @returns brandConfig
 */
export const getBrandConfig = (brandCode?: BRAND_CODE) => {
  if (brandCode && brandConfig[brandCode]) {
    return brandConfig[brandCode];
  }

  return brandConfig[BRAND_CODE.GPI];
};
