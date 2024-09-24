import { BRAND_CODE, TEMPLATE } from "@/types";

export interface TemplateConfig {
    template: TEMPLATE;
    timeZone: string;
}

export const brandConfig: Record<BRAND_CODE, TemplateConfig> = {
    [BRAND_CODE.GPI]: {
        template: TEMPLATE.TWENTY_NIGHT,
        timeZone: "Asia/Taipei", // 預設
    },
    [BRAND_CODE.MOPH]: {
        template: TEMPLATE.TWENTY_NIGHT,
        timeZone: "Asia/Manila", // 菲律賓
    },
    [BRAND_CODE.SBO]: {
        template: TEMPLATE.THIRTY_SIX,
        timeZone: "Asia/Jakarta", // 印尼
    },
};