import { LOCALES } from "@/types";
import { BasicDto } from "@/service";

export type GetBrandLanguageDto = {
  data: {
    culturecode: LOCALES;
  }[];
} & BasicDto;
