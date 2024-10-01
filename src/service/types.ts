import { AxiosError } from "axios";

export type ErrorDto = {
  err: number;
  errmsg: string;
  errmsgid: string;
};

export interface BasicDto extends ErrorDto {}

export type ApiResponseError = AxiosError<ErrorDto>;
