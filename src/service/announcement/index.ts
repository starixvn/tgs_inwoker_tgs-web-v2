import { api, getHeaders } from "@/service";
import { QUERY_KEYS } from "@/types";

const getAnnouncementList = async (token: string, language: string) => {
  const headers = getHeaders(token);
  const response = await api.get(
    `${QUERY_KEYS.ANNOUNCEMENT_LIST}${language}`,
    headers
  );
  return response.data.data;
};

export const announcement = {
  getAnnouncementList,
};

export * from "./types";
