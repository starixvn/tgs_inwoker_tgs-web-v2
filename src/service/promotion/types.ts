interface CampaignDetail {
  percentage: number;
  playerAutoJoin: boolean;
  bonusAmountLimit: number;
  turnoverMultiple: number;
}

interface LocalizationContent {
  terms?: string;
  content?: string;
  mobileBanner?: string;
  desktopBanner?: string;
}

interface Localization {
  "en-US"?: LocalizationContent;
  "hi-IN"?: LocalizationContent;
  "id-ID"?: LocalizationContent;
  "ta-IN"?: LocalizationContent;
  "th-TH"?: LocalizationContent;
  "vi-VN"?: LocalizationContent;
  "zh-CN"?: LocalizationContent;
  "zh-TW"?: LocalizationContent;
  "tgl-PH"?: LocalizationContent;
}
export interface Promotion {
  campaignDetail: CampaignDetail;
  content: string | null;
  desktopBanner: string | null;
  from: string;
  id: string;
  localization: Localization;
  mobileBanner: string | null;
  name: string;
  order: number;
  promotionType: string;
  subSubject: string;
  terms: string | null;
  to: string; // ISO 8601 date string
  vipLevels: number[];
}

export interface GetPromotionDto {
  data: Promotion[];
  err: number;
  errmsg: string;
  errmsgid: string;
}
