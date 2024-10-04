import { BasicDto } from "@/service";

export interface GetWalletDto extends BasicDto {
  data: {
    main: number;
  };
}
