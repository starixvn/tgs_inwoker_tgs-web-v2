import { BasicDto } from "../types";

export enum IdentityFormStatus {
  WaitingVerify = 0,
  Approve = 1,
  Reject = 2,
}

/**
 * 玩家資訊
 * 沒註解的部分是因為後端不更新文件了 :)
 * @see https://raypro.atlassian.net/wiki/spaces/~805807228/pages/513671184/Api#%E7%8E%A9%E5%AE%B6%E8%B3%87%E8%A8%8A
 */
export interface PlayerInfo {
  identityformstatus: IdentityFormStatus; //身分表單審核狀態
  identityformid: string; //身分證審核表單的Id
  registercompleted: boolean; //玩家狀態是否在註冊中
  autotransfertogame: boolean; //是否自動轉帳到GP多錢包
  accumturnover: number; //累積流水
  accumdeposit: number; //累積存款
  levelupaccumulatebetamount: number; //升級累積投注金額(流水)
  levelupaccumulatedeposit: number; //升級累積存款
  fulllevel: boolean; //滿等(True:滿等;False:未滿等)
  playerisagentid: string; //代理ID
  bankinfoauthentication: boolean;
  birthdate: `${number}/${number}/${number}`;
  email: string;
  emailauthentication: boolean;
  facebookmessenger: string;
  identityauthentication: boolean;
  issetpaypassword: boolean;
  line: string;
  phone: number;
  areacode: `+${number}`;
  phoneauthentication: boolean;
  playercode: string;
  qq: string;
  realname: string;
  telegram: string;
  username: string;
  viber: string;
  viplevel: number;
  nextviplevel: number;
  wechat: string;
  whatsapp: string;
  zalo: string;
}

export interface GetPlayerInfoDto extends BasicDto {
  data: PlayerInfo;
}
