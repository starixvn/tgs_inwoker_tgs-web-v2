import { BasicDto } from "@/service";

export type LoginDto = {
  token: string;
  logintime: number;
} & BasicDto;

export interface LogoutDto extends BasicDto {
  updatetime: number;
}
