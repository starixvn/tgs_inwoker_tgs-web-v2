import { useQueryClient } from "@tanstack/react-query";
import {
  AccountHeaderContent,
  AnonymousHeaderContent,
  SystemTime,
} from "./components";
import { QUERY_KEYS } from "@/types";
import { GetBrandDto } from "@/service/common/types";
import { AxiosResponse } from "axios";

export const Header = () => {
  /**
   * @todo 改成動態判斷是否登入
   */
  const isAuth = false;
  const qc = useQueryClient();
  const data = qc.getQueryData([QUERY_KEYS.BRAND]) as
    | AxiosResponse<GetBrandDto>
    | undefined;
  const brandData = data?.data.data;

  return (
    <header className="w-full">
      <div
        className="w-full p-2 flex justify-between items-center"
        style={{
          background: "var(--header-background)",
        }}
      >
        <SystemTime />
        {isAuth ? <AccountHeaderContent /> : <AnonymousHeaderContent />}
      </div>

      <nav className="w-full">
        <img
          src={brandData?.desktopLogoUrl}
          alt={brandData?.code}
          className="h-8"
        />
      </nav>
    </header>
  );
};
