import { BasicDto } from "../types";

export interface ProviderDto {
  code: string;
  description: string;
  gametypes: number[];
  transferwallet: boolean;
  name: string;
  status: number;
}

export enum PLATEFORM_TYPE {
  PC = 0,
  MOBILE = 1,
}

export type getGameProviderDto = {
  data: ProviderDto[];
} & BasicDto;
