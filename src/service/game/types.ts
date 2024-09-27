import { BasicDto } from "../types";

export interface ProviderDto {
  code: string;
  description: string;
  gametypes: number[];
  transferwallet: boolean;
  name: string;
  status: number;
}

export type getGameProviderDto = {
  data: ProviderDto[];
} & BasicDto;
