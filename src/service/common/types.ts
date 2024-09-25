import { BRAND_CODE, LOCALES, PLAYER_REGISTER_FLOW } from "@/types";
import { BasicDto } from "@/service";

export type GetBrandLanguageDto = {
  data: {
    culturecode: LOCALES;
  }[];
} & BasicDto;

export type BrandData = {
  brandId: string;
  code: BRAND_CODE;
  desktopLogoUrl: string;
  hasInvitationCode: boolean;
  loadingUrl: string;
  mobileLogoUrl: string;
  playerIdentityAuthenticationEnabled: boolean;
  playerRegisterFlowSettings: { type: PLAYER_REGISTER_FLOW }[];
  smsEnable: boolean;
};

export type GetBrandDto = {
  data: BrandData;
} & BasicDto;
