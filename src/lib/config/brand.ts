import { BRAND_CODE, TEMPLATE } from "@/types";

export interface TemplateConfig {
  template: TEMPLATE;
  timeZone: string;
  language: string;
}

export const brandConfig: Record<BRAND_CODE, TemplateConfig> = {
  [BRAND_CODE.GPI]: {
    template: TEMPLATE.TWENTY_NIGHT,
    timeZone: "Asia/Taipei", // 預設
    language: "en-US",
  },
  [BRAND_CODE.MOPH]: {
    template: TEMPLATE.TWENTY_NIGHT,
    timeZone: "Asia/Manila", // 菲律賓
    language: "tgl-PH",
  },
  [BRAND_CODE.SBO]: {
    template: TEMPLATE.THIRTY_SIX,
    timeZone: "Asia/Jakarta", // 印尼
    language: "id-ID",
  },
};
