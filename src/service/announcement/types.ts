interface announcement {
  subject: string;
  content: string;
  from: number;
  to: number;
  localization: string;
  type: string;
}

export interface AnnouncementDto {
  deposits: announcement[];
  mains: announcement[];
  marquees: announcement[];
}

export interface GetAnnouncementDto {
  data: AnnouncementDto;
  err: number;
  errmsg: string;
  errmsgid: string;
}
