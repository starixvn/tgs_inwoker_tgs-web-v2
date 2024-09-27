import { useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import {
  AccountHeaderContent,
  AnonymousHeaderContent,
  GameProviderList,
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
        className="w-full px-12 py-2 flex justify-between items-center"
        style={{
          background: "var(--header-background)",
        }}
      >
        <SystemTime />
        {isAuth ? <AccountHeaderContent /> : <AnonymousHeaderContent />}
      </div>

      <nav className="w-full px-12 py-2">
        <Link to="/" className="block w-fit">
          <img src={brandData?.desktopLogoUrl} alt="logo" className="h-8" />
        </Link>
        <GameProviderList />
      </nav>
    </header>
  );
};
