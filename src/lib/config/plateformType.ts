import { PLATEFORM_TYPE } from "@/service";
import { isMobileOnly } from "react-device-detect";

export const plateformType = isMobileOnly
  ? PLATEFORM_TYPE.MOBILE
  : PLATEFORM_TYPE.PC;
